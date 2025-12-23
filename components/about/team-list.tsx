"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
}

// Sample Data - In production, this would come from props or API
const TEAM: TeamMember[] = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        role: "Genel Müdür",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2144&auto=format&fit=crop",
        description: "20+ yıllık gayrimenkul ve yatırım tecrübesi ile grubun stratejik liderliğini yürütmektedir."
    },
    {
        id: 2,
        name: "Zeynep Kaya",
        role: "CFO / Finans Direktörü",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop",
        description: "Uluslararası finans yönetimi ve kurumsal risk analizlerinde uzmanlaşmış bir lider."
    },
    {
        id: 3,
        name: "Mehmet Demir",
        role: "Teknoloji Başkanı (CTO)",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        description: "Dijital dönüşüm süreçlerimizin ve teknolojik altyapımızın mimarı."
    },
    {
        id: 4,
        name: "Ayşe Çelik",
        role: "Hukuk Müşaviri",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
        description: "Şirketler hukukundaki derin bilgisiyle tüm operasyonlarımızın yasal güvencesi."
    },
    {
        id: 5,
        name: "Caner Öz",
        role: "Operasyon Direktörü",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2134&auto=format&fit=crop",
        description: "Saha operasyonlarının verimliliği ve entegrasyonundan sorumlu yönetici."
    }
];

export function TeamList() {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Side: The List */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-expert-navy mb-12">Yönetim Takımı</h2>
                        <div className="divide-y divide-gray-100">
                            {TEAM.map((member) => (
                                <div
                                    key={member.id}
                                    onMouseEnter={() => setActiveMember(member)}
                                    // Keep active on touch devices or click if needed, but hover is primary for this style
                                    className="group py-8 md:py-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300"
                                >
                                    <div className="space-y-1">
                                        <h3 className={`text-2xl md:text-3xl font-medium transition-colors duration-300 ${activeMember?.id === member.id ? 'text-expert-navy translate-x-4' : 'text-gray-400 group-hover:text-expert-anthracite'}`}>
                                            {member.name}
                                        </h3>
                                        <p className={`text-sm md:text-base font-medium tracking-wider uppercase transition-colors duration-300 ${activeMember?.id === member.id ? 'text-expert-gold translate-x-4' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Icon visible only on active/hover */}
                                    <div className={`hidden md:block opacity-0 transition-all duration-300 transform ${activeMember?.id === member.id ? 'opacity-100 translate-x-0' : '-translate-x-4'}`}>
                                        <MoveRight className="w-8 h-8 text-expert-gold" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Sticky Image Reveal */}
                    <div className="lg:w-1/2 relative hidden lg:block">
                        <div className="sticky top-32 h-[600px] w-full bg-gray-50 rounded-[2rem] overflow-hidden">
                            <AnimatePresence mode="wait">
                                {activeMember ? (
                                    <motion.div
                                        key={activeMember.id}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative w-full h-full"
                                    >
                                        <img
                                            src={activeMember.image}
                                            alt={activeMember.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-expert-navy/80 via-transparent to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-10 text-white">
                                            <p className="text-xl font-light italic leading-relaxed text-white/90">
                                                "{activeMember.description}"
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 space-y-4 bg-gray-100/50">
                                        <p className="text-lg">Ekip üyesini görüntülemek için ismin üzerine gelin</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
