import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Flask Vision Processor Dashboard</h1>
          <p className="text-lg text-gray-600">GPU-Accelerated Computer Vision API Frontend</p>
        </div>

        {/* Important Notice */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900">📦 Flask Application</CardTitle>
            <CardDescription className="text-amber-800">
              This is a Flask/Python application and cannot run in the v0 preview environment.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-amber-900">
            <p>
              The v0 preview is designed for Next.js applications. To use this Flask dashboard, please download the code
              and run it locally with Python.
            </p>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>🚀 Setup Instructions</CardTitle>
            <CardDescription>Follow these steps to run the Flask application locally</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">1. Download the Code</h3>
              <p className="text-sm text-gray-600">
                Click the three dots menu (⋯) in the top right and select "Download ZIP" or push to GitHub.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">2. Install Dependencies</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`pip install -r requirements.txt`}</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">3. Configure Environment</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`export VISION_API_URL=http://localhost:8007
export SECRET_KEY=your-secret-key`}</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">4. Run the Application</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`python app.py`}</code>
              </pre>
              <p className="text-sm text-gray-600">
                Access the dashboard at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>✨ Features</CardTitle>
            <CardDescription>What's included in this Flask dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Video Upload & Processing:</strong> Drag-and-drop interface with detection options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Real-time Monitoring:</strong> GPU metrics dashboard with auto-refresh
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Results Viewer:</strong> Browse and view processed videos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>HTMX Integration:</strong> Dynamic updates without complex JavaScript
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Alpine.js:</strong> Client-side state management for forms
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Tailwind CSS:</strong> Responsive, modern UI design
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle>🛠️ Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">Flask 3.0+</div>
                <div className="text-sm text-gray-600">Backend Framework</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">Jinja2</div>
                <div className="text-sm text-gray-600">Template Engine</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">HTMX</div>
                <div className="text-sm text-gray-600">Dynamic Updates</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">Alpine.js</div>
                <div className="text-sm text-gray-600">UI State</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">Tailwind CSS</div>
                <div className="text-sm text-gray-600">Styling</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-semibold text-gray-900">Chart.js</div>
                <div className="text-sm text-gray-600">Visualizations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Structure */}
        <Card>
          <CardHeader>
            <CardTitle>📁 Project Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`frontend/
├── app.py                    # Main Flask application
├── config.py                 # Configuration
├── requirements.txt          # Python dependencies
├── blueprints/
│   ├── api_client.py        # Vision API wrapper
│   ├── dashboard.py         # Dashboard routes
│   ├── process.py           # Video processing routes
│   ├── results.py           # Results routes
│   └── monitor.py           # Monitoring routes
├── templates/
│   ├── base.html            # Base layout
│   ├── components/          # Reusable components
│   ├── pages/               # Page templates
│   └── partials/            # HTMX partials
└── static/
    └── uploads/             # Temporary uploads`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
