from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/health")
def hello_world():
    return jsonify(health="OK", version=2)

@app.route("/todo")
def get_todo():
    return jsonify([
        {"id": 1, "title": "delectus aut autem"},
        {"id": 2, "title": "quis ut nam facilis et officia qui"}
    ])