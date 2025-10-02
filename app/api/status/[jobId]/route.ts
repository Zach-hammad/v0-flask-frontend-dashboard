import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { jobId: string } }) {
  try {
    // In production, fetch from your FastAPI backend
    // const response = await fetch(`http://your-api-url/status/${params.jobId}`)

    // Mock response for demo
    const progress = Math.min(Math.floor(Math.random() * 100), 100)
    const status = progress === 100 ? "completed" : "processing"

    return NextResponse.json({
      job_id: params.jobId,
      status,
      progress,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch status" }, { status: 500 })
  }
}
