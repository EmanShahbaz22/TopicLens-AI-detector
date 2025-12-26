export default function SentimentCard({ sentiment, confidence }) {
  const gradientMap = {
    Positive: "from-green-400 to-emerald-500",
    Neutral: "from-yellow-400 to-orange-400",
    Negative: "from-red-400 to-pink-500",
  }

  return (
    <div className={`rounded-2xl bg-gradient-to-r ${gradientMap[sentiment]} p-6 text-white shadow-lg`}>
      <h3 className="text-sm opacity-90 mb-1">
        Sentiment
      </h3>

      <p className="text-2xl font-bold">
        {sentiment}
      </p>

      <p className="text-sm opacity-90 mt-1">
        Confidence: {(confidence * 100).toFixed(0)}%
      </p>
    </div>
  )
}
