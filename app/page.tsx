type Task = { text: string; done: boolean };

const projects = [
  {
    name: "Rev",
    emoji: "🚗",
    tagline: "MOT Check UK",
    url: "https://motdata.uk",
    status: "live" as const,
    description:
      "Enter a reg plate, get the full MOT history. Failure trends, reliability scores, garage pass rates — all from DVSA data.",
    dataSources: ["DVSA MOT History API", "DfT Fleet Statistics"],
    nextLayers: ["DVLA Vehicle Data", "Recall Notices", "STATS19 Accidents", "Fuel Economy"],
    affiliates: ["Car Insurance", "Garage Bookings", "Car Buying Guides"],
    tasks: [] as Task[],
    color: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/30",
    badge: "bg-red-500/20 text-red-300",
  },
  {
    name: "Joule",
    emoji: "⚡",
    tagline: "UK Home Energy Guide",
    url: null,
    status: "building" as const,
    description:
      "Understand your home's energy efficiency. EPC ratings, improvement recommendations, grant eligibility — layering 9 data sources and growing.",
    dataSources: [
      "EPC Certificates",
      "Energy Prices",
      "Local Authority Data",
      "Fuel Poverty Stats",
      "Heat Pump Suitability",
    ],
    nextLayers: ["Conservation Area Status", "Flood Risk", "Local Authority Grants"],
    affiliates: ["Solar Installers", "Heat Pumps", "Insulation", "Energy Switching"],
    tasks: [
      { text: "Logo design", done: false },
      { text: "Move domain", done: false },
    ] as Task[],
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/30",
    badge: "bg-yellow-500/20 text-yellow-300",
  },
  {
    name: "Grace",
    emoji: "🏥",
    tagline: "Care Check UK",
    url: "https://care-check-uk.vercel.app",
    status: "building" as const,
    description:
      "Find the best-rated care home you can afford, with good staffing and a decent hospital nearby. Nobody else combines these datasets.",
    dataSources: ["CQC Ratings API"],
    nextLayers: [
      "NHS Workforce/Staffing",
      "ONS Demographics",
      "Index of Multiple Deprivation",
      "Hospital Proximity",
      "Local Authority Funding",
    ],
    affiliates: ["Care Home Referrals (£500-2000+)", "Care Equipment", "Elderly Care Insurance"],
    tasks: [
      { text: "CQC API key registration", done: false },
      { text: "Search results page", done: false },
      { text: "Domain purchase (carehomeratings.co.uk?)", done: false },
    ] as Task[],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
  {
    name: "Fern",
    emoji: "🌿",
    tagline: "Postcode Intelligence",
    url: null,
    status: "building" as const,
    description:
      "Enter a postcode, get the full picture. The utility layers get people there. The nature and heritage layers make them stay and share.",
    dataSources: ["Police Crime API", "Environment Agency", "Ofcom Broadband API", "Land Registry"],
    nextLayers: [
      "Ofsted Schools",
      "NHS/CQC Health",
      "ONS Demographics",
      "DEFRA Air Quality",
      "NBN Wildlife Atlas (300M+ records)",
      "Woodland Trust Ancient Trees",
      "Historic England (400K+ listed buildings)",
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
    tasks: [
      { text: "Scaffold project", done: false },
      { text: "Core postcode search", done: false },
    ] as Task[],
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    badge: "bg-green-500/20 text-green-300",
  },
];

function StatusBadge({ status }: { status: "live" | "building" | "planned" }) {
  const styles = {
    live: "bg-green-500/20 text-green-300 border-green-500/30",
    building: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    planned: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  };
  const labels = { live: "● Live", building: "◐ Building", planned: "○ Planned" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function DataTag({ label, variant }: { label: string; variant: "active" | "next" | "affiliate" }) {
  const styles = {
    active: "bg-slate-800 text-slate-200 border-slate-700",
    next: "bg-slate-800/50 text-slate-400 border-slate-700/50 border-dashed",
    affiliate: "bg-amber-500/10 text-amber-300/80 border-amber-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${styles[variant]}`}>
      {label}
    </span>
  );
}

export default function Home() {
  const liveCount = projects.filter((p) => p.status === "live").length;
  const buildingCount = projects.filter((p) => p.status === "building").length;
  const totalSources = new Set(projects.flatMap((p) => [...p.dataSources, ...p.nextLayers])).size;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Data Portfolio
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Free public data → beautiful consumer tools → affiliate revenue.
            Layer datasets for unique insights. Tell stories. Build things people love.
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <span className="text-2xl font-bold text-white">{projects.length}</span>
              <span className="text-slate-500 ml-1.5">projects</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-green-400">{liveCount}</span>
              <span className="text-slate-500 ml-1.5">live</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-400">{buildingCount}</span>
              <span className="text-slate-500 ml-1.5">building</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-300">{totalSources}</span>
              <span className="text-slate-500 ml-1.5">data sources</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`rounded-xl border ${project.border} bg-gradient-to-br ${project.color} p-6 transition-all hover:scale-[1.005]`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.emoji}</span>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {project.name}
                      <span className="text-slate-400 font-normal ml-2 text-base">
                        {project.tagline}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={project.status} />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-4 max-w-3xl">{project.description}</p>

              {/* Data Sources */}
              <div className="mb-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Active Data Sources
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.dataSources.map((s) => (
                    <DataTag key={s} label={s} variant="active" />
                  ))}
                </div>
              </div>

              {/* Next Layers */}
              <div className="mb-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Next Layers
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.nextLayers.map((s) => (
                    <DataTag key={s} label={s} variant="next" />
                  ))}
                </div>
              </div>

              {/* Affiliates */}
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Affiliate Plays
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.affiliates.map((s) => (
                    <DataTag key={s} label={s} variant="affiliate" />
                  ))}
                </div>
              </div>

              {/* Tasks */}
              {project.tasks.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    Outstanding
                  </span>
                  <div className="mt-1.5 space-y-1">
                    {project.tasks.map((task) => (
                      <div key={task.text} className="flex items-center gap-2 text-sm">
                        <span className={task.done ? "text-green-400" : "text-slate-500"}>
                          {task.done ? "✓" : "○"}
                        </span>
                        <span className={task.done ? "text-slate-500 line-through" : "text-slate-300"}>
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-slate-600 text-sm">
            The playbook: layer datasets, tell stories, build things people love.
          </p>
        </div>
      </div>
    </main>
  );
}
