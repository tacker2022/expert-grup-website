"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { value: "2018", label: "Kuruluş Yılı" },
    { value: "20+", label: "Yıllık Tecrübe" },
    { value: "6", label: "Grup Şirketi" },
    { value: "Global", label: "Operasyon" },
];

export function About() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-expert-navy text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Uzmanlık ve Güvenin <br />
                            <span className="text-expert-gold">Tek Çatı Altında Buluşması</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Expert Group olarak birçok disiplini tek bir çatı altında toplamanın zorluklarını
                                bilinciyle, uzun süren piyasa değerlendirmelerimiz ve araştırmalarımız neticesinde
                                2018 yılında alanında uzman kadromuz ile yola çıktık.
                            </p>
                            <p>
                                Her zaman yüksek özgüven ve motivasyon ile işini aşkla yapan insanları bir araya
                                getirmek en büyük hedefimizdi ve bunu başardık. Bugün, "Ülke ekonomisine katma
                                değer oluşturacak hizmetler" üretme misyonumuzla yolumuza devam ediyoruz.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Anahtar Teslim Hizmet", "Sürdürülebilir Çözümler", "Teknoloji Odaklı", "Global Vizyon"].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-expert-anthracite font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-expert-gold" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Intro Stats / Visual */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-expert-gold/20 transition-colors group"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-expert-navy mb-2 group-hover:text-expert-gold transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-expert-gold/5 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
