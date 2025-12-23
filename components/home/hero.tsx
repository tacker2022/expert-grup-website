"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-expert-navy text-white">
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(28,28,28,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-expert-navy/80 backdrop-blur-[1px]" />

                {/* Animated Grid/Lines */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 pt-32 lg:pt-0">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Column: Text */}
                    <div className="flex-1 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-expert-gold font-medium tracking-wide uppercase mb-6 text-sm md:text-base">
                                Bir Dünya Şirketi
                            </h2>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                                Sürdürülebilir ve <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                    Entegre Çözümler
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
                                Expert Grup olarak mobilite, enerji, gayrimenkul ve dijital dönüşüm
                                alanlarında, çok disiplinli uzmanlık ve anahtar teslim yaklaşımımızla
                                geleceği inşa ediyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/companies"
                                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-expert-navy transition-colors hover:bg-gray-100"
                            >
                                Grup Şirketlerimiz
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:border-white"
                            >
                                Bize Ulaşın <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Chairman Photo & Quote */}
                    <div className="flex-1 w-full mt-16 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative max-w-lg ml-auto"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-expert-navy/80 via-transparent to-transparent z-10" />
                                <img
                                    src="/selami-balci.jpg"
                                    alt="Selami Balcı - Chairman"
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                        <p className="text-white text-lg font-medium italic mb-4 leading-relaxed">
                                            "Başarı tesadüf değildir; vizyon, istikrar ve çok çalışmanın doğal bir sonucudur."
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-0.5 bg-expert-gold" />
                                            <div>
                                                <h4 className="text-white font-bold text-lg">Selami BALCI</h4>
                                                <span className="text-gray-300 text-xs uppercase tracking-wider">Yönetim Kurulu Başkanı</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-expert-gold/20 blur-[80px] rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Keşfet</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
