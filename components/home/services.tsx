"use client";

import { motion } from "framer-motion";
import { Car, Building2, Zap, Monitor, Briefcase } from "lucide-react";

// Lucide icons mapped manually for now
const services = [
    { title: "Mobilite & Otopark", icon: Car, description: "Şehir içi ulaşım ve akıllı otopark yönetimi çözümleri." },
    { title: "Gayrimenkul & İmar", icon: Building2, description: "Değer yaratan gayrimenkul geliştirme ve planlama projeleri." },
    { title: "Enerji", icon: Zap, description: "Yenilenebilir enerji kaynakları ve verimlilik danışmanlığı." },
    { title: "Dijital Dönüşüm", icon: Monitor, description: "yenilikçi teknolojilerle iş süreçlerinin modernizasyonu." },
];

export function Services() {
    return (
        <section className="py-24 bg-expert-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <h2 className="text-expert-gold text-sm font-bold tracking-widest uppercase mb-4">
                            Neler Yapıyoruz?
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Geleceği <br /> Şekillendiren <br /> Faaliyet Alanları
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Uzmanlık alanlarımızda derinleşerek, sektörlere yön veren yenilikçi
                            ve sürdürülebilir projeler geliştiriyoruz.
                        </p>
                        <button className="text-white border-b border-expert-gold pb-1 hover:text-expert-gold transition-colors">
                            Tüm Hizmetlerimizi İnceleyin
                        </button>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-expert-gold/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-expert-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-expert-gold group-hover:text-expert-navy transition-colors">
                                    <service.icon className="w-6 h-6 text-expert-gold group-hover:text-expert-navy transition-colors" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
