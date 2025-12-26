import Logo from "./Logo"

export default function Header() {
  return (
    <header className="mb-14">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="hidden sm:flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white/90 text-sm backdrop-blur-md">
            AI-powered insights
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white/90 text-sm backdrop-blur-md">
            Private by default
          </span>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Focus on what matters.
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Paste any text and instantly reveal its key topics, keywords, and emotional tone — with a clean, modern lens.
        </p>
      </div>
    </header>
  )
}
