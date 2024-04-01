from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Aqui especificas la conexion de donde va el servidor de nextjs
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route("/api/data")
def get_data():
    # Tu lógica de Python para obtener datos
    data = {"message": "Hola desde Flask!"}
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
