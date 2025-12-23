"use client";

import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";

const projects = [
    { location: "İstanbul, TR", title: "Maslak 1453 Otopark Yönetimi", type: "Otopark" },
    { location: "Londra, UK", title: "Canary Wharf Danışmanlık", type: "Danışmanlık" },
    { location: "Berlin, DE", title: "Enerji Verimliliği Projesi", type: "Enerji" },
    { location: "Dubai, UAE", title: "Akıllı Şehir Altyapısı", type: "Teknoloji" },
];

export function Projects() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-expert-navy text-3xl md:text-4xl font-bold mb-6">
                            Ulusal ve Uluslararası <br />
                            <span className="text-expert-gold">Referans Projeler</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Türkiye'den dünyaya uzanan yolculuğumuzda, farklı coğrafyalarda
                            imza attığımız projelerle değer üretiyoruz.
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-8 py-3 bg-expert-navy text-white rounded-full font-semibold hover:bg-expert-navy/90 transition-colors">
                        Tüm Projeleri Gör
                    </button>
                </div>

                {/* Abstract Map Visualization */}
                <div className="relative bg-gray-50 rounded-3xl p-8 md:p-16 overflow-hidden border border-gray-100">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        {/* Simple dot pattern to simulate map texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#0A192F_1px,transparent_1px)] [background-size:20px_20px]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-2 text-expert-gold mb-3">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-sm font-semibold">{project.location}</span>
                                </div>
                                <h3 className="text-lg font-bold text-expert-navy mb-2">
                                    {project.title}
                                </h3>
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                                    {project.type}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Globe Icon */}
                    <Globe2 className="absolute -bottom-10 -right-10 w-64 h-64 text-expert-navy/5" />
                </div>
            </div>
        </section>
    );
}
