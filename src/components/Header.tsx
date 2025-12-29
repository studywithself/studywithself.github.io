import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Clipboard, Check, X, Phone, AtSign } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface HeaderProps {
    activeSection?: string;
    onNavigate?: (section: string) => void;
}

export default function Header({ activeSection = 'Home', onNavigate }: HeaderProps) {
    const [isDark, setIsDark] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    // Toggle Dark Mode
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const navItems = ['Home', 'Stack', 'Project', 'Contact'];

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
                            onClick={() => handleNavClick('Home')}
                            className="text-3xl font-cursive font-bold cursor-pointer select-none bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                        >
                            ImUisoon
                        </h1>
                    </div>

                    {/* 1-2. Center: Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={cn(
                                    "text-base font-medium transition-colors duration-200 hover:text-blue-500",
                                    activeSection === item
                                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                                        : "text-gray-600 dark:text-gray-300"
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
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDark ? 'moon' : 'sun'}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isDark ? <Moon size={20} /> : <Sun size={20} />}
                                </motion.div>
                            </AnimatePresence>
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
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold">연락망</h3>
                                    <p className="text-blue-100 text-sm mt-1">개인 연락처입니다</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Email Item */}
                                <div className="group bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                                <AtSign size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                                                <p className="text-gray-900 dark:text-gray-100 font-medium">dla5420@naver.com</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleCopy('dla5420@naver.com', 'email')}
                                            className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
                                            title="Copy Email"
                                        >
                                            {copiedField === 'email' ? <Check size={20} className="text-green-500" /> : <Clipboard size={20} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Phone Item */}
                                <div className="group bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-violet-200 dark:hover:border-violet-800 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-violet-600 dark:text-violet-400">
                                                <Phone size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                                                <p className="text-gray-900 dark:text-gray-100 font-medium">010-3940-7145</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleCopy('010-3940-7145', 'phone')}
                                            className="p-2 text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors bg-transparent border-none cursor-pointer"
                                            title="Copy Phone Number"
                                        >
                                            {copiedField === 'phone' ? <Check size={20} className="text-green-500" /> : <Clipboard size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-400">
                                        언제든지 연락주세요!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
