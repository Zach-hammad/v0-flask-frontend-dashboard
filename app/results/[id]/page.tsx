"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResultDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/results">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Result Details</h1>
          <p className="text-muted-foreground text-lg font-mono">Job ID: {params.id}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-card-foreground">Processed Video</h2>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video player placeholder</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">Detection Timeline</h2>
              <div className="space-y-3">
                {[
                  { time: "00:05", type: "Vehicle", confidence: 0.95 },
                  { time: "00:12", type: "License Plate", confidence: 0.88 },
                  { time: "00:18", type: "Vehicle", confidence: 0.92 },
                  { time: "00:24", type: "Face", confidence: 0.87 },
                ].map((detection, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-primary">{detection.time}</span>
                      <span className="text-foreground">{detection.type}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {(detection.confidence * 100).toFixed(0)}% confidence
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Detections</span>
                  <span className="text-primary font-bold">65</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vehicles</span>
                  <span className="text-foreground font-mono">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Faces</span>
                  <span className="text-foreground font-mono">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License Plates</span>
                  <span className="text-foreground font-mono">8</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Processing Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-mono">2.4s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPU Used</span>
                  <span className="text-foreground font-mono">NVIDIA RTX 4090</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model</span>
                  <span className="text-foreground font-mono">YOLOv8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution</span>
                  <span className="text-foreground font-mono">1920x1080</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
