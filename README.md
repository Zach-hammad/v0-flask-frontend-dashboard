# Flask Vision Processor Dashboard

A modern Flask web application for a GPU-accelerated computer vision API. Built with Flask, Jinja2, HTMX, Alpine.js, and Tailwind CSS.

## 🚨 Important Note

**This is a Flask/Python application and cannot run in the v0 preview environment.** The v0 preview is designed for Next.js applications. To use this dashboard, download the code and run it locally with Python.

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- pip
- Access to a Vision Processor API (default: `http://localhost:8007`)

### Installation

1. **Download the code**
   - Click the three dots menu (⋯) in the top right of v0 and select "Download ZIP"
   - Or clone from GitHub if you've pushed it there

2. **Install dependencies**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

3. **Configure environment variables**
   \`\`\`bash
   export VISION_API_URL=http://localhost:8007
   export SECRET_KEY=your-secret-key-change-in-production
   \`\`\`
   
   Or create a `.env` file (see `.env.example`):
   \`\`\`
   SECRET_KEY=your-secret-key-change-in-production
   VISION_API_URL=http://localhost:8007
   \`\`\`

4. **Create upload directory**
   \`\`\`bash
   mkdir -p static/uploads
   \`\`\`

5. **Run the application**
   \`\`\`bash
   python app.py
   \`\`\`

6. **Access the dashboard**
   Open your browser to `http://localhost:3000`

## ✨ Features

- **Video Upload & Processing**: Drag-and-drop interface with configurable detection options
  - Vehicle detection
  - Face detection
  - License plate detection
  - Annotated video generation

- **Real-time Monitoring**: GPU metrics dashboard with auto-refresh
  - GPU memory usage
  - GPU utilization
  - Temperature monitoring
  - System status

- **Results Viewer**: Browse and view processed videos with detection data

- **Modern Tech Stack**:
  - HTMX for dynamic updates without complex JavaScript
  - Alpine.js for client-side state management
  - Tailwind CSS for responsive design
  - Jinja2 template inheritance

## 📁 Project Structure

\`\`\`
frontend/
├── app.py                      # Main Flask application
├── config.py                   # Configuration
├── requirements.txt            # Python dependencies
├── .env.example               # Environment variables template
├── blueprints/
│   ├── api_client.py          # Vision API wrapper
│   ├── dashboard.py           # Dashboard routes
│   ├── process.py             # Video processing routes
│   ├── results.py             # Results routes
│   └── monitor.py             # Monitoring routes
├── templates/
│   ├── base.html              # Base layout
│   ├── components/
│   │   └── nav.html           # Navigation component
│   ├── pages/
│   │   ├── dashboard.html     # Home dashboard
│   │   ├── process.html       # Video upload & processing
│   │   ├── monitor.html       # System monitoring
│   │   ├── results.html       # Results listing
│   │   └── result_detail.html # Result details
│   └── partials/              # HTMX partial responses
│       ├── job_status.html    # Job status updates
│       └── metrics_update.html # Metrics updates
└── static/
    └── uploads/               # Temporary file uploads
\`\`\`

## 🛠️ Tech Stack

- **Backend**: Flask 3.0+ with Blueprints
- **Templates**: Jinja2 with template inheritance
- **Interactivity**: HTMX for dynamic updates, Alpine.js for UI state
- **Styling**: Tailwind CSS (CDN)
- **Charts**: Chart.js for GPU metrics visualization
- **HTTP Client**: requests library for API calls

## 🔌 API Integration

The dashboard connects to a Vision Processor API with the following endpoints:

- `POST /unified/process` - Submit video for processing
- `GET /health` - Get GPU metrics and system status
- `GET /jobs/{job_id}` - Get job status (if supported)

Configure the API URL via the `VISION_API_URL` environment variable.

## 🚀 Production Deployment

For production, use a WSGI server like Gunicorn:

\`\`\`bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:3000 app:app
\`\`\`

Or use Docker:

\`\`\`dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:3000", "app:app"]
\`\`\`

## 📝 Configuration

Edit `config.py` to customize:

- `SECRET_KEY` - Flask secret key for sessions
- `VISION_API_URL` - Vision Processor API endpoint
- `MAX_CONTENT_LENGTH` - Maximum upload file size (default: 500MB)
- `UPLOAD_FOLDER` - Temporary upload directory
- `ALLOWED_EXTENSIONS` - Allowed video file extensions

## 🤝 Contributing

This project was generated with [v0.app](https://v0.app). Continue building at:

**[https://v0.app/chat/projects/vm5eTpUj38r](https://v0.app/chat/projects/vm5eTpUj38r)**

## 📄 License

MIT
