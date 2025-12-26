import KeywordChips from "./KeywordChips"
import SentimentCard from "./SentimentCard"
import KeywordChart from "./KeywordChart"

export default function ResultsPanel({ result }) {
  if (!result) {
    return (
      <div className="rounded-3xl bg-white/30 backdrop-blur-lg border border-white/40 p-8 shadow-xl flex items-center justify-center text-white/80">
        Your analysis will appear here 
      </div>
    )
  }

  return (
    <div className="rounded-3xl bg-white/30 backdrop-blur-lg border border-white/40 p-8 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Analysis Results
      </h2>

      <KeywordChips keywords={result.keywords.map(k => k.word)} />
      <SentimentCard sentiment={result.sentiment} confidence={result.confidence} />
      <KeywordChart keywords={result.keywords} />
    </div>
  )
}
