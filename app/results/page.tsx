"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, Clock } from "lucide-react"
import Link from "next/link"

const mockResults = [
  {
    id: "job-001",
    filename: "traffic_video.mp4",
    timestamp: "2 hours ago",
    detections: { vehicles: 45, faces: 12, plates: 8 },
    duration: "2.4s",
  },
  {
    id: "job-002",
    filename: "parking_lot.mp4",
    timestamp: "5 hours ago",
    detections: { vehicles: 23, faces: 0, plates: 15 },
    duration: "1.8s",
  },
  {
    id: "job-003",
    filename: "street_view.mp4",
    timestamp: "1 day ago",
    detections: { vehicles: 67, faces: 34, plates: 22 },
    duration: "3.2s",
  },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Processing Results</h1>
          <p className="text-muted-foreground text-lg">View and download completed video analysis</p>
        </div>

        <div className="space-y-4">
          {mockResults.map((result) => (
            <Card key={result.id} className="p-6 bg-card border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.filename}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {result.timestamp}
                    </span>
                    <span className="font-mono text-primary">{result.id}</span>
                    <span>Processed in {result.duration}</span>
                  </div>

                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">{result.detections.vehicles}</div>
                      <div className="text-xs text-muted-foreground">Vehicles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{result.detections.faces}</div>
                      <div className="text-xs text-muted-foreground">Faces</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-3">{result.detections.plates}</div>
                      <div className="text-xs text-muted-foreground">Plates</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/results/${result.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-secondary bg-transparent"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-secondary bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
