# pylint: disable=all

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from ultralytics import YOLO
import os
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load model once
# Path to your trained YOLOv8 semantic segmentation model
model = YOLO("best.pt")


@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files["image"]

    # Save uploaded image temporarily
    temp_path = "temp.jpg"
    image.save(temp_path)

    # Run YOLOv8 prediction
    results = model.predict(source=temp_path, conf=0.005)
    result_image = results[0].plot()  # Get visualized image

    # Convert image to send back
    img_pil = Image.fromarray(result_image)
    img_io = io.BytesIO()
    img_pil.save(img_io, "JPEG")
    img_io.seek(0)

    # Clean up temp file
    os.remove(temp_path)

    return send_file(img_io, mimetype="image/jpeg")


if __name__ == "__main__":
    app.run(debug=True)
