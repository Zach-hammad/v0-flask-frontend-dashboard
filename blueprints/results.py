from flask import Blueprint, render_template, jsonify
from .api_client import api_client

results_bp = Blueprint('results', __name__)

@results_bp.route('/')
def index():
    """Results listing page"""
    return render_template('pages/results.html')

@results_bp.route('/<job_id>')
def view(job_id):
    """View specific result"""
    try:
        result = api_client.get_job_status(job_id)
        return render_template('pages/result_detail.html', result=result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
