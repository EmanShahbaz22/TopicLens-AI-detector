from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from textblob import TextBlob
from sklearn.feature_extraction.text import TfidfVectorizer
from fastapi.middleware.cors import CORSMiddleware
import docx
import PyPDF2
import io

app = FastAPI(title="TopicLens API")

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str


def extract_text_from_file(file: UploadFile):
    if file.filename.endswith(".pdf"):
        reader = PyPDF2.PdfReader(file.file)
        return " ".join([page.extract_text() or "" for page in reader.pages])

    if file.filename.endswith(".docx"):
        document = docx.Document(io.BytesIO(file.file.read()))
        return " ".join([p.text for p in document.paragraphs])

    return ""


def analyze(text: str):
    # -------- Sentiment --------
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    if polarity > 0.1:
        sentiment = "Positive"
    elif polarity < -0.1:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"

    confidence = abs(polarity)

    # -------- Keywords (Human-friendly) --------
    vectorizer = TfidfVectorizer(
        stop_words="english",
        max_features=10,
        ngram_range=(1, 2)
    )

    tfidf_matrix = vectorizer.fit_transform([text])
    scores = tfidf_matrix.toarray()[0]
    terms = vectorizer.get_feature_names_out()

    keywords = sorted(
        [{"word": term, "score": float(score)} for term, score in zip(terms, scores)],
        key=lambda x: x["score"],
        reverse=True
    )

    return {
        "keywords": keywords,
        "sentiment": sentiment,
        "confidence": round(confidence, 2),
    }


@app.post("/analyze")
def analyze_text(data: TextInput):
    return analyze(data.text)


@app.post("/analyze-file")
def analyze_file(file: UploadFile = File(...)):
    text = extract_text_from_file(file)
    return analyze(text)
