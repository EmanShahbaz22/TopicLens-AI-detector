export default function Logo({ size = 40 }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className="drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TopicLens logo"
        role="img"
      >
        <defs>
          <linearGradient id="g1" x1="10" y1="6" x2="58" y2="58">
            <stop stopColor="#4F46E5" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          <radialGradient id="g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26 22) rotate(45) scale(28)">
            <stop stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="32" cy="32" r="22" stroke="url(#g1)" strokeWidth="6" />

        {/* Inner lens */}
        <circle cx="32" cy="32" r="12" fill="url(#g1)" opacity="0.95" />
        <circle cx="32" cy="32" r="12" fill="url(#g2)" />

        {/* Highlight dot */}
        <circle cx="42" cy="22" r="3.5" fill="white" opacity="0.9" />
      </svg>

      <div className="leading-tight">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          TopicLens
        </div>
        <div className="text-xs text-white/85">
          See the key ideas instantly
        </div>
      </div>
    </div>
  )
}
