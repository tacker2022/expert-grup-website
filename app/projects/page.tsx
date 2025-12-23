"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Maslak 1453 Otopark Yönetimi",
        location: "İstanbul, Türkiye",
        category: "Otopark",
        year: "2023",
        image: null // Placeholder for now
    },
    {
        title: "Finans Merkezi Danışmanlık",
        location: "İstanbul, Türkiye",
        category: "Danışmanlık",
        year: "2022",
        image: null
    },
    {
        title: "Güneş Enerjisi Santrali - Ege",
        location: "İzmir, Türkiye",
        category: "Enerji",
        year: "2023",
        image: null
    },
    {
        title: "Akıllı Kavşak Sistemleri",
        location: "Ankara, Türkiye",
        category: "Teknoloji",
        year: "2021",
        image: null
    },
    {
        title: "Vadistanbul Yönetim",
        location: "İstanbul, Türkiye",
        category: "Otopark",
        year: "2020",
        image: null
    },
    {
        title: "Kentsel Dönüşüm Projesi",
        location: "Bursa, Türkiye",
        category: "İmar",
        year: "2022",
        image: null
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Projelerimiz"
                    description="Ulusal ve uluslararası arenada gerçekleştirdiğimiz referans çalışmalar."
                    parent="Portföy"
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        {/* Filter Tabs (Mock) */}
                        <div className="flex flex-wrap gap-4 mb-16 justify-center">
                            {['Tümü', 'Otopark', 'İmar', 'Enerji', 'Teknoloji', 'Danışmanlık'].map((filter, idx) => (
                                <button
                                    key={filter}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${idx === 0 ? 'bg-expert-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative mb-4">
                                        <div className="absolute inset-0 bg-expert-navy/10 group-hover:bg-expert-navy/5 transition-colors" />
                                        {/* Image Placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                            [Proje Görseli]
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-expert-navy shadow-sm">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-expert-gold text-sm font-medium mb-2">
                                        <MapPin className="w-4 h-4" />
                                        {project.location} • {project.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-expert-navy group-hover:text-expert-gold transition-colors">
                                        {project.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
