import { useState } from "react"

export default function TextInput({ onAnalyze }) {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const analyzeText = async () => {
    if (!text.trim()) return
    setLoading(true)

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      const data = await res.json()
      onAnalyze(data)
    } catch {
      alert("Backend not reachable")
    } finally {
      setLoading(false)
    }
  }

  const analyzeFile = async (file) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze-file", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      onAnalyze(data)
    } catch {
      alert("File analysis failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl bg-white/30 backdrop-blur-lg border border-white/40 p-8 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">
        Analyze Text or File
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text here..."
        className="w-full h-48 rounded-2xl bg-white/70 p-5 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-400/50"
      />

      <button
        onClick={analyzeText}
        disabled={loading}
        className="mt-4 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-white font-bold shadow-lg disabled:opacity-50"
      >
        {loading ? "Analyzing…" : "Analyze Text "}
      </button>

      <div className="mt-4">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => analyzeFile(e.target.files[0])}
          className="block w-full text-sm text-slate-700
                     file:mr-4 file:rounded-xl file:border-0
                     file:bg-gradient-to-r file:from-indigo-600 file:to-purple-600
                     file:px-4 file:py-2 file:text-white
                     file:cursor-pointer"
        />
      </div>
    </div>
  )
}
