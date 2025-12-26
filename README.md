
# TopicLens 🔍

TopicLens is an AI-powered web application that analyzes text and documents to extract key topics, important keywords, and sentiment.  
It supports plain text, PDF, and Microsoft Word (.docx) files and presents the results through an interactive, colorful user interface.

---

##  Features

- Text analysis using Natural Language Processing (NLP)
- Upload and analyze **PDF** and **Word (.docx)** documents
- Keyword extraction with importance scoring (TF-IDF)
- Sentiment analysis (Positive / Neutral / Negative)
- Interactive keyword frequency visualization
- Modern glassmorphism UI with gradient themes
- Fully client–server architecture
- No database required (privacy-friendly)

---

##  Technology Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts (data visualization)

### Backend
- FastAPI (Python)
- scikit-learn (TF-IDF)
- TextBlob (sentiment analysis)
- PyPDF2 (PDF text extraction)
- python-docx (Word document parsing)

---

##  How to Run the Project

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
````

The API will be available at:
 [http://127.0.0.1:8000](http://127.0.0.1:8000)

Interactive API docs:
 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

###  Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The application will run at:
 [http://localhost:5173](http://localhost:5173)

---

##  Supported Input Types

* Plain text
* PDF files (`.pdf`)
* Microsoft Word files (`.docx`)

---
