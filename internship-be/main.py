from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/health")
def hello_world():
    return jsonify(health="OK")

@app.route("/todo")
def get_todo():
    return jsonify([
        {"id": 1, "title": "delectus aut autem"},
        {"id": 2, "title": "quis ut nam facilis et officia qui"}
    ])

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)