import { FaGithub, FaPhone, FaCalendar, FaMapMarkerAlt, FaEnvelope, FaCode } from 'react-icons/fa';
import { SiTistory, SiVelog } from 'react-icons/si';

export default function Contact() {
    return (
        <section id="Contact" className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="max-w-5xl mx-auto px-6 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Contact & Profile
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        저에 대해 더 궁금한 점이 있으시다면 언제든 연락주세요.
                    </p>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row min-h-[500px]">
                    {/* Left Side: Profile Card (Identity) */}
                    <div className="w-full md:w-5/12 bg-white dark:bg-gray-700/30 p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                        <div className="aspect-[3/4] w-full max-w-[240px] bg-gray-200 dark:bg-gray-600 rounded-2xl overflow-hidden shadow-lg mb-8 relative group border-4 border-white dark:border-gray-600/50">
                            {/* Placeholder for ID Photo */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-sm">Profile Image</span>
                            </div>
                            <img
                                src="/assets/picture.jpg"
                                alt="사진이 없습니다"
                                className="w-full h-full object-cover relative z-10"
                                onError={(e) => {
                                    e.currentTarget.style.opacity = '0';
                                }}
                                onLoad={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                            />
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">임의순</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-bold text-lg mb-8 tracking-wide">Full Stack Developer</p>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 w-full justify-center">
                            <a href="https://github.com/studywithself/coding" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-indigo-700 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg" aria-label="Coding Study">
                                <FaCode size={24} />
                            </a>
                            <a href="https://github.com/Im-uisoon" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg" aria-label="Github">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://velog.io/@doran_1122/posts" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-[#20c997] text-white rounded-xl hover:bg-[#12b886] transition-all hover:-translate-y-1 shadow-md hover:shadow-lg" aria-label="Velog">
                                <SiVelog size={24} />
                            </a>
                            <a href="https://doran1122.tistory.com/" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-[#EB531F] text-white rounded-xl hover:bg-[#d94614] transition-all hover:-translate-y-1 shadow-md hover:shadow-lg" aria-label="Tistory">
                                <SiTistory size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-gray-50 dark:bg-gray-800">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Contact Items - More spacing, cleaner look */}
                            <div className="group flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all shadow-sm hover:shadow-md">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope size={24} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 uppercase tracking-wider">Email</p>
                                    <a href="mailto:dla5420@naver.com" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate">
                                        dla5420@naver.com
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:border-green-200 dark:hover:border-green-500/30 transition-all shadow-sm hover:shadow-md">
                                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaPhone size={24} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 uppercase tracking-wider">Phone</p>
                                    <a href="tel:010-3940-7145" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors block truncate">
                                        010-3940-7145
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:border-purple-200 dark:hover:border-purple-500/30 transition-all shadow-sm hover:shadow-md">
                                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaCalendar size={24} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 uppercase tracking-wider">Birthdate</p>
                                    <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
                                        2000. 11. 22 <span className="text-base font-normal text-gray-500 ml-2">(만 25세)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:border-red-200 dark:hover:border-red-500/30 transition-all shadow-sm hover:shadow-md">
                                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1 uppercase tracking-wider">Residence</p>
                                    <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
                                        Seoul, Republic of Korea
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
