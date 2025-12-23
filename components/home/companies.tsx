"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const companies = [
    { name: "Park Expert", category: "Otopark Yönetimi", color: "text-yellow-500" },
    { name: "Expert İmar", category: "İmar & Planlama", color: "text-blue-600" },
    { name: "Goods Real Estate", category: "Gayrimenkul & Yatırım", color: "text-red-500" },
    { name: "Solar Expert", category: "Yenilenebilir Enerji", color: "text-green-500" },
    { name: "Beyaz Auto", category: "Otomotiv", color: "text-gray-800" },
    { name: "Formula Bilişim", category: "Bilişim Çözümleri", color: "text-blue-400" },
];

export function Companies() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-expert-navy mb-4"
                    >
                        Grup Şirketlerimiz
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600"
                    >
                        Farklı sektörlerdeki uzmanlıklarımızla, entegre ve sürdürülebilir bir ekosistem yaratıyoruz.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href="#" className="group block h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-expert-gold/20 relative overflow-hidden">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`text-xl font-bold ${company.color}`}>
                                        {company.name} {/* Logo placeholder */}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-expert-navy group-hover:text-white transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                                        Faaliyet Alanı
                                    </span>
                                    <h3 className="text-lg font-medium text-expert-anthracite group-hover:text-expert-navy transition-colors">
                                        {company.category}
                                    </h3>
                                </div>

                                {/* Hover Effect Background */}
                                <div className="absolute inset-0 bg-expert-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
