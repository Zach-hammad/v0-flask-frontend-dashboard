import requests
from flask import current_app
from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

class VisionAPIClient:
    """Wrapper for Vision Processor API"""

    def __init__(self):
        self.base_url = current_app.config['VISION_API_URL']
        self.session = requests.Session()

    def process_video(self, video_file, config: Dict[str, Any]) -> Dict[str, Any]:
        """Submit video for processing"""
        url = f"{self.base_url}/unified/process"

        files = {'file': video_file}
        data = {
            'enable_vehicle_detection': config.get('enable_vehicle', True),
            'enable_face_detection': config.get('enable_face', True),
            'enable_license_plate_detection': config.get('enable_plate', True),
            'enable_annotated_video': config.get('enable_video', True),
            'output_format': config.get('output_format', 'json'),
        }

        try:
            response = self.session.post(url, files=files, data=data, timeout=300)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f"API request failed: {e}")
            raise

    def get_job_status(self, job_id: str) -> Dict[str, Any]:
        """Get processing job status (if API supports it)"""
        url = f"{self.base_url}/jobs/{job_id}"
        response = self.session.get(url)
        response.raise_for_status()
        return response.json()

    def get_gpu_metrics(self) -> Dict[str, Any]:
        """Get current GPU metrics"""
        url = f"{self.base_url}/health"
        response = self.session.get(url)
        response.raise_for_status()
        return response.json()

api_client = VisionAPIClient()
