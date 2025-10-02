from flask import Blueprint, render_template, jsonify
from .api_client import api_client

monitor_bp = Blueprint('monitor', __name__)

@monitor_bp.route('/')
def index():
    """System monitoring dashboard"""
    return render_template('pages/monitor.html')

@monitor_bp.route('/metrics')
def metrics():
    """Get current GPU metrics (HTMX endpoint)"""
    try:
        metrics = api_client.get_gpu_metrics()
        return render_template('partials/metrics_update.html', metrics=metrics)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
