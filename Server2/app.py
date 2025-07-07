from dotenv import load_dotenv
import os
from werkzeug.utils import secure_filename
import pandas as pd # For disease prediction
from sklearn.ensemble import RandomForestClassifier # For disease prediction
import numpy as np # For disease prediction
from flask import Flask, request, jsonify # Core Flask
from flask_cors import CORS # For handling Cross-Origin Resource Sharing
import google.generativeai as genai


# ✅ Load environment variables only once
load_dotenv()
app = Flask(__name__)
CORS(app)
# Configure the Gemini API
try:
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
except AttributeError as e:
    print(f"Error: The GOOGLE_API_KEY environment variable is not set. {e}")
    # You might want to exit or raise an exception here in a real app
except Exception as e:
    print(f"An unexpected error occurred during Gemini API configuration: {e}")


# Temporary upload folder (consider a more robust solution for production)
UPLOAD_FOLDER = 'temp_uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 # 16 MB upload limit


# Symptom and disease lists
l1 = [
    "itching",
    "skin_rash",
    "nodal_skin_eruptions",
    "continuous_sneezing",
    "shivering",
    "chills",
    "joint_pain",
    "stomach_pain",
    "acidity",
    "ulcers_on_tongue",
    "muscle_wasting",
    "vomiting",
    "burning_micturition",
    "spotting_ urination",
    "fatigue",
    "weight_gain",
    "anxiety",
    "cold_hands_and_feets",
    "mood_swings",
    "weight_loss",
    "restlessness",
    "lethargy",
    "patches_in_throat",
    "irregular_sugar_level",
    "cough",
    "high_fever",
    "sunken_eyes",
    "breathlessness",
    "sweating",
    "dehydration",
    "indigestion",
    "headache",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "pain_behind_the_eyes",
    "back_pain",
    "constipation",
    "abdominal_pain",
    "diarrhoea",
    "mild_fever",
    "yellow_urine",
    "yellowing_of_eyes",
    "acute_liver_failure",
    "fluid_overload",
    "swelling_of_stomach",
    "swelled_lymph_nodes",
    "malaise",
    "blurred_and_distorted_vision",
    "phlegm",
    "throat_irritation",
    "redness_of_eyes",
    "sinus_pressure",
    "runny_nose",
    "congestion",
    "chest_pain",
    "weakness_in_limbs",
    "fast_heart_rate",
    "pain_during_bowel_movements",
    "pain_in_anal_region",
    "bloody_stool",
    "irritation_in_anus",
    "neck_pain",
    "dizziness",
    "cramps",
    "bruising",
    "obesity",
    "swollen_legs",
    "swollen_blood_vessels",
    "puffy_face_and_eyes",
    "enlarged_thyroid",
    "brittle_nails",
    "swollen_extremeties",
    "excessive_hunger",
    "extra_marital_contacts",
    "drying_and_tingling_lips",
    "slurred_speech",
    "knee_pain",
    "hip_joint_pain",
    "muscle_weakness",
    "stiff_neck",
    "swelling_joints",
    "movement_stiffness",
    "spinning_movements",
    "loss_of_balance",
    "unsteadiness",
    "weakness_of_one_body_side",
    "loss_of_smell",
    "bladder_discomfort",
    "foul_smell_of urine",
    "continuous_feel_of_urine",
    "passage_of_gases",
    "internal_itching",
    "toxic_look_(typhos)",
    "depression",
    "irritability",
    "muscle_pain",
    "altered_sensorium",
    "red_spots_over_body",
    "belly_pain",
    "abnormal_menstruation",
    "dischromic _patches",
    "watering_from_eyes",
    "increased_appetite",
    "polyuria",
    "family_history",
    "mucoid_sputum",
    "rusty_sputum",
    "lack_of_concentration",
    "visual_disturbances",
    "receiving_blood_transfusion",
    "receiving_unsterile_injections",
    "coma",
    "stomach_bleeding",
    "distention_of_abdomen",
    "history_of_alcohol_consumption",
    "fluid_overload.1",
    "blood_in_sputum",
    "prominent_veins_on_calf",
    "palpitations",
    "painful_walking",
    "pus_filled_pimples",
    "blackheads",
    "scurring",
    "skin_peeling",
    "silver_like_dusting",
    "small_dents_in_nails",
    "inflammatory_nails",
    "blister",
    "red_sore_around_nose",
    "yellow_crust_ooze",
]

disease = [
    "Fungal infection",
    "Allergy",
    "GERD",
    "Chronic cholestasis",
    "Drug Reaction",
    "Peptic ulcer diseae",
    "AIDS",
    "Diabetes",
    "Gastroenteritis",
    "Bronchial Asthma",
    "Hypertension",
    "Migraine",
    "Cervical spondylosis",
    "Paralysis (brain hemorrhage)",
    "Jaundice",
    "Malaria",
    "Chicken pox",
    "Dengue",
    "Typhoid",
    "hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "Hepatitis D",
    "Hepatitis E",
    "Alcoholic hepatitis",
    "Tuberculosis",
    "Common Cold",
    "Pneumonia",
    "Dimorphic hemmorhoids(piles)",
    "Heart attack",
    "Varicose veins",
    "Hypothyroidism",
    "Hyperthyroidism",
    "Hypoglycemia",
    "Osteoarthristis",
    "Arthritis",
    "(vertigo) Paroymsal  Positional Vertigo",
    "Acne",
    "Urinary tract infection",
    "Psoriasis",
    "Impetigo",
]

# Clean the disease list
disease = [d.strip() for d in disease]
mapping = {d: i for i, d in enumerate(disease)}

# Load and train the model
df = pd.read_csv("Training.csv")


