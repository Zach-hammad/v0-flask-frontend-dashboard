"use client"

import { useState } from "react"
import { Video, Eye, User, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { UploadZone } from "@/components/upload-zone"
import { JobStatus } from "@/components/job-status"

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [jobId, setJobId] = useState<string | null>(null)
  const [detectionOptions, setDetectionOptions] = useState({
    vehicles: true,
    faces: false,
    licensePlates: false,
  })

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleSubmit = async () => {
    if (!selectedFile) return

    const formData = new FormData()
    formData.append("video", selectedFile)
    formData.append("detect_vehicles", String(detectionOptions.vehicles))
    formData.append("detect_faces", String(detectionOptions.faces))
    formData.append("detect_license_plates", String(detectionOptions.licensePlates))

    try {
      const response = await fetch("/api/process", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setJobId(data.job_id)
    } catch (error) {
      console.error("Upload failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Vision Processor</h1>
          <p className="text-muted-foreground text-lg">GPU-accelerated computer vision for video analysis</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">Upload Video</h2>
              <UploadZone onFileSelect={handleFileSelect} selectedFile={selectedFile} />
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">Detection Options</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="vehicles"
                    checked={detectionOptions.vehicles}
                    onCheckedChange={(checked) =>
                      setDetectionOptions({ ...detectionOptions, vehicles: checked as boolean })
                    }
                  />
                  <Label htmlFor="vehicles" className="flex items-center gap-2 cursor-pointer text-foreground">
                    <Car className="w-4 h-4 text-primary" />
                    Detect Vehicles
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="faces"
                    checked={detectionOptions.faces}
                    onCheckedChange={(checked) =>
                      setDetectionOptions({ ...detectionOptions, faces: checked as boolean })
                    }
                  />
                  <Label htmlFor="faces" className="flex items-center gap-2 cursor-pointer text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    Detect Faces
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="plates"
                    checked={detectionOptions.licensePlates}
                    onCheckedChange={(checked) =>
                      setDetectionOptions({ ...detectionOptions, licensePlates: checked as boolean })
                    }
                  />
                  <Label htmlFor="plates" className="flex items-center gap-2 cursor-pointer text-foreground">
                    <Eye className="w-4 h-4 text-primary" />
                    Detect License Plates
                  </Label>
                </div>
              </div>
            </Card>

            <Button
              onClick={handleSubmit}
              disabled={!selectedFile}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Video className="w-4 h-4 mr-2" />
              Process Video
            </Button>
          </div>

          <div className="space-y-6">
            {jobId && <JobStatus jobId={jobId} />}

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">GPU Usage</span>
                  <span className="text-primary font-mono">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Queue Length</span>
                  <span className="text-primary font-mono">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg Process Time</span>
                  <span className="text-primary font-mono">2.4s</span>
                </div>
              </div>
              <Link href="/monitoring">
                <Button
                  variant="outline"
                  className="w-full mt-4 border-border text-foreground hover:bg-secondary bg-transparent"
                >
                  View Full Metrics
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
