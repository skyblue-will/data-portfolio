type Task = { text: string; done: boolean };

interface Project {
  name: string;
  slug: string;
  url: string | null;
  status: "live" | "building";
  oneLiner: string;
  dataSource: string;
  dataSources: string[];
  affiliateCategories: string[];
  metrics?: { label: string; value: string }[];
  tasks: Task[];
}

const projects: Project[] = [
  {
    name: "MOT Check UK",
    slug: "Rev",
    url: "https://motdata.uk",
    status: "live",
    oneLiner:
      "Full MOT history for any vehicle. Failure trends, reliability scores, garage pass rates — from millions of DVSA test records.",
    dataSource: "DVSA MOT History API",
    dataSources: ["DVSA MOT History API", "DfT Fleet Statistics"],
    affiliateCategories: [
      "Car insurance comparison",
      "Breakdown cover",
      "Garage bookings",
      "Tyres & parts",
      "Warranty",
      "Car finance",
    ],
    metrics: [
      { label: "Pages indexed", value: "2,494" },
      { label: "Affiliates vetted", value: "22" },
      { label: "Affiliates approved", value: "17" },
      { label: "Affiliates rejected", value: "5" },
    ],
    tasks: [
      { text: "Enable Google Indexing API on GCP", done: false },
      { text: "BookMyGarage — awaiting Awin approval", done: false },
      { text: "Apply to remaining 15 vetted programmes", done: false },
    ],
  },
  {
    name: "UK Home Energy Guide",
    slug: "Joule",
    url: null,
    status: "building",
    oneLiner:
      "Look up any property's energy efficiency. EPC ratings, savings estimates, grant eligibility — five data sources layered into personalised recommendations.",
    dataSource: "EPC Register + Ofgem + PVGIS + Land Registry",
    dataSources: [
      "EPC Certificates",
      "Ofgem Energy Rates",
      "PVGIS Solar Irradiance",
      "Land Registry",
      "Postcodes.io",
    ],
    affiliateCategories: [
      "Solar installation",
      "Heat pumps",
      "Boiler replacement",
      "Insulation",
      "Energy switching",
      "Boiler cover",
    ],
    metrics: [
      { label: "Data sources", value: "5" },
      { label: "Affiliates vetted", value: "14" },
      { label: "Affiliates approved", value: "11" },
    ],
    tasks: [
      { text: "DNS switch to Vercel", done: false },
      { text: "Submit sitemap", done: false },
      { text: "Soft launch", done: false },
    ],
  },
  {
    name: "Care Home Ratings",
    slug: "Grace",
    url: "https://care-check-uk.vercel.app",
    status: "building",
    oneLiner:
      "Find the best-rated care home you can afford, with good staffing and a decent hospital nearby. CQC data layered with NHS workforce, demographics, and deprivation indices.",
    dataSource: "CQC Ratings API",
    dataSources: ["CQC Ratings API"],
    affiliateCategories: [
      "Personal alarms",
      "Mobility aids",
      "Stairlifts",
      "Legal (wills, power of attorney)",
      "Over 50s insurance",
    ],
    metrics: [
      { label: "Affiliates vetted", value: "19" },
      { label: "Affiliates approved", value: "11" },
      { label: "Affiliates rejected", value: "4" },
    ],
    tasks: [
      { text: "CQC API key registration", done: false },
      { text: "Custom domain", done: false },
    ],
  },
  {
    name: "Explore Your Patch",
    slug: "Fern",
    url: "https://explore-your-patch.vercel.app",
    status: "building",
    oneLiner:
      "Enter a postcode, get the full picture. Crime, flood risk, house prices, bathing water quality, wildlife — six APIs and growing.",
    dataSource: "Police API + EA + Land Registry + NBN",
    dataSources: [
      "Police Crime API",
      "EA Flood Monitoring",
      "Land Registry (SPARQL)",
      "EA Bathing Water Quality",
      "NBN Wildlife Atlas",
      "Postcodes.io",
    ],
    affiliateCategories: [
      "Mortgage brokers",
      "Estate agents",
      "Broadband switching",
      "Home insurance",
    ],
    tasks: [
      { text: "Ofcom broadband speeds integration", done: false },
      { text: "Historic England integration", done: false },
      { text: "Custom domain", done: false },
    ],
  },
];

