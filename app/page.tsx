type Task = { text: string; done: boolean };
type SeoStatus = {
  gsc: string;
  sitemap: string;
  ga4: string;
  notes?: string;
};

interface Project {
  name: string;
  emoji: string;
  tagline: string;
  url: string | null;
  status: "live" | "building" | "planned";
  description: string;
  dataSources: string[];
  nextLayers: string[];
  affiliates: string[];
  seo: SeoStatus;
  tasks: Task[];
  accent: string;
  accentLight: string;
  accentBorder: string;
}

const projects: Project[] = [
  {
    name: "Rev",
    emoji: "🚗",
    tagline: "MOT Check UK",
    url: "https://motdata.uk",
    status: "live",
    description:
      "Enter a reg plate, get the full MOT history. Failure trends by make and model, reliability scores, garage pass rates — all from millions of DVSA test records.",
    dataSources: ["DVSA MOT History API", "DfT Fleet Statistics"],
    nextLayers: ["DVLA Vehicle Data", "Recall Notices", "STATS19 Accidents", "Fuel Economy"],
    affiliates: ["Car Insurance", "Garage Bookings", "Car Buying Guides"],
    seo: {
      gsc: "Verified",
      sitemap: "2,494 pages",
      ga4: "G-0M5CHV7J5Y",
      notes: "Indexing API not enabled — needs GCP console",
    },
    tasks: [],
    accent: "text-red-400",
    accentLight: "bg-red-500/10",
    accentBorder: "border-red-500/20",
  },
  {
    name: "Joule",
    emoji: "⚡",
    tagline: "UK Home Energy Guide",
    url: null,
    status: "building",
    description:
      "Understand your home's energy efficiency. EPC ratings, improvement recommendations, grant eligibility — 9 data sources layered and growing.",
    dataSources: [
      "EPC Certificates",
      "Energy Prices",
      "Local Authority Data",
      "Fuel Poverty Stats",
      "Heat Pump Suitability",
    ],
    nextLayers: ["Conservation Area Status", "Flood Risk", "Local Authority Grants"],
    affiliates: ["Solar Installers", "Heat Pumps", "Insulation", "Energy Switching"],
    seo: {
      gsc: "Verified",
      sitemap: "After DNS switch",
      ga4: "G-0H0F6XBV7T",
      notes: "ukhomeenergyguide.co.uk — DNS move to Vercel planned 16 Feb",
    },
    tasks: [
      { text: "Logo design", done: false },
      { text: "DNS switch to Vercel (planned 16 Feb)", done: false },
      { text: "Submit sitemap (after DNS)", done: false },
      { text: "Soft launch (target 18 Feb)", done: false },
    ],
    accent: "text-amber-400",
    accentLight: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
  },
  {
    name: "Grace",
    emoji: "🏥",
    tagline: "Care Check UK",
    url: "https://care-check-uk.vercel.app",
    status: "building",
    description:
      "Find the best-rated care home you can afford, with good staffing and a decent hospital nearby. Nobody else combines these datasets.",
    dataSources: ["CQC Ratings API"],
    nextLayers: [
      "NHS Workforce / Staffing",
      "ONS Demographics",
      "Index of Multiple Deprivation",
      "Hospital Proximity",
      "Local Authority Funding",
    ],
    affiliates: ["Care Home Referrals (£500–2k+)", "Care Equipment", "Elderly Care Insurance"],
    seo: {
      gsc: "Not set up",
      sitemap: "—",
      ga4: "—",
      notes: "Waiting on custom domain",
    },
    tasks: [
      { text: "CQC API key registration", done: false },
      { text: "Search results page", done: false },
      { text: "Domain purchase (carehomeratings.co.uk?)", done: false },
      { text: "Set up GSC + GA4", done: false },
    ],
    accent: "text-emerald-400",
    accentLight: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  {
    name: "Fern",
    emoji: "🌿",
    tagline: "Postcode Intelligence",
    url: null,
    status: "building",
    description:
      "Enter a postcode, get the full picture. The utility layers get people there — crime, schools, broadband, prices. The nature and heritage layers make them stay and share.",
    dataSources: ["Police Crime API", "Environment Agency", "Ofcom Broadband API", "Land Registry"],
    nextLayers: [
      "Ofsted Schools",
      "NHS / CQC Health",
      "ONS Demographics",
      "DEFRA Air Quality",
      "NBN Wildlife Atlas (300M+ records)",
      "Woodland Trust Ancient Trees",
      "Historic England (400K+ buildings)",
      "Natural England Green Spaces",
      "Bathing Water Quality",
    ],
    affiliates: [
      "Mortgage Brokers",
      "Estate Agents",
      "Conveyancing",
      "Broadband Switching",
      "Home Insurance",
      "Outdoor Gear",
    ],
    seo: {
      gsc: "Not started",
      sitemap: "—",
      ga4: "—",
      notes: "Project not scaffolded yet",
    },
    tasks: [
      { text: "Scaffold project", done: false },
      { text: "Core postcode search", done: false },
      { text: "Set up GSC + GA4", done: false },
    ],
    accent: "text-green-400",
    accentLight: "bg-green-500/10",
    accentBorder: "border-green-500/20",
  },
];

/* ── Components ─────────────────────────────────────── */

function StatusDot({ status }: { status: Project["status"] }) {
  const config = {
    live: { color: "bg-green-400", label: "Live" },
    building: { color: "bg-blue-400 animate-pulse", label: "Building" },
    planned: { color: "bg-slate-500", label: "Planned" },
  };
  const c = config[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
      <span className={`w-2 h-2 rounded-full ${c.color}`} />
      {c.label}
    </span>
  );
}

function Pill({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "dashed" | "gold" }) {
  const styles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    dashed: "bg-transparent text-slate-500 border-slate-700/40 border-dashed",
    gold: "bg-amber-500/8 text-amber-300/90 border-amber-500/20",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] leading-4 border ${styles[variant]}`}>
      {children}
    </span>
  );
}

function SeoRow({ label, value, ok }: { label: string; value: string; ok: boolean }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className={ok ? "text-green-400" : "text-slate-600"}>{ok ? "●" : "○"}</span>
      <span className="text-slate-500 w-14">{label}</span>
      <span className="text-slate-300">{value}</span>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────── */

export default function Home() {
  const liveCount = projects.filter((p) => p.status === "live").length;
  const buildingCount = projects.filter((p) => p.status === "building").length;
  const totalSources = new Set(projects.flatMap((p) => [...p.dataSources, ...p.nextLayers])).size;
  const totalTasks = projects.reduce((sum, p) => sum + p.tasks.filter((t) => !t.done).length, 0);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* ── Hero ──────────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase mb-3">
            Data Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Free public data.
            <br />
            <span className="text-slate-400">Beautiful consumer tools.</span>
          </h1>
          <p className="text-slate-500 max-w-lg text-[15px] leading-relaxed">
            Layer datasets for unique insights nobody else has. Tell stories with data.
            Build things people love. Monetise with affiliates that help the user.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            {[
              { value: projects.length, label: "projects", color: "text-white" },
              { value: liveCount, label: "live", color: "text-green-400" },
              { value: buildingCount, label: "building", color: "text-blue-400" },
              { value: totalSources, label: "data sources", color: "text-slate-300" },
              { value: totalTasks, label: "outstanding", color: totalTasks > 0 ? "text-amber-400" : "text-slate-500" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-2xl font-bold tabular-nums ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-slate-600 uppercase tracking-wider mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Divider ───────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-800/60" />
      </div>

      {/* ── Projects ──────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all hover:border-slate-700/60"
          >
            {/* Header */}
            <div className="px-6 pt-5 pb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h2 className={`text-lg font-semibold ${p.accent}`}>{p.name}</h2>
                    <span className="text-slate-500 text-sm truncate">{p.tagline}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <StatusDot status={p.status} />
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-500 hover:text-white border border-slate-700/50 rounded-md px-2 py-0.5 transition-colors"
                  >
                    Visit ↗
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="px-6 pb-4">
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </div>

            {/* Data grid */}
            <div className="px-6 pb-4 grid sm:grid-cols-3 gap-4">
              {/* Active Sources */}
              <div>
                <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
                  Active Sources
                </h3>
                <div className="flex flex-wrap gap-1">
                  {p.dataSources.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>

              {/* Next Layers */}
              <div>
                <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
                  Next Layers
                </h3>
                <div className="flex flex-wrap gap-1">
                  {p.nextLayers.map((s) => (
                    <Pill key={s} variant="dashed">
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>

              {/* Affiliates */}
              <div>
                <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
                  Affiliate Plays
                </h3>
                <div className="flex flex-wrap gap-1">
                  {p.affiliates.map((s) => (
                    <Pill key={s} variant="gold">
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: SEO + Tasks */}
            <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800/40">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* SEO */}
                <div>
                  <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
                    SEO &amp; Analytics
                  </h3>
                  <div className="space-y-1">
                    <SeoRow label="GSC" value={p.seo.gsc} ok={p.seo.gsc.includes("Verified")} />
                    <SeoRow label="Sitemap" value={p.seo.sitemap} ok={!["—", "Not set up"].includes(p.seo.sitemap)} />
                    <SeoRow label="GA4" value={p.seo.ga4} ok={p.seo.ga4.startsWith("G-")} />
                  </div>
                  {p.seo.notes && (
                    <p className="text-[11px] text-slate-600 mt-1.5">{p.seo.notes}</p>
                  )}
                </div>

                {/* Tasks */}
                {p.tasks.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
                      Outstanding ({p.tasks.filter((t) => !t.done).length})
                    </h3>
                    <div className="space-y-1">
                      {p.tasks.map((task) => (
                        <div key={task.text} className="flex items-center gap-2 text-xs">
                          <span
                            className={
                              task.done
                                ? "text-green-400 text-[10px]"
                                : "text-slate-600 text-[10px]"
                            }
                          >
                            {task.done ? "✓" : "○"}
                          </span>
                          <span
                            className={
                              task.done
                                ? "text-slate-600 line-through"
                                : "text-slate-400"
                            }
                          >
                            {task.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="max-w-5xl mx-auto px-6 pb-12 text-center">
        <p className="text-[11px] text-slate-700">
          Layer datasets · Tell stories · Build things people love
        </p>
      </footer>
    </main>
  );
}
