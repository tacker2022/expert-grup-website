"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Users, Zap, Heart, Clock, ChevronDown, Upload, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareerPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Kariyer"
                    description="Expert Grup ailesine katılın, geleceği birlikte inşa edelim. Yeteneğinize ve tutkunuza değer veriyoruz."
                    parent="İnsan Kaynakları"
                />

                {/* Culture & Benefits */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-expert-navy mb-4">Neden Expert Grup?</h2>
                            <p className="text-gray-600">
                                Sadece bir iş yeri değil, potansiyelinizi gerçekleştirebileceğiniz bir gelişim merkezi sunuyoruz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <BenefitCard
                                icon={Zap}
                                title="İnovasyon"
                                desc="En son teknolojilerle çalışın ve sınırları zorlayan projelerde yer alın."
                            />
                            <BenefitCard
                                icon={Users}
                                title="Güçlü Takım"
                                desc="Alanında uzman, destekleyici ve dinamik bir ekiple birlikte büyüyün."
                            />
                            <BenefitCard
                                icon={Heart}
                                title="Önce İnsan"
                                desc="Sağlığınız, huzurunuz ve iş-yaşam dengeniz bizim için önceliktir."
                            />
                            <BenefitCard
                                icon={Clock}
                                title="Esnek Çalışma"
                                desc="Sonuç odaklı kültürümüzle, verimli olduğunuz her yerde çalışabilirsiniz."
                            />
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-24 bg-gray-50" id="positions">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl font-bold text-expert-navy mb-4">Açık Pozisyonlar</h2>
                                <p className="text-gray-600">Ekibimize katılmak için güncel fırsatları inceleyin.</p>
                            </div>
                            <div className="text-sm font-medium text-expert-gold bg-expert-gold/10 px-4 py-2 rounded-full">
                                Şu an 3 açık pozisyon var
                            </div>
                        </div>

                        <div className="space-y-4">
                            <JobAccordion
                                title="Senior Frontend Developer"
                                location="İstanbul / Maslak (Hibrit)"
                                type="Tam Zamanlı"
                                department="Yazılım & Teknoloji"
                            />
                            <JobAccordion
                                title="Gayrimenkul Yatırım Uzmanı"
                                location="İstanbul / Ümraniye"
                                type="Tam Zamanlı"
                                department="Satış & Pazarlama"
                            />
                            <JobAccordion
                                title="Elektrik Mühendisi (GES Projeleri)"
                                location="Ankara / Saha"
                                type="Proje Bazlı"
                                department="Enerji"
                            />
                        </div>
                    </div>
                </section>

                {/* General Application Form */}
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="bg-expert-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-expert-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6">Genel Başvuru</h2>
                                <p className="text-gray-300 mb-8 text-lg">
                                    Aradığınız pozisyonu listede göremediniz mi? CV'nizi veritabanımıza ekleyin, uygun fırsatlarda sizinle iletişime geçelim.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Ad Soyad</label>
                                            <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-expert-gold text-white placeholder-gray-500 transition-colors" placeholder="Adınız Soyadınız" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">E-Posta</label>
                                            <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-expert-gold text-white placeholder-gray-500 transition-colors" placeholder="ornek@email.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">İlgilendiğiniz Alan</label>
                                        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-expert-gold text-white transition-colors [&>option]:text-black">
                                            <option value="" disabled selected>Bir departman seçin</option>
                                            <option value="tech">Yazılım & Teknoloji</option>
                                            <option value="sales">Satış & Pazarlama</option>
                                            <option value="finance">Finans & Muhasebe</option>
                                            <option value="hr">İnsan Kaynakları</option>
                                            <option value="engineering">Mühendislik & Saha</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">CV Yükle</label>
                                        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-expert-gold/50 transition-colors cursor-pointer bg-white/5 group">
                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-expert-gold transition-colors" />
                                            <p className="text-sm text-gray-300 font-medium">Dosyayı sürükleyin veya <span className="text-expert-gold underline">seçmek için tıklayın</span></p>
                                            <p className="text-xs text-gray-500 mt-1">PDF, DOCX (Max. 5MB)</p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-expert-gold text-expert-navy rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg shadow-black/20 mt-4"
                                    >
                                        Başvuruyu Gönder
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function BenefitCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-expert-gold/30 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white text-expert-navy rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-expert-navy group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-expert-navy">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
        </div>
    );
}

function JobAccordion({ title, location, type, department }: { title: string, location: string, type: string, department: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-expert-gold/30 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-expert-navy">{title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {department}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{location}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{type}</span>
                    </div>
                </div>
                <div className={`p-2 rounded-full bg-gray-50 transition-transform duration-300 ${isOpen ? "rotate-180 bg-expert-navy text-white" : "text-gray-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-gray-100">
                            <div className="pt-6 space-y-6 text-gray-600 leading-relaxed">
                                <div>
                                    <h4 className="font-bold text-expert-navy mb-2">Pozisyon Hakkında</h4>
                                    <p>
                                        Bu pozisyon için, alanında en az 3 yıl deneyimli, yenilikçi çözümler üretebilen ve takım çalışmasına yatkın adaylar arıyoruz. Expert Grup'un vizyonuna katkı sağlayacak, dinamik bir ortamda çalışmaya istekli takım arkadaşları arıyoruz.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-expert-navy mb-2">Aranan Nitelikler</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-expert-gold shrink-0 mt-0.5" />
                                                <span>İlgili üniversite bölümlerinden mezun</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-expert-gold shrink-0 mt-0.5" />
                                                <span>İyi derecede İngilizce bilen</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-expert-gold shrink-0 mt-0.5" />
                                                <span>Analitik düşünme yeteneğine sahip</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-expert-navy mb-2">Sunduğumuz İmkanlar</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Özel Sağlık Sigortası</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Eğitim ve Gelişim Desteği</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Yemek ve Ulaşım Desteği</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="px-8 py-3 bg-expert-navy text-white rounded-lg font-semibold hover:bg-expert-anthracite transition-colors">
                                        Şimdi Başvur
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
