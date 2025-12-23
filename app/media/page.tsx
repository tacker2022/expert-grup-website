"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Mock Data
const NEWS = [
    {
        id: "1",
        title: "Expert Grup, Sürdürülebilir Enerji Yatırımlarını İki Katına Çıkarıyor",
        excerpt: "2025 vizyonumuz kapsamında yenilenebilir enerji portföyümüzü genişletiyor, karbon ayak izimizi sıfıra indirmeyi hedefliyoruz.",
        category: "Basın Bülteni",
        date: "15 Aralık 2024",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee7e8e9?q=80&w=2674&auto=format&fit=crop",
        slug: "surdurulebilir-enerji-yatirimlari"
    },
    {
        id: "2",
        title: "Akıllı Şehirler ve Geleceğin Otopark Çözümleri",
        excerpt: "Park Expert markamızla, şehir içi mobiliteyi kolaylaştıran yapay zeka destekli otopark sistemlerimizi tanıtıyoruz.",
        category: "Blog",
        date: "22 Kasım 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        slug: "akilli-sehirler-otopark"
    },
    {
        id: "3",
        title: "Expert Gayrimenkul'den İstanbul'a Yeni Bir Soluk: Vadi Projesi",
        excerpt: "Doğa ile iç içe, modern yaşamın tüm gerekliliklerini sunan yeni konut projemizin temelleri atıldı.",
        category: "Duyuru",
        date: "05 Kasım 2024",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
        slug: "vadi-projesi-lansman"
    },
    {
        id: "4",
        title: " Dijital Dönüşümde Liderlik: Teknoloji Zirvesi Notları",
        excerpt: "CTO'muz Mehmet Demir'in Global Tech Summit'te yaptığı konuşmadan öne çıkan başlıklar ve gelecek vizyonumuz.",
        category: "Sektörel",
        date: "28 Ekim 2024",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
        slug: "dijital-donusum-liderlik"
    },
];

const CATEGORIES = ["Tümü", "Basın Bülteni", "Blog", "Duyuru", "Sektörel"];

export default function MediaPage() {
    const [activeCategory, setActiveCategory] = useState("Tümü");

    const filteredNews = activeCategory === "Tümü"
        ? NEWS
        : NEWS.filter(item => item.category === activeCategory);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Basın Odası"
                    description="Expert Grup'tan en güncel haberler, duyurular ve sektörel içgörüler."
                    parent="Home"
                />

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-6">

                        {/* Categories */}
                        <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                            ? "bg-expert-navy text-white shadow-lg shadow-expert-navy/20"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* News Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredNews.map((item, index) => (
                                <NewsCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function NewsCard({ item, index }: { item: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/media/${item.id}`} className="group block h-full">
                <article className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:border-expert-gold/20">
                    <div className="aspect-[16/9] overflow-hidden relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-expert-navy shadow-sm">
                                {item.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-expert-navy mb-4 group-hover:text-expert-gold transition-colors line-clamp-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                            {item.excerpt}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-expert-navy font-semibold text-sm group-hover:gap-3 transition-all">
                            Devamını Oku <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
