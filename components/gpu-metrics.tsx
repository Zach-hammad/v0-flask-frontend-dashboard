"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const mockData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}m`,
  usage: Math.floor(Math.random() * 30) + 40,
  memory: Math.floor(Math.random() * 20) + 50,
  temp: Math.floor(Math.random() * 10) + 60,
}))

export function GpuMetrics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">GPU Usage Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <XAxis dataKey="time" stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} />
            <YAxis stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.12 0 0)",
                border: "1px solid oklch(0.22 0 0)",
                borderRadius: "8px",
                color: "oklch(0.98 0 0)",
              }}
            />
            <Line type="monotone" dataKey="usage" stroke="oklch(0.65 0.25 240)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Memory Usage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <XAxis dataKey="time" stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} />
            <YAxis stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.12 0 0)",
                border: "1px solid oklch(0.22 0 0)",
                borderRadius: "8px",
                color: "oklch(0.98 0 0)",
              }}
            />
            <Line type="monotone" dataKey="memory" stroke="oklch(0.55 0.22 280)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Temperature</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <XAxis dataKey="time" stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} />
            <YAxis stroke="oklch(0.58 0 0)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.12 0 0)",
                border: "1px solid oklch(0.22 0 0)",
                borderRadius: "8px",
                color: "oklch(0.98 0 0)",
              }}
            />
            <Line type="monotone" dataKey="temp" stroke="oklch(0.60 0.20 180)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Processing Queue</h3>
        <div className="space-y-3">
          {[
            { id: "job-001", status: "processing", progress: 65 },
            { id: "job-002", status: "queued", progress: 0 },
            { id: "job-003", status: "queued", progress: 0 },
          ].map((job) => (
            <div key={job.id} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-mono">{job.id}</span>
                <span className="text-primary">{job.status}</span>
              </div>
              {job.status === "processing" && (
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${job.progress}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
