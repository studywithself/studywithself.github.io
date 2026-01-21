import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Language",
    items: [
      { name: "Java", icon: FaJava, color: "text-[#ed8b00]" },
      { name: "Python", icon: SiPython, color: "text-[#3776ab]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#f7df1e]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6db33f]" },
      { name: "Spring Framework", icon: SiSpring, color: "text-[#6db33f]" },
      { name: "Spring Data JPA", icon: SiSpring, color: "text-[#6db33f]" },
      { name: "MyBatis", icon: FaDatabase, color: "text-[#c60f0f]" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "text-[#e34f26]" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572b6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
      { name: "React", icon: SiReact, color: "text-[#61dafb]" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-[#4fc08d]" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479a1]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "text-[#f05032]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ed]" },
    ],
  },
];

const SkillBlock = ({ item }: { item: SkillItem }) => {
  const Icon = item.icon;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl ${item.color}`}
        >
          <Icon size={32} />
        </div>
        <h4 className="font-bold text-lg text-gray-800 dark:text-white leading-tight">
          {item.name}
        </h4>
      </div>
    </div>
  );
};

export default function Stack() {
  return (
    <section
      id="Stack"
      className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            다양한 프로젝트 경험을 통해 습득한 기술 스택과 숙련도입니다.
          </p>
        </div>

        <div className="space-y-16">
          {skills.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-violet-600 rounded-full inline-block"></span>
                  {category.category}
                </h3>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800/60"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <SkillBlock key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
