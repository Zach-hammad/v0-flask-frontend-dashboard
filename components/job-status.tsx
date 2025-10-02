"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface JobStatusProps {
  jobId: string
}

export function JobStatus({ jobId }: JobStatusProps) {
  const [status, setStatus] = useState<"processing" | "completed" | "failed">("processing")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/status/${jobId}`)
        const data = await response.json()

        setStatus(data.status)
        setProgress(data.progress || 0)

        if (data.status === "completed" || data.status === "failed") {
          clearInterval(interval)
        }
      } catch (error) {
        console.error("Failed to fetch status:", error)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [jobId])

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-lg font-semibold mb-4 text-card-foreground">Processing Status</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {status === "processing" && (
            <>
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
              <span className="text-foreground">Processing...</span>
            </>
          )}
          {status === "completed" && (
            <>
              <CheckCircle2 className="w-5 h-5 text-chart-3" />
              <span className="text-foreground">Completed</span>
            </>
          )}
          {status === "failed" && (
            <>
              <XCircle className="w-5 h-5 text-destructive" />
              <span className="text-foreground">Failed</span>
            </>
          )}
        </div>

        {status === "processing" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-mono">{progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {status === "completed" && (
          <Link href={`/results/${jobId}`}>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">View Results</Button>
          </Link>
        )}

        <div className="pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>Job ID</span>
              <span className="font-mono text-primary">{jobId}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
