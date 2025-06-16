import {
  Chart as ChartJS,
  PieController,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { Pie, Radar, Doughnut } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  PieController,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  DoughnutController
);

const pieData = {
  labels: ["TypeScript", "Python", "Go", "Rust", "C++"],
  datasets: [
    {
      label: "Languages Used",
      data: [40, 30, 15, 10, 5],
      backgroundColor: [
        "#3178c6", // TypeScript
        "#3572A5", // Python
        "#00ADD8", // Go
        "#dea584", // Rust
        "#f34b7d", // C++
      ],
      borderWidth: 1,
    },
  ],
};

const radarData = {
  labels: ["TypeScript", "Python", "Go", "Rust", "C++"],
  datasets: [
    {
      label: "Language Proficiency (%)",
      data: [90, 80, 60, 50, 40],
      backgroundColor: "rgba(49, 120, 198, 0.2)", // TypeScript blue
      borderColor: "rgba(49, 120, 198, 1)",
      pointBackgroundColor: "rgba(49, 120, 198, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(49, 120, 198, 1)",
    },
  ],
};

// New doughnut chart data for Activity
const doughnutData = {
  labels: ["Active Projects", "Completed", "On Hold", "Planning", "Archived"],
  datasets: [
    {
      label: "Project Status",
      data: [35, 25, 15, 15, 10],
      backgroundColor: [
        "#10b981", // Green for Active
        "#3b82f6", // Blue for Completed
        "#f59e0b", // Yellow for On Hold
        "#8b5cf6", // Purple for Planning
        "#6b7280", // Gray for Archived
      ],
      borderColor: ["#059669", "#2563eb", "#d97706", "#7c3aed", "#4b5563"],
      borderWidth: 2,
      cutout: "60%", // This creates the doughnut hole
      hoverOffset: 8,
    },
  ],
};

const techStats = [
  { name: "TypeScript", time: "8.5h", percent: "40%" },
  { name: "Python", time: "6.3h", percent: "30%" },
  { name: "Go", time: "3.2h", percent: "15%" },
  { name: "Rust", time: "2.1h", percent: "10%" },
  { name: "C++", time: "1.1h", percent: "5%" },
];

// New activity stats for the doughnut chart
const activityStats = [
  { name: "Active Projects", count: "14", percent: "35%" },
  { name: "Completed", count: "10", percent: "25%" },
  { name: "On Hold", count: "6", percent: "15%" },
  { name: "Planning", count: "6", percent: "15%" },
  { name: "Archived", count: "4", percent: "10%" },
];

const colors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#cd6799",
  Markdown: "#083fa1",
  JSON: "#6EE7B7",
  JSONC: "#FCA5A5",
  YAML: "#cb171e",
  TOML: "#9c4221",
  Bash: "#89e051",
  Shell: "#3eaaaf",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  SQL: "#e38c00",
  GraphQL: "#e535ab",
  JSX: "#61dafb",
  tsx: "#818CF8",
  React: "#61dafb",
  NextJS: "#000000",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Angular: "#dd1b16",
  TailwindCSS: "#38bdf8",
  Prisma: "#FCD34D",
  MongoDB: "#4DB33D",
  PostgreSQL: "#336791",
  MySQL: "#00758F",
  Redis: "#dc382d",
  Supabase: "#3ecf8e",
  Firebase: "#FFCA28",
  Express: "#000000",
  NodeJS: "#3C873A",
  Vite: "#646CFF",
  Webpack: "#8DD6F9",
  Jest: "#99425b",
  Vitest: "#6e9f18",
  Cypress: "#17202C",
  Storybook: "#FF4785",
  Properties: "#5EEAD4",
};

// Activity colors mapping
const activityColors: Record<string, string> = {
  "Active Projects": "#10b981",
  Completed: "#3b82f6",
  "On Hold": "#f59e0b",
  Planning: "#8b5cf6",
  Archived: "#6b7280",
};

