import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Palette, ArrowUp } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import DocumentMode from './portfoilo/DocumentMode';
import DesignMode from './portfoilo/DesignMode';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Home() {
    const [mode, setMode] = useState<'doc' | 'design'>('doc');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="pt-10">
            {/* Toggle Switch */}
            <div className="mb-12 w-full flex justify-center">
                <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full flex relative w-64 h-12 shadow-inner">
                    {/* Sliding Background */}
                    <motion.div
                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-700 rounded-full shadow-sm"
                        initial={false}
                        animate={{
                            x: mode === 'doc' ? 0 : '100%',
                            left: mode === 'doc' ? '4px' : '4px'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                    {/* Document Button */}
                    <button
                        onClick={() => setMode('doc')}
                        className={cn(
                            "flex-1 relative z-10 flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200 rounded-full",
                            mode === 'doc' ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        )}
                    >
                        <FileText size={18} />
                        <span>문서</span>
                    </button>

                    {/* Design Button */}
                    <button
                        onClick={() => setMode('design')}
                        className={cn(
                            "flex-1 relative z-10 flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200 rounded-full",
                            mode === 'design' ? "text-violet-600 dark:text-violet-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        )}
                    >
                        <Palette size={18} />
                        <span>디자인</span>
                    </button>
                </div>
            </div>

            {/* Document Mode Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mode === 'doc' ? 1 : 0, y: mode === 'doc' ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "w-full",
                    mode === 'doc' ? "block flex justify-center" : "hidden"
                )}
            >
                <div className="w-5/6 px-20 py-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl shadow-blue-900/5">
                    <DocumentMode />
                </div>
            </motion.div>

            {/* Design Mode Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mode === 'design' ? 1 : 0, y: mode === 'design' ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "w-full",
                    mode === 'design' ? "block " : "hidden"
                )}
            >
                <div className="w-full">
                    <DesignMode />
                </div>
            </motion.div>

            {/* Scroll To Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0.5,
                    pointerEvents: showScrollTop ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-4 bg-gray-600 dark:bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl hover:-translate-y-1"
                aria-label="맨 위로 스크롤"
            >
                <ArrowUp size={24} />
            </motion.button>
        </div>
    )
}
