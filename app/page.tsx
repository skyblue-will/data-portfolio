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
    affiliates: ["Insurance (Go Compare, MSM)", "Breakdown (AA, RAC)", "Garages (BookMyGarage, ClickMechanic)", "Tyres/Parts (Black Circles, Euro, GSF)", "Warranty (AA, MotorEasy)", "Finance (Carmoola, Quick Car Finance)", "Flexible (Cuvva, Veygo)"],
    seo: {
      gsc: "Verified",
      sitemap: "2,494 pages",
      ga4: "G-0M5CHV7J5Y",
      notes: "Google Indexing API not enabled in GCP — needed to bulk-submit URLs for faster crawling",
    },
    tasks: [
      { text: "BookMyGarage (68338) — applied, awaiting approval", done: false },
      { text: "Black Circles — email affiliates@ with placement details before applying", done: false },
      { text: "Enable Google Indexing API on GCP project", done: false },
      { text: "Apply to remaining 15 vetted programmes (one at a time, check T&Cs)", done: false },
    ],
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
    tagline: "Explore Your Patch",
    url: "https://explore-your-patch.vercel.app",
    status: "building",
    description:
      "Enter a postcode, get the full picture. The utility layers get people there — crime, schools, broadband, prices. The nature and heritage layers make them stay and share.",
    dataSources: [
      "Police Crime API",
      "EA Flood Monitoring",
      "Land Registry (SPARQL)",
      "EA Bathing Water Quality",
      "NBN Wildlife Atlas",
      "Postcodes.io",
    ],
    nextLayers: [
      "Ofcom Broadband Speeds",
      "Historic England (400K+ buildings)",
      "DEFRA Air Quality",
      "Woodland Trust Ancient Trees",
      "Natural England (SSSIs, Green Spaces)",
      "CQC Healthcare Ratings",
      "Ofsted Schools + DfE",
      "ONS Demographics",
      "NHS Digital GP Practices",
      "Sewage Overflow (EA EDM)",
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
      gsc: "Not set up",
      sitemap: "Not submitted",
      ga4: "—",
      notes: "Needs sitemap + GSC setup",
    },
    tasks: [
      { text: "Scaffold project", done: true },
      { text: "Core postcode search", done: true },
      { text: "Wire up crime, flood, house prices, bathing water, wildlife", done: true },
      { text: "Add sitemap", done: false },
      { text: "Set up GSC + GA4", done: false },
      { text: "Integrate Ofcom broadband", done: false },
      { text: "Integrate Historic England", done: false },
      { text: "Custom domain", done: false },
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

      {/* ── Affiliate Programme ────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
          <div className="px-6 pt-5 pb-4">
            <h2 className="text-lg font-semibold text-white">Affiliate Programme</h2>
            <p className="text-xs text-slate-500 mt-1">
              Awin Publisher ID: <span className="text-slate-400 font-mono">2753640</span> — shared across portfolio
            </p>
          </div>

          {/* Methodology */}
          <div className="px-6 pb-4">
            <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
              Vetting Methodology
            </h3>
            <div className="grid sm:grid-cols-5 gap-2">
              {[
                { icon: "⭐", text: "Trustpilot 4.0★+ min (volume matters)" },
                { icon: "🏦", text: "FCA registered (insurance/finance)" },
                { icon: "🔍", text: "Complaint pattern analysis" },
                { icon: "🏢", text: "Parent company check" },
                { icon: "🚩", text: "Red flag keyword search" },
              ].map((m) => (
                <div key={m.text} className="bg-slate-800/40 rounded-lg px-3 py-2 text-center">
                  <div className="text-lg">{m.icon}</div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight">{m.text}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-600 mt-2 italic">
              &quot;We only promote services we&apos;d recommend to a friend. If Trustpilot drops or complaints emerge, the programme gets pulled.&quot;
            </p>
          </div>

          {/* Rev Affiliate Status */}
          <div className="px-6 pb-4">
            <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-3">
              🚗 Rev (motdata.uk) — 17 vetted, 1 applied, 16 ready
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <h4 className="text-[10px] font-medium text-blue-400 mb-1.5">Applied (1)</h4>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="text-blue-400 text-[10px] mt-0.5">◐</span>
                    <span className="text-slate-300">BookMyGarage</span>
                    <span className="text-slate-600 text-[10px]">awaiting</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-medium text-green-400 mb-1.5">Ready to Apply (16)</h4>
                <div className="space-y-1">
                  {[
                    { cat: "Insurance", names: "Go Compare (Car+Van), MoneySupermarket, Cuvva, Veygo" },
                    { cat: "Breakdown", names: "AA, RAC, Motoring Assistance" },
                    { cat: "Warranty", names: "AA Warranty, MotorEasy" },
                    { cat: "Garage", names: "ClickMechanic" },
                    { cat: "Tyres/Parts", names: "Black Circles⚠️, Euro Car Parts, GSF" },
                    { cat: "Finance", names: "Quick Car Finance, Carmoola" },
                  ].map((row) => (
                    <div key={row.cat} className="flex items-start gap-2 text-xs">
                      <span className="text-green-400 text-[10px] mt-0.5">●</span>
                      <span className="text-slate-500 w-20 flex-shrink-0">{row.cat}</span>
                      <span className="text-slate-300">{row.names}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-600 mt-1.5">⚠️ Black Circles: needs email to affiliates@ before applying</p>
              </div>
              <div>
                <h4 className="text-[10px] font-medium text-red-400 mb-1.5">Rejected (5)</h4>
                <div className="space-y-1">
                  {[
                    { name: "The Bike Insurer", reason: "2.3★" },
                    { name: "The Van Insurer", reason: "2.1★" },
                    { name: "QDOS Breakdown", reason: "2.2★" },
                    { name: "mytyres.co.uk", reason: "2.5★" },
                    { name: "moto-tyres.co.uk", reason: "2.9★" },
                  ].map((row) => (
                    <div key={row.name} className="flex items-start gap-2 text-xs">
                      <span className="text-red-400 text-[10px] mt-0.5">●</span>
                      <span className="text-slate-400">{row.name}</span>
                      <span className="text-slate-600">{row.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-600 mt-3 italic">
              All 17 programme links live on site as direct URLs. Awin tracking activated per-programme on approval. Placements are contextual — tyre links on tyre failure pages, breakdown when roadside risk &gt;25%, warranty on warranty cliff &gt;5pp.
            </p>
          </div>

          {/* Joule Affiliate Status */}
          <div className="px-6 pb-4 border-t border-slate-800/40 pt-4">
            <h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-3">
              ⚡ Joule (ukhomeenergyguide.co.uk) — 11 vetted, ready to apply
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-[10px] font-medium text-amber-400 mb-1.5">Tier 1 — Apply First (8)</h4>
                <div className="space-y-1">
                  {[
                    { cat: "Boiler Install", names: "BOXT (4.8★), Heatable (4.8★)" },
                    { cat: "Solar", names: "Project Solar (4.7★), OVO Solar (5★)" },
                    { cat: "Multi-product", names: "Glow Green (4.7★)" },
                    { cat: "Boiler Cover", names: "Hometree (4.7★)" },
                    { cat: "Energy Switch", names: "EDF (4.6★), E.ON Next (4.5★)" },
                  ].map((row) => (
                    <div key={row.cat} className="flex items-start gap-2 text-xs">
                      <span className="text-amber-400 text-[10px] mt-0.5">●</span>
                      <span className="text-slate-500 w-24 flex-shrink-0">{row.cat}</span>
                      <span className="text-slate-300">{row.names}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-medium text-slate-400 mb-1.5">Tier 2 — Follow-up (3)</h4>
                <div className="space-y-1">
                  {[
                    { cat: "Boiler Cover", names: "YourRepair (4.6★)" },
                    { cat: "Heating Oil", names: "BoilerJuice (4.4★)" },
                    { cat: "Insulation", names: "Insulation4less (4.2★)" },
                  ].map((row) => (
                    <div key={row.cat} className="flex items-start gap-2 text-xs">
                      <span className="text-slate-400 text-[10px] mt-0.5">●</span>
                      <span className="text-slate-500 w-24 flex-shrink-0">{row.cat}</span>
                      <span className="text-slate-300">{row.names}</span>
                    </div>
                  ))}
                </div>
                <h4 className="text-[10px] font-medium text-red-400 mt-3 mb-1.5">Rejected (3)</h4>
                <div className="space-y-1">
                  {[
                    { name: "SolarVoxGreen", reason: "1.4★ scam" },
                    { name: "Jackery UK", reason: "3.1★" },
                    { name: "Home Emergency Assist", reason: "3.8★" },
                  ].map((row) => (
                    <div key={row.name} className="flex items-start gap-2 text-xs">
                      <span className="text-red-400 text-[10px] mt-0.5">●</span>
                      <span className="text-slate-400">{row.name}</span>
                      <span className="text-slate-600">{row.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Placement note */}
          <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800/40">
            <p className="text-[11px] text-slate-500">
              <span className="text-slate-400 font-medium">Placement:</span> Contextual links only — tyre failures → Black Circles, low pass rates → breakdown cover, buying guides → warranty + insurance. No banner spam. All <code className="text-[10px] bg-slate-800 px-1 rounded">rel=&quot;sponsored&quot;</code>, GA4 tracked, disclosed.
            </p>
          </div>
        </div>
      </section>

      {/* ── To Consider ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-2xl border border-slate-800/40 bg-slate-900/20 p-6">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            💡 To Consider
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-300">Clay</span>
                <span className="text-[11px] text-slate-600 border border-slate-800/60 rounded px-1.5 py-0.5">Phase 2</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                B2B data enrichment tool. Use once sites have traffic to build direct affiliate relationships at scale — 
                e.g. enrich CQC care home owners for direct referral deals (skip the affiliate network), 
                prospect energy installers for Joule, garages for Rev. Also useful for PR/link building outreach.
                Starts ~$149/mo — needs to earn its keep.
              </p>
            </div>
          </div>
        </div>
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
