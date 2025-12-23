"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
    parent?: string;
}

export function PageHeader({ title, description, parent }: PageHeaderProps) {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-expert-navy text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-expert-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    {parent && (
                        <span className="text-expert-gold text-sm font-semibold tracking-wider uppercase mb-3 block">
                            {parent}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
