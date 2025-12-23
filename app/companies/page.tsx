import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const companies = [
    {
        id: "park-expert",
        name: "Park Expert",
        tagline: "Otopark Yönetiminde Uzman Çözümler",
        description: "Modern şehirciliğin mihenk taşlarından olan otopark yönetim sistemleri konusunda çözümler üreten, tasarım, planlama ve işletme alanlarında anahtar teslim hizmet sunan lider marka.",
        features: ["Otopark Dizaynı", "İşletme Yönetimi", "Danışmanlık Hizmetleri"],
        color: "bg-yellow-500",
        textColor: "text-yellow-600",
        logoText: "PARK"
    },
    {
        id: "expert-imar",
        name: "Expert İmar",
        tagline: "Şehircilik ve Planlama",
        description: "Etüd planlama, kentsel dönüşüm, harita mühendisliği ve imar hukuku alanlarında uzman kadrosuyla belediyelere ve özel sektöre teknik danışmanlık sağlar.",
        features: ["İmar Planlama", "Kentsel Dönüşüm", "Harita Hizmetleri"],
        color: "bg-blue-600",
        textColor: "text-blue-600",
        logoText: "İMAR"
    },
    {
        id: "solar-expert",
        name: "Solar Expert",
        tagline: "Geleceğin Enerjisi",
        description: "Yenilenebilir enerji kaynakları üzerine odaklanan, güneş enerjisi santralleri (GES) kurulumu, projelendirme ve verimlilik danışmanlığı sunan enerji şirketi.",
        features: ["GES Kurulumu", "Enerji Verimliliği", "Bakım & Onarım"],
        color: "bg-green-500",
        textColor: "text-green-600",
        logoText: "SOLAR"
    },
    {
        id: "goods-real-estate",
        name: "Goods Real Estate",
        tagline: "Gayrimenkul Yatırımlarında Doğru Adres",
        description: "Konut, ticari ve arsa yatırımlarında değerleme, alım-satım ve portföy yönetimi hizmetleriyle güvenilir çözüm ortağınız.",
        features: ["Gayrimenkul Danışmanlığı", "Portföy Yönetimi", "Yatırım Uzmanlığı"],
        color: "bg-red-500",
        textColor: "text-red-600",
        logoText: "GOODS"
    },
    {
        id: "beyaz-auto",
        name: "Beyaz Auto",
        tagline: "Premium Araç Kiralama & Satış",
        description: "Lüks segment araç kiralama, filo yönetimi ve ikinci el araç satışında güvenilir ve kurumsal hizmet sunan otomotiv markası.",
        features: ["Filo Kiralama", "VIP Transfer", "Araç Satış"],
        color: "bg-gray-800",
        textColor: "text-gray-800",
        logoText: "AUTO"
    },
    {
        id: "formula-bilisim",
        name: "Formula Bilişim",
        tagline: "Bilişim Altyapı Çözümleri",
        description: "Donanım tedariği, sunucu sistemleri, network altyapısı ve teknik destek hizmetleriyle kurumsal bilişim ihtiyaçlarını karşılayan çözüm ortağı.",
        features: ["Donanım Tedariği", "Network", "Teknik Servis"],
        color: "bg-blue-400",
        textColor: "text-blue-500",
        logoText: "FORMULA"
    },
];

export const metadata = {
    title: "Grup Şirketleri | Expert Grup",
    description: "Expert Grup bünyesindeki markalar: Park Expert, Expert İmar, Solar Expert ve daha fazlası.",
};

export default function CompaniesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Grup Şirketlerimiz"
                    description="Farklı sektörlerdeki uzmanlıklarımızı, Expert Grup kalitesi ve güvencesiyle tek çatı altında sunuyoruz."
                    parent="Kurumsal"
                />

                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 gap-12">
                            {companies.map((company, index) => (
                                <div
                                    key={company.id}
                                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center group hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Brand Visual Area */}
                                    <div className="w-full lg:w-1/3 flex-shrink-0">
                                        <div className="aspect-video rounded-2xl bg-gray-50 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
                                            <div className={`text-4xl font-black ${company.textColor} opacity-80`}>
                                                {company.logoText}
                                            </div>
                                            {/* Decorative colored blur */}
                                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${company.color} blur-[60px] opacity-20`} />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-2 h-8 rounded-full ${company.color}`} />
                                            <h2 className="text-3xl font-bold text-expert-navy">{company.name}</h2>
                                        </div>

                                        <p className="text-lg font-medium text-expert-anthracite mb-4">
                                            {company.tagline}
                                        </p>

                                        <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
                                            {company.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {company.features.map((feature) => (
                                                <span key={feature} className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/companies/${company.id}`}
                                            className="inline-flex items-center font-semibold text-expert-navy hover:text-expert-gold transition-colors"
                                        >
                                            Şirket Detayına Git <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
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
