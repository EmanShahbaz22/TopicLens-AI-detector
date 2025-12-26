export default function KeywordChips({ keywords }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-slate-700 mb-3">
        Key Topics
      </h3>

      <div className="flex flex-wrap gap-3">
        {keywords.map((word, index) => (
          <span
            key={index}
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-sm text-white shadow-md"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
