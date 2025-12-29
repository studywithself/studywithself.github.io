
import {
    SiPython, SiJavascript, SiTypescript,
    SiHtml5, SiCss3, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
    SiSpring, SiSpringboot, SiMysql, SiPostgresql,
    SiGit, SiDocker
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';

type SkillLevel = "초급" | "중급" | "고급";

interface SkillItem {
    name: string;
    level: SkillLevel;
    icon: React.ComponentType<{ className?: string, size?: number }>;
    color: string;
}

interface SkillCategory {
    category: string;
    items: SkillItem[];
}

// Helper to get configuration based on level
const getLevelConfig = (level: SkillLevel) => {
    switch (level) {
        case "초급":
            return {
                percentage: "30%",
                color: "from-green-400 to-green-600",
                badgeColor: "text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"
            };
        case "중급":
            return {
                percentage: "60%",
                color: "from-blue-400 to-blue-600",
                badgeColor: "text-blue-700 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"
            };
        case "고급":
            return {
                percentage: "90%",
                color: "from-violet-400 to-violet-600",
                badgeColor: "text-violet-700 bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800"
            };
        default:
            return {
                percentage: "0%",
                color: "from-gray-400 to-gray-600",
                badgeColor: "text-gray-600 bg-gray-100 border-gray-200"
            };
    }
};

const skills: SkillCategory[] = [
    {
        category: "Language",
        items: [
            { name: "Java", level: "중급", icon: FaJava, color: "text-[#ed8b00]" },
            { name: "Python", level: "초급", icon: SiPython, color: "text-[#3776ab]" },
            { name: "JavaScript", level: "중급", icon: SiJavascript, color: "text-[#f7df1e]" },
            { name: "TypeScript", level: "중급", icon: SiTypescript, color: "text-[#3178c6]" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "HTML", level: "고급", icon: SiHtml5, color: "text-[#e34f26]" },
            { name: "CSS", level: "고급", icon: SiCss3, color: "text-[#1572b6]" },
            { name: "Tailwind CSS", level: "고급", icon: SiTailwindcss, color: "text-[#06b6d4]" },
            { name: "React", level: "중급", icon: SiReact, color: "text-[#61dafb]" },
            { name: "Next.js", level: "중급", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "Vue.js", level: "고급", icon: SiVuedotjs, color: "text-[#4fc08d]" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Spring Boot", level: "중급", icon: SiSpringboot, color: "text-[#6db33f]" },
            { name: "Spring Framework", level: "중급", icon: SiSpring, color: "text-[#6db33f]" },
            { name: "Spring Data JPA", level: "중급", icon: SiSpring, color: "text-[#6db33f]" },
            { name: "MyBatis", level: "초급", icon: FaDatabase, color: "text-[#c60f0f]" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", level: "고급", icon: SiMysql, color: "text-[#4479a1]" },
            { name: "PostgreSQL", level: "중급", icon: SiPostgresql, color: "text-[#336791]" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", level: "중급", icon: SiGit, color: "text-[#f05032]" },
            { name: "Docker", level: "중급", icon: SiDocker, color: "text-[#2496ed]" }
        ]
    }
];

const SkillBlock = ({ item }: { item: SkillItem }) => {
    const config = getLevelConfig(item.level);
    const Icon = item.icon;

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex flex-col gap-4">
                {/* Header: Icon & Name */}
                <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl ${item.color}`}>
                        <Icon size={32} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white leading-tight">
                            {item.name}
                        </h4>
                    </div>
                </div>

                {/* Level Badge */}
                <div className="flex justify-between items-center mt-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${config.badgeColor}`}>
                        {item.level}
                    </span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 tabular-nums">
                        {config.percentage}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                        style={{ width: config.percentage }}
                        className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default function Stack() {
    return (
        <section id="Stack" className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
    )
}
