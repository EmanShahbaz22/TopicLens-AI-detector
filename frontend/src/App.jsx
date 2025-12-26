import Header from "./components/Header"
import TextInput from "./components/TextInput"
import ResultsPanel from "./components/ResultsPanel"
import { useState } from "react"

export default function App() {
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      {/* Glass overlay */}
      <div className="min-h-screen backdrop-blur-xl bg-white/20">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <Header />

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <TextInput onAnalyze={setResult} />
            <ResultsPanel result={result} />
          </main>

        </div>
      </div>

    </div>
  )
}
