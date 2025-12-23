import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Car, Building2, Zap, Monitor, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Car,
        title: "Mobilite & Otopark",
        description: "Şehir içi trafik yoğunluğunu azaltan, akıllı ve sürdürülebilir otopark yönetim sistemleri tasarlıyor ve işletiyoruz.",
        features: ["Otopark Otomasyonu", "Vale Hizmetleri", "Trafik Danışmanlığı", "Elektrikli Şarj İstasyonları"],
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        icon: Building2,
        title: "Gayrimenkul & İmar",
        description: "Kentsel dönüşümden arazi geliştirmeye kadar geniş bir yelpazede, modern şehircilik ilkelerine uygun projeler üretiyoruz.",
        features: ["İmar Planlama", "Kentsel Tasarım", "Gayrimenkul Değerleme", "Proje Geliştirme"],
        color: "text-blue-600",
        bg: "bg-blue-600/10"
    },
    {
        icon: Zap,
        title: "Enerji",
        description: "Geleceğin enerji ihtiyaçlarına yönelik yenilenebilir ve çevre dostu enerji çözümleri sunuyoruz.",
        features: ["Güneş Enerjisi (GES)", "Enerji Verimliliği", "Karbon Ayak İzi Analizi", "Yeşil Bina Danışmanlığı"],
        color: "text-green-600",
        bg: "bg-green-600/10"
    },
    {
        icon: Monitor,
        title: "Dijital Dönüşüm",
        description: "İş süreçlerini optimize eden, verimliliği artıran ve güvenliği sağlayan teknolojik altyapılar kuruyoruz.",
        features: ["Siber Güvenlik", "Veri Analitiği", "Bulut Sistemleri", "Özel Yazılım Çözümleri"],
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        icon: Briefcase,
        title: "Danışmanlık",
        description: "Kurumların stratejik hedeflerine ulaşmaları için yönetim, finans ve operasyonel danışmanlık hizmetleri.",
        features: ["Yönetim Danışmanlığı", "Finansal Planlama", "Risk Analizi", "İnsan Kaynakları"],
        color: "text-purple-600",
        bg: "bg-purple-600/10"
    }
];

export const metadata = {
    title: "Hizmetlerimiz | Expert Grup",
    description: "Mobilite, enerji, gayrimenkul ve teknoloji alanlarındaki uzmanlıklarımız.",
};

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Hizmet Alanlarımız"
                    description="Sektörel uzmanlıklarımızla hayatın her alanına dokunan entegre çözümler sunuyoruz."
                    parent="Faaliyetler"
                />

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {services.map((service, index) => (
                                <div key={service.title} className="group">
                                    <div className="flex items-start gap-6">
                                        <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-expert-navy mb-3 group-hover:text-expert-gold transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                            <ul className="space-y-3">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3 text-gray-500 font-medium text-sm">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link href="#" className="inline-flex items-center mt-6 text-sm font-bold text-expert-navy border-b border-expert-gold/30 pb-0.5 hover:text-expert-gold hover:border-expert-gold transition-colors">
                                                Detaylı İncele <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
