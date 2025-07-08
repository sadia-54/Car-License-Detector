# 🚘 Car License Plate Detector using YOLOv8

A full-stack web application that detects car license plates from uploaded images using a trained YOLOv8 object detection model.

> Built with **YOLOv8 + Flask (Backend)** and **Next.js + Tailwind CSS (Frontend)**.

---

## 📸 Demo

<p float="left">
  <img src="screenshots/upload.jpg" width="300" alt="Upload Image">
  <img src="screenshots/predicted.jpg" width="300" alt="Predicted Result">
</p>

> ✨ The predicted license plate is highlighted by YOLOv8 and displayed below the uploaded image.

---

## 🔍 Features

- Upload an image from your browser
- License plate is detected using a **custom-trained YOLOv8 model**
- The predicted image is rendered instantly below the uploaded one
- Smooth frontend experience with **Next.js & Tailwind CSS**
- **Flask API** with YOLOv8 runs inference and returns visualized output
- Compatible with both local and Colab-trained models

---

## 🧠 Model Training

- Dataset: [Roboflow](https://roboflow.com/)
- Format: YOLOv8 Object Detection
- Training platform: **Google Colab**
- Model exported as: `best.pt`

---

## 🛠️ Installation & Setup

### 🔹 Backend (Flask + YOLOv8)

```bash
# Clone the repo
git clone https://github.com/yourusername/car-license-detector.git
cd car-license-detector/backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/macOS

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