df["prognosis"] = df["prognosis"].str.strip()
# df.replace({"prognosis": mapping}, inplace=True)
df.replace({"prognosis": mapping}, inplace=True)
df = df.infer_objects(copy=False)

X = df[l1]
y = df["prognosis"]
model = RandomForestClassifier()
model.fit(X, np.ravel(y))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    symptoms = data.get("symptoms", [])

    input_vector = [0] * len(l1)
    for symptom in symptoms:
        if symptom in l1:
            input_vector[l1.index(symptom)] = 1

    prediction = model.predict([input_vector])[0]
    predicted_disease = disease[prediction]

    return jsonify({"disease": predicted_disease})


@app.route("/symptoms", methods=["GET"])
def get_symptoms():
    return jsonify({"symptoms": list(set(l1))})


@app.route("/stats", methods=["GET"])
def stats():
    disease_counts = df["prognosis"].value_counts().to_dict()
    disease_names = {i: disease[i] for i in disease_counts.keys()}
    return jsonify({disease_names[k]: v for k, v in disease_counts.items()})


@app.route("/symptom_frequency", methods=["GET"])
def symptom_frequency():
    symptom_freq = df[l1].sum().to_dict()
    return jsonify(symptom_freq)


@app.route("/symptom_disease_relations", methods=["GET"])
def symptom_disease_relations():
    relations = {}
    for symptom in l1:
        diseases_with_symptom = df[df[symptom] == 1]["prognosis"].unique()
        diseases_names = [disease[i] for i in diseases_with_symptom]
        relations[symptom] = {"diseases": diseases_names, "count": len(diseases_names)}
    return jsonify(relations)


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "message": "PDF Q&A and Disease Prediction API",
        "endpoints": {
            "RAG_PDF_QA": {
                "/upload": "POST a PDF file for Langchain RAG processing.",
                "/ask": "POST a question (form data: 'question') to query the RAG-processed PDF."
            },
            "Direct_Gemini_File_API": {
                "/upload_direct_gemini": "POST a PDF file to upload to Gemini File API.",
                "/ask_direct_gemini": "POST question and file_uri (form data) to query Gemini with the uploaded file."
            },
            "GenAI_Client_File_API": {
                "/upload_with_genai_client": "POST a PDF file using genai.Client, caches file reference.",
                "/ask_with_genai_client": "POST question and filename (form data) OR a new file to query with genai.Client."
            },
            "Disease_Prediction": {
                "/predict": "POST symptoms (JSON: {'symptoms': ['symptom1', ...]}) for disease prediction.",
                "/symptoms": "GET list of available symptoms for prediction.",
                "/stats": "GET disease statistics from training data.",
                "/symptom_frequency": "GET frequency of each symptom in training data.",
                "/symptom_disease_relations": "GET diseases associated with each symptom."
            }
        },
        "disease_model_status": "Loaded" if model else "Not loaded",
    })

@app.route('/api/analyze-report', methods=['POST'])
def analyze_report():
    if 'pdf' not in request.files:
        return jsonify({"error": "No PDF file provided"}), 400
    if 'question' not in request.form:
        return jsonify({"error": "No question provided"}), 400

    pdf_file = request.files['pdf']
    user_question = request.form['question']

    if pdf_file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if pdf_file and pdf_file.mimetype == 'application/pdf':
        try:
            filename = secure_filename(pdf_file.filename)
            temp_pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            pdf_file.save(temp_pdf_path)

            # 1. Upload the PDF to Gemini Files API
            print(f"Uploading file: {temp_pdf_path}")
            uploaded_file = genai.upload_file(path=temp_pdf_path, display_name=filename)
            print(f"Uploaded file '{uploaded_file.display_name}' as: {uploaded_file.uri}")

            # 2. Prepare the prompt for the Gemini model
            # Choose a model that supports file input.
            # For text extraction and Q&A from PDFs, gemini-1.5-flash or gemini-1.5-pro are good choices.
            model = genai.GenerativeModel(model_name="gemini-1.5-flash") # Or "gemini-1.5-pro"

            prompt_parts = [
                uploaded_file, # The uploaded file object
                "\n\nIMPORTANT: You are an AI assistant. Your task is to help the user understand the provided medical report by answering their specific question. ",
                "tell the user to refer to the medical report for details in short paragraph.",
                "Based on the content of the medical report, please answer the following question:",
                f"\nUser's Question: {user_question}",
            ]

            # 3. Generate content
            print("Generating response from Gemini...")
            response = model.generate_content(prompt_parts)

            # Clean up the temporary file after processing
            if os.path.exists(temp_pdf_path):
                os.remove(temp_pdf_path)
            # Note: Gemini Files API automatically deletes files after 48 hours.
            # You can also manually delete them using genai.delete_file(uploaded_file.name) if needed sooner.

            return jsonify({"response": response.text})

        except Exception as e:
            print(f"Error processing request: {e}")
            # Clean up in case of error too
            if 'temp_pdf_path' in locals() and os.path.exists(temp_pdf_path):
                os.remove(temp_pdf_path)
            if 'uploaded_file' in locals() and uploaded_file:
                try:
                    genai.delete_file(uploaded_file.name) # Attempt to delete from Gemini if upload succeeded
                except Exception as del_e:
                    print(f"Error deleting uploaded file from Gemini: {del_e}")
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Invalid file type. Only PDF is allowed."}), 400


if __name__ == "__main__":
    print(f"Flask app starting. Debug mode: {app.debug}")
    print("Available endpoints will be listed at http://localhost:5000/")
    # The disease model and FAISS index rely on files. Ensure paths are correct.
    app.run(host="0.0.0.0", port=5000, debug=True)