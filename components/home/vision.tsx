"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, HeartHandshake, ShieldCheck } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Anahtar Teslim Hizmet",
        description: "Projenin ilk adımından sonuna kadar tüm süreçlerde tek muhatap olarak yanınızdayız.",
    },
    {
        icon: Lightbulb,
        title: "Katma Değer Üretme",
        description: "Sadece hizmet değil, işinize ve ekonomiye değer katan çözümler üretiyoruz.",
    },
    {
        icon: HeartHandshake,
        title: "Mutlu Gelecek",
        description: "Mutlu insanlar, mutlu gelecekler inşa eder yaklaşımıyla insan odaklı çalışıyoruz.",
    },
    {
        icon: ShieldCheck,
        title: "Güven ve İstikrar",
        description: "Şeffaf, dürüst ve uzun vadeli iş birlikleri kurarak güven inşa ediyoruz.",
    },
];

export function Vision() {
    return (
        <section className="py-24 bg-expert-anthracite text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Değerlerimiz ve Vizyonumuz
                    </h2>
                    <p className="text-gray-400">
                        Bizi biz yapan, kararlarımıza ve projelerimize yön veren temel ilkelerimiz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-expert-gold rounded-lg flex items-center justify-center mb-6 text-expert-navy">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
