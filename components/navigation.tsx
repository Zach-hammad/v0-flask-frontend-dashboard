import Link from "next/link"
import { Activity, Video, BarChart3 } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">VisionAI</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Video className="w-4 h-4" />
              Process
            </Link>
            <Link
              href="/monitoring"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              Monitoring
            </Link>
            <Link
              href="/results"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Activity className="w-4 h-4" />
              Results
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
