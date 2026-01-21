import { useState, useEffect } from "react";
import { Moon, Sun, Mail, Clipboard, Check, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Header({
  activeSection = "Home",
  onNavigate,
}: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = ["Home", "Stack", "Project", "Contact"];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 sticky transition-all duration-300">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm" />

        <div className="relative px-20 h-16 flex items-center justify-between">
          {/* 1-1. Left: Logo */}
          <div className="flex-shrink-0">
            <h1
              onClick={() => handleNavClick("Home")}
              className="text-3xl font-cursive font-bold cursor-pointer select-none bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              ImUisoon
            </h1>
          </div>

          {/* 1-2. Center: Navigation */}
          <nav className="hidden md:flex items-center gap-20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "text-md font-medium transition-colors duration-200 hover:text-blue-500",
                  activeSection === item
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300",
                )}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* 1-3. Right: Controls */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full transition-colors text-gray-600 dark:text-gray-300 bg-transparent border-none cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Contact Modal Toggle */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 relative group bg-transparent border-none cursor-pointer"
              aria-label="Contact"
            >
              <Mail size={20} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            >
              {/* 닫기 버튼 (우측 상단) */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10">
                {/* 상단 로고 및 직함 */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1">
                      Web Developer
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                      임 의 순
                    </h2>
                  </div>
                  {/* 우측 상단 아이콘 (로고 역할) */}
                  <div className="text-blue-600 dark:text-blue-400 opacity-80 pt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code-2"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                </div>

                {/* 하단 정보 목록 */}
                <div className="flex justify-between">
                  <div className="w-3/6"></div>
                  <div className="w-4/6 space-y-3 text-left">
                    {/* Place */}
                    <div className="flex items-center justify-start gap-3 group">
                      <span className="pl-10 text-lg font-semibold text-gray-800 dark:text-gray-200">
                        서울 관악구 호암로20길 79-9
                      </span>
                    </div>
                    {/* Mobile */}
                    <div className="flex items-center justify-start gap-3 group">
                      <button
                        onClick={() => handleCopy("010-3940-7145", "phone")}
                        className="p-1.5 text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Copy Phone Number"
                      >
                        {copiedField === "phone" ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Clipboard size={16} />
                        )}
                      </button>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                        Mobile
                      </span>
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        010.3940.7145
                      </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-start gap-3 group">
                      <button
                        onClick={() => handleCopy("dla5420@naver.com", "email")}
                        className="p-1.5 text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Copy Email"
                      >
                        {copiedField === "email" ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Clipboard size={16} />
                        )}
                      </button>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                        Email
                      </span>
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        dla5420@naver.com
                      </span>
                    </div>

                    {/* Portfolio */}
                    <div className="flex items-center justify-start gap-3 group">
                      <button
                        onClick={() =>
                          handleCopy(
                            "https://github.com/Im-uisoon",
                            "portfolio",
                          )
                        }
                        className="p-1.5 text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Copy Portfolio Link"
                      >
                        {copiedField === "portfolio" ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Clipboard size={16} />
                        )}
                      </button>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                        Portfolio
                      </span>
                      <a
                        href="https://github.com/Im-uisoon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Imuisoon.git
                      </a>
                    </div>
                  </div>
                </div>

                {/* 하단 포인트 라인 */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 dark:bg-blue-400"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
