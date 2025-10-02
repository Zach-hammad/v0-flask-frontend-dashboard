from flask import Flask, render_template
from config import Config
from blueprints.dashboard import dashboard_bp
from blueprints.process import process_bp
from blueprints.results import results_bp
from blueprints.monitor import monitor_bp

app = Flask(__name__)
app.config.from_object(Config)

# Register blueprints
app.register_blueprint(dashboard_bp, url_prefix='/')
app.register_blueprint(process_bp, url_prefix='/process')
app.register_blueprint(results_bp, url_prefix='/results')
app.register_blueprint(monitor_bp, url_prefix='/monitor')

@app.route('/health')
def health():
    return {'status': 'healthy'}, 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)
