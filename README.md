# KVaidya 🩺 – AI-Powered Disease Prediction and Report Analysis Platform

KVaidya is a full-stack healthcare assistant that uses AI to:
- Predict diseases based on user symptoms using a trained ML model
- Analyze medical PDF reports using Gemini API (Generative AI)
- Provide visual insights on disease and symptom frequency

---

## 🧠 Features

✅ AI Disease Prediction  
✅ Medical Report Q&A using Gemini  
✅ Live Charts & Statistics  
✅ Fully Responsive Next.js UI  
✅ Deployed Backend on Render  
✅ Modular Flask API Architecture

---

## 🧩 Tech Stack

| Frontend | Backend  | AI & ML      |
|----------|----------|--------------|
| Next.js  | Flask    | RandomForest |
| Tailwind | Python   | Gemini API   |
| Recharts | Pandas   | LangChain (optional) |

---

## 🚀 Live Demo

- Frontend: [https://kvaidya.vercel.app](https://kvaidya.vercel.app)
- Backend API: [https://kvaidya.onrender.com](https://kvaidya.onrender.com)

---

## 📁 Project Structure

```
.
├── disease-predictor/        # Frontend (Next.js)
│   └── app/                  # Routes & components
│
└── Server2/                  # Backend (Flask API)
    ├── app.py                # Main Flask app
    ├── Training.csv          # Training data
    └── temp_uploads/         # Temp folder for PDF uploads
```

---

## 🧪 Features In Detail

### 1. 🤒 Disease Prediction
Send a POST request to `/predict` with symptom list:

```json
POST /predict
{
  "symptoms": ["headache", "fatigue", "nausea"]
}
```

Returns:

```json
{ "disease": "Migraine" }
```

---

### 2. 📄 Medical Report Q&A (Gemini API)

Upload a medical PDF and ask a question like:
```
"Is there any sign of infection?"
```

Backend uploads the file to Gemini API and returns an answer based on file content.

---

### 3. 📊 Stats Endpoints

| Endpoint                     | Description                             |
|-----------------------------|-----------------------------------------|
| `/symptoms`                 | List of all available symptoms          |
| `/stats`                    | Disease distribution in training data   |
| `/symptom_frequency`        | Frequency of each symptom               |
| `/symptom_disease_relations`| Relation between symptoms and diseases  |

---

## ⚙️ Environment Variables

### `.env` for Flask Backend (`Server2/`)

```env
GOOGLE_API_KEY=your_gemini_api_key
```

> Note: Upload this securely to Render’s environment variables.

---

## 🛠️ Setup Instructions

### 🧩 Frontend (Next.js)

```bash
cd disease-predictor
npm install
npm run dev
```

> Update `API_URL` in code or `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://kvaidya.onrender.com
```

### 🧠 Backend (Flask)

```bash
cd Server2
pip install -r requirements.txt
python app.py
```

---

## 🛰 Deployment

- Frontend is deployed on **Vercel**
- Backend is hosted on **Render.com** (Free Tier)

---

## 👨‍💻 Author

**Nikhil Kumar**  
Final-year B.Tech CSE Student  
Passionate about AI + Full-stack + Healthcare

---

## 🌟 Contribute

Feel free to fork, open issues or contribute to improve the project!  
Every PR is appreciated!

---
