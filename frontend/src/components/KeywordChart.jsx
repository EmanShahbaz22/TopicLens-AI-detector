import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function KeywordChart({ keywords }) {
  const data = keywords.map((k) => ({
    name: k.word,
    score: Math.round(k.score * 100),
  }))

  return (
    <div className="h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />

          {/* CUSTOM TOOLTIP */}
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "12px",
              boxShadow: "none",
              color: "#1e293b",
            }}
            itemStyle={{ color: "#1e293b" }}
            labelStyle={{ color: "#475569" }}
          />

          <Bar
            dataKey="score"
            radius={[6, 6, 0, 0]}
            fill="#6366F1"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
