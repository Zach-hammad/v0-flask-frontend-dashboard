"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { GpuMetrics } from "@/components/gpu-metrics"
import { Cpu, HardDrive, Zap, Activity } from "lucide-react"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">System Monitoring</h1>
          <p className="text-muted-foreground text-lg">Real-time GPU and system metrics</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">GPU Usage</span>
              <Cpu className="w-4 h-4 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">45%</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-chart-3">↑ 5%</span> from last hour
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Memory</span>
              <HardDrive className="w-4 h-4 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">8.2 GB</div>
            <div className="text-xs text-muted-foreground">of 16 GB total</div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Temperature</span>
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">68°C</div>
            <div className="text-xs text-muted-foreground">Normal range</div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Active Jobs</span>
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">3</div>
            <div className="text-xs text-muted-foreground">2 queued</div>
          </Card>
        </div>

        <GpuMetrics />
      </main>
    </div>
  )
}