/* ── Page ───────────────────────────────────────────── */

export default function Home() {
  const live = projects.filter((p) => p.status === "live");
  const building = projects.filter((p) => p.status === "building");
  const allSources = new Set(projects.flatMap((p) => p.dataSources));

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* ── Thesis ──────────────────────────────── */}
      <header className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <p className="text-sm text-zinc-400 mb-6 font-mono">Palmer Data Co.</p>
        <h1 className="text-[2.5rem] leading-[1.15] font-semibold tracking-tight mb-6">
          We turn free government data into
          <br />
          consumer tools people actually use.
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
          UK government publishes extraordinary datasets — MOT records, energy certificates,
          care home inspections, flood risk, crime stats — but buries them in PDFs and
          clunky portals. We build beautiful interfaces on top of them, layer multiple
          sources for unique insights, and monetise with carefully vetted affiliates.
        </p>
      </header>

      {/* ── The Model ──────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-zinc-100 pt-12">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-8">
            How it works
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-medium text-zinc-900 mb-2">Free public data</p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Government APIs and open datasets. DVSA, CQC, Land Registry, Environment
                Agency, Ofgem, ONS. Authoritative, statutory, free.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900 mb-2">Layer for unique insight</p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Anyone can query one API. We combine multiple sources to create analysis
                that doesn&apos;t exist anywhere else. That&apos;s the moat.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900 mb-2">Monetise with trust</p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Affiliate partners vetted at Trustpilot 4.0★ minimum. Contextual placement
                — the data drives the recommendation, never the other way round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T ────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-zinc-100 pt-12">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-4">
            Why it ranks
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-2xl">
            Most affiliate sites fail Google&apos;s E-E-A-T framework because they&apos;re
            rewritten content with links bolted on. Our sites pass it structurally.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <p className="text-sm text-zinc-900 mb-1">
                <span className="font-medium">Experience</span>
                <span className="text-zinc-300 mx-2">—</span>
                <span className="text-zinc-500">
                  Users interact with real data for their specific vehicle, property, or postcode.
                  Not articles about data.
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-900 mb-1">
                <span className="font-medium">Expertise</span>
                <span className="text-zinc-300 mx-2">—</span>
                <span className="text-zinc-500">
                  Multiple datasets combined into insights nobody else has. Risk scores,
                  savings estimates, quality indices.
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-900 mb-1">
                <span className="font-medium">Authoritativeness</span>
                <span className="text-zinc-300 mx-2">—</span>
                <span className="text-zinc-500">
                  Government is the source. DVSA examiner reports, CQC inspections,
                  Land Registry transactions. Authority inherited.
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-900 mb-1">
                <span className="font-medium">Trustworthiness</span>
                <span className="text-zinc-300 mx-2">—</span>
                <span className="text-zinc-500">
                  Every affiliate vetted. Non-commercial alternatives shown alongside.
                  Full disclosure. No dark patterns.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="border-t border-zinc-100 pt-12">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
              Portfolio
            </h2>
            <p className="text-sm text-zinc-400">
              {live.length} live · {building.length} building · {allSources.size} data sources
            </p>
          </div>
        </div>
      </section>

      {projects.map((p, i) => (
        <section key={p.slug} className="max-w-3xl mx-auto px-6 pb-16">
          {i > 0 && <div className="border-t border-zinc-50 mb-12" />}
          {/* Project header */}
          <div className="flex items-baseline justify-between mb-4">
            <div className="flex items-baseline gap-3">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  {p.url.replace("https://", "")} ↗
                </a>
              )}
            </div>
            <span
              className={`text-xs font-mono ${
                p.status === "live" ? "text-green-600" : "text-zinc-400"
              }`}
            >
              {p.status}
            </span>
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-2xl">
            {p.oneLiner}
          </p>

          {/* Metrics row */}
          {p.metrics && (
            <div className="flex gap-8 mb-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-semibold tabular-nums">{m.value}</p>
                  <p className="text-xs text-zinc-400">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-xs text-zinc-400 mb-2">Data sources</p>
              <ul className="space-y-1">
                {p.dataSources.map((s) => (
                  <li key={s} className="text-sm text-zinc-600">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-2">Affiliate categories</p>
              <ul className="space-y-1">
                {p.affiliateCategories.map((a) => (
                  <li key={a} className="text-sm text-zinc-600">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-2">Next up</p>
              <ul className="space-y-1">
                {p.tasks
                  .filter((t) => !t.done)
                  .map((t) => (
                    <li key={t.text} className="text-sm text-zinc-600">
                      {t.text}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ── Affiliate Approach ─────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-zinc-100 pt-12">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-4">
            Affiliate vetting
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-2xl">
            We only promote services we&apos;d recommend to someone we know. Every affiliate
            programme goes through the same due diligence before it reaches the site.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {[
              ["Trustpilot 4.0★ minimum", "Hard floor. Volume matters — 50+ reviews for confidence."],
              ["Complaint pattern analysis", "Read the 1★ reviews. Hidden fees, refund refusals, impossible cancellation = reject."],
              ["FCA registration", "Required for insurance and financial products. No exceptions."],
              ["Parent company check", "Who owns them? Established or fly-by-night?"],
              ["Contextual placement", "Affiliates appear because the data warrants it. Tyre links on tyre failure pages, not everywhere."],
              ["Full disclosure", "rel=\"sponsored\" on all links. Methodology page. Non-commercial alternatives shown alongside."],
            ].map(([title, desc]) => (
              <div key={title}>
                <p className="text-sm text-zinc-900 font-medium">{title}</p>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>

          {/* Rejection examples */}
          <p className="text-xs text-zinc-400 mb-3">Recent rejections</p>
          <div className="overflow-hidden rounded border border-zinc-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50 text-left">
                  <th className="px-4 py-2 font-medium text-zinc-500">Programme</th>
                  <th className="px-4 py-2 font-medium text-zinc-500">Rating</th>
                  <th className="px-4 py-2 font-medium text-zinc-500">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {[
                  ["The Bike Insurer", "2.3★", "Misleading quotes"],
                  ["The Van Insurer", "2.1★", "Quotes not honoured"],
                  ["QDOS Breakdown", "2.2★", "Non-attendance reports"],
                  ["SolarVoxGreen", "1.4★", "Flagged as scam on Reddit"],
                  ["Caring Pulse", "—", "Trustpilot warns of failed service"],
                  ["Jackery UK", "3.1★", "Below threshold"],
                ].map(([name, rating, reason]) => (
                  <tr key={name} className="text-zinc-600">
                    <td className="px-4 py-2">{name}</td>
                    <td className="px-4 py-2 font-mono text-xs">{rating}</td>
                    <td className="px-4 py-2 text-zinc-400">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pipeline ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-zinc-100 pt-12">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-4">
            Pipeline
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-2xl">
            Opportunities scored on data quality, search demand, affiliate potential, build
            effort, and competitive gap. Anything above 18/25 is worth building.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Flood Risk & Insurance",
                score: "21/25",
                note: "Environment Agency data. 12,000+ monthly searches. Home insurance affiliates.",
              },
              {
                name: "School Catchment Checker",
                score: "20/25",
                note: "Ofsted + DfE data. High parental search volume. Moving/mortgage affiliates.",
              },
              {
                name: "Food Hygiene Ratings",
                score: "19/25",
                note: "FSA API. Restaurant discovery. Delivery/booking affiliates.",
              },
            ].map((opp) => (
              <div key={opp.name} className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-zinc-400 w-12 flex-shrink-0">
                  {opp.score}
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{opp.name}</p>
                  <p className="text-sm text-zinc-500">{opp.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────── */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-zinc-100">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-zinc-400 font-mono">Palmer Data Co.</p>
          <p className="text-xs text-zinc-300">
            Awin Publisher ID 2753640 · Next.js + Vercel
          </p>
        </div>
      </footer>
    </main>
  );
}
