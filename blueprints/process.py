from flask import Blueprint, render_template, request, jsonify, current_app
from werkzeug.utils import secure_filename
from .api_client import api_client
import os

process_bp = Blueprint('process', __name__)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']

@process_bp.route('/')
def index():
    """Video upload and processing page"""
    return render_template('pages/process.html')

@process_bp.route('/upload', methods=['POST'])
def upload():
    """Handle video upload and submit to API"""
    if 'video' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['video']
    if file.filename == '' or not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type'}), 400

    # Save file temporarily
    filename = secure_filename(file.filename)
    filepath = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Get configuration from form
    config = {
        'enable_vehicle': request.form.get('enable_vehicle') == 'on',
        'enable_face': request.form.get('enable_face') == 'on',
        'enable_plate': request.form.get('enable_plate') == 'on',
        'enable_video': request.form.get('enable_video') == 'on',
        'output_format': request.form.get('output_format', 'json'),
    }

    # Submit to Vision API
    try:
        with open(filepath, 'rb') as f:
            result = api_client.process_video(f, config)

        # Return HTMX-friendly response
        return render_template('partials/job_status.html',
                             job=result,
                             status='processing')
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        # Clean up temp file
        if os.path.exists(filepath):
            os.remove(filepath)

@process_bp.route('/status/<job_id>')
def status(job_id):
    """Poll job status (HTMX endpoint)"""
    try:
        status_data = api_client.get_job_status(job_id)
        return render_template('partials/job_status.html',
                             job=status_data,
                             job_id=job_id)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
