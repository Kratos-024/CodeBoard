import {
  Chart as ChartJS,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(PieController, ArcElement, Tooltip, Legend);

const languageData = {
  labels: ["JavaScript", "Python", "C++", "Go", "Rust"],
  datasets: [
    {
      label: "Languages Used",
      data: [45, 25, 15, 10, 5],
      backgroundColor: ["#FACC15", "#60A5FA", "#F87171", "#34D399", "#A78BFA"],
      borderWidth: 1,
    },
  ],
};
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

const techStats = [
  { name: "TypeScript", time: "7.7h", percent: "56%" },
  { name: "tsx", time: "2.8h", percent: "21%" },
  { name: "JSON", time: "0.9h", percent: "7%" },
  { name: "Prisma", time: "0.6h", percent: "4%" },
  { name: "JSONC", time: "0.4h", percent: "3%" },
  { name: "Properties", time: "0.3h", percent: "2%" },
];

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
          const color = colors[tech.name] || "#6b7280"; // fallback color
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

export function LanguagePieChart() {
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
      },
    },
  } as const;

  return (
    <div className="">
      <div className="w-[380px] mx-auto">
        <Pie data={languageData} options={options} />
      </div>
      <LanguageTags />
    </div>
  );
}
