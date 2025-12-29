import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaFilePdf, FaGithub } from 'react-icons/fa6';

interface ProjectData {
    id: number;
    title: string;
    description: string;
    details: string;
    tags: string[];
    image: string;
    pdf?: string;
    github?: {
        frontend?: string;
        backend?: string;
    };
}

const projects: ProjectData[] = [
    {
        id: 1,
        title: "학교 준비물 구매배송 통합 플랫폼",
        description: "효율적인 준비물 준비 및 관리 시스템 설계 고안",
        details: "KitGet 프로젝트의 학술논문을 작성하였습니다. 기존의 불편한 시스템과 교사 업무가중에 대한 부분을 해결하고자 설계하였습니다.",
        tags: ["논문"],
        image: "/assets/kitgetpaper.png",
        pdf: "/assets/kitgetpaper.pdf",
    },
    {
        id: 2,
        title: "KitGet",
        description: "효율적인 준비물 준비 및 관리 시스템",
        details: "기존의 번거롭고 혼동을 유발하는 준비물 준비에 있어 더욱 편리하고 효율적인 방법을 제공하는 플랫폼입니다. 교사/학생/매장의 목적에 맞게 서비스를 제공하여 준비물 준비를 더욱 효율적으로 할 수 있도록 개발하였습니다.",
        tags: ["Vue.js", "Spring Boot 3", "MySQL"],
        image: "/assets/kitget.png",
        pdf: "/assets/kitget.pdf",
        github: {
            frontend: "https://github.com/Im-uisoon/kitget",
            backend: "https://github.com/Im-uisoon/kitgetback"
        }
    },
    {
        id: 3,
        title: "CafeMaster",
        description: "카페 매출 관리 시스템",
        details: "가상의 카페 프랜차이즈를 만들어 본사, 매장, 배송업체간 역할을 수행합니다. 또한 매장의 재고 관리, 유통기한 관리, 매출 집계 등 다양한 기능을 제공합니다.",
        tags: ["JavaFX", "Spring Boot 3", "MySQL"],
        image: "/assets/cafe.png",
        pdf: "/assets/cafe.pdf",
        github: {
            backend: "https://github.com/Im-uisoon/cafeMaster"
        }
    },
    {
        id: 4,
        title: "돌다리",
        description: "안전관리 웹 돌다리",
        details: "소규모 공사현장에서는 안전관리 교육이 제대로 이뤄지지 않고있습니다. 안전교육을 지원하고, 안전사고 발생 시 현장 모든 인원에게 알리며 신속대응 할 수 있도록 기능을 제공합니다.",
        tags: ["Next.js", "Spring Boot 3", "MySQL"],
        image: "/assets/doldari.png",
        pdf: "/assets/doldari.pdf",
        github: {
            frontend: "https://github.com/Im-uisoon/doldari",
            backend: "https://github.com/Im-uisoon/doldariBack"
        }
    },
    {
        id: 5,
        title: "벼리",
        description: "나의 기록 꾸미기, 벼리",
        details: "나만의 기록을 꾸미는 다이어리와 다양한 작성물을 저장하고 공유할 수 있는 플랫폼입니다. 그 외에도 위젯과 테마를 꾸며 나만의 페이지를 만들 수 있습니다.",
        tags: ["React", "Spring Boot 3", "Supabase", "MySQL"],
        image: "/assets/byeory.png",
        pdf: "/assets/.pdf",
        github: {
            frontend: "https://github.com/Im-uisoon/byeory",
            backend: "https://github.com/Im-uisoon/byeoryback"
        }
    }
];

export default function Project() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    // Helper to check if image string is a path
    const isImagePath = (src: string) => src.includes('/') || src.includes('.');

    return (
        <section id="Project" className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
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
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeIn"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm backdrop-blur-sm"
                        >
                            <MdClose size={24} className="text-gray-900 dark:text-white" />
                        </button>

                        <div className="aspect-video bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 text-xl font-bold overflow-hidden">
                            {isImagePath(selectedProject.image) ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <span>{selectedProject.image}</span>
                            )}
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {selectedProject.title}
                            </h3>
                            <div className="flex gap-2 flex-wrap mb-6">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="prose dark:prose-invert max-w-none mb-8">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                    {selectedProject.details}
                                </p>
                            </div>

                            {(selectedProject.pdf || selectedProject.github) && (
                                <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Project Documents & Links</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.pdf && (
                                            <a
                                                href={selectedProject.pdf}
                                                download
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors font-medium text-sm"
                                            >
                                                <FaFilePdf size={16} />
                                                PDF 다운로드
                                            </a>
                                        )}
                                        {selectedProject.github?.frontend && (
                                            <a
                                                href={selectedProject.github.frontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-sm"
                                            >
                                                <FaGithub size={16} />
                                                Frontend
                                            </a>
                                        )}
                                        {selectedProject.github?.backend && (
                                            <a
                                                href={selectedProject.github.backend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-sm"
                                            >
                                                <FaGithub size={16} />
                                                Backend
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