const hexToRgba = (hex: string, alpha: number = 0.1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const LanguageTags = () => {
  return (
    <div className="text-sm">
      <p className="text-slate-300 mb-2 font-medium">All Languages</p>
      <div className="flex flex-wrap gap-2">
        {techStats.map((tech) => {
          const color = colors[tech.name] || "#6b7280";
          return (
            <div
              key={tech.name}
              style={{ backgroundColor: hexToRgba(color, 0.15) }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#2A2E38]"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              <span className="text-slate-200 font-medium">{tech.name}</span>
              <span className="text-slate-400">{tech.time}</span>
              <span className="text-slate-500">({tech.percent})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ActivityTags = () => {
  return (
    <div className="text-sm">
      <p className="text-slate-300 mb-2 font-medium">Project Status</p>
      <div className="flex flex-wrap gap-2">
        {activityStats.map((activity) => {
          const color = activityColors[activity.name] || "#6b7280";
          return (
            <div
              key={activity.name}
              style={{ backgroundColor: hexToRgba(color, 0.15) }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#2A2E38]"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              <span className="text-slate-200 font-medium">
                {activity.name}
              </span>
              <span className="text-slate-400">{activity.count} projects</span>
              <span className="text-slate-500">({activity.percent})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function LanguageChart() {
  const options = {
    animation: {
      animateRotate: true as const,
      animateScale: true as const,
      duration: 1500,
      easing: "easeOutQuart" as const,
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#e2e8f0",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#e2e8f0",
        borderColor: "#374151",
        borderWidth: 1,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  } as const;

  const doughnutOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      legend: {
        ...options.plugins.legend,
        position: "bottom" as const,
      },
    },
    cutout: "60%",
  } as const;

  const [active, setActive] = useState(0);

  const activeHandler = (i: number) => {
    setActive(i);
  };

  return (
    <div className="xl:w-[980px] p-8">
      <div className="py-5 space-y-4">
        <div
          className="flex gap-9 cursor-pointer relative 
         
          w-fit mx-auto rounded-2xl px-1 py-1 "
        >
          <div
            className={`w-[124px]  ml-2 mt-1 bg-gradient-tertiary
                 duration-300 ease-in-out h-[48px] 
                 rounded-2xl z-20 top-0 left-0 absolute ${
                   active === 0
                     ? " translate-x-0"
                     : active === 1
                     ? " translate-x-[138%]"
                     : "translate-x-[270%]"
                 }`}
          ></div>
          <button
            onClick={() => activeHandler(0)}
            className="px-9 relative z-20 hover:opacity-90 py-3 text-white"
          >
            Pie Chart
          </button>
          <button
            onClick={() => activeHandler(1)}
            className="px-9 relative z-20 hover:opacity-90 py-3 text-white"
          >
            Doughnut
          </button>
          <button
            onClick={() => activeHandler(2)}
            className="px-9 relative z-20 hover:opacity-90 py-3 text-white"
          >
            Radar
          </button>
        </div>

        <div className=" rounded-2xl p-6">
          {active === 0 && (
            <div className="w-[320px] mx-auto">
              <h3 className="text-white text-lg font-semibold mb-4 text-center">
                Language Usage Overview
              </h3>
              <Pie data={pieData} options={options} />
            </div>
          )}

          {active === 1 && (
            <div className="w-[320px] mx-auto">
              <h3
                className="text-white text-lg
               font-semibold mb-4 text-center"
              >
                Project Activity Status
              </h3>
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="mt-2 text-center">
                <div className="text-3xl font-bold text-white">40</div>
                <div className="text-sm text-slate-400">Total Projects</div>
              </div>
            </div>
          )}

          {active === 2 && (
            <div className="text-center text-slate-400">Coming soon...</div>
          )}
        </div>
      </div>

      <div className="mt-2">
        {active === 0 && <LanguageTags />}
        {active === 1 && <ActivityTags />}
      </div>
    </div>
  );
}
