import { useNavigate } from "react-router-dom";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "학교 준비물 구매배송 통합 플랫폼",
    description: "효율적인 준비물 준비 및 관리 시스템 설계 고안",
    tags: ["논문"],
    image: "/assets/kitgetpaper.png",
    link: "/project/kitget-paper",
  },
  {
    id: 2,
    title: "KitGet",
    description: "효율적인 준비물 준비 및 관리 시스템",
    tags: ["Vue.js", "Spring Boot 3", "MySQL"],
    image: "/assets/kitget.png",
    link: "/project/kitget",
  },
  {
    id: 3,
    title: "CafeMaster",
    description: "카페 매출 관리 시스템",
    tags: ["JavaFX", "Spring Boot 3", "MySQL"],
    image: "/assets/cafe.png",
    link: "/project/cafemaster",
  },
  {
    id: 4,
    title: "돌다리",
    description: "안전관리 웹 돌다리",
    tags: ["Next.js", "Spring Boot 3", "MySQL"],
    image: "/assets/doldari.png",
    link: "/project/doldari",
  },
  {
    id: 5,
    title: "벼리",
    description: "나의 기록 꾸미기, 벼리",
    tags: ["React", "Spring Boot 3", "Supabase", "MySQL"],
    image: "/assets/byeory.png",
    link: "/project/byeory",
  },
];

export default function Project() {
  const navigate = useNavigate();

  // Helper to check if image string is a path
  const isImagePath = (src: string) => src.includes("/") || src.includes(".");

  const handleProjectClick = (link: string) => {
    navigate(link);
  };

  return (
    <section
      id="Project"
      className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Project
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            주요 프로젝트 경험과 성과물들을 소개합니다.
          </p>
          <hr className="border-gray-200 dark:border-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.link)}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                {isImagePath(project.image) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span>{project.image}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
