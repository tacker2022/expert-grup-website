import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";
import { TeamList } from "@/components/about/team-list";

export const metadata = {
    title: "Hakkımızda | Expert Grup",
    description: "Expert Grup'un kuruluş hikayesi, vizyonu ve kurumsal değerleri.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="Hakkımızda"
                    description="2018'den bugüne, disiplinlerarası uzmanlık ve güvenle geleceği inşa ediyoruz."
                    parent="Kurumsal"
                />

                {/* Story Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <h2 className="text-3xl md:text-4xl font-bold text-expert-navy mb-6">
                                    Bir Dünya Şirketi Olma Yolunda
                                </h2>
                                <p>
                                    Expert Grup olarak birçok disiplini tek bir çatı altında toplamanın zorluklarını
                                    bilerek, uzun süren piyasa analizlerimiz ve Ar-Ge çalışmalarımız neticesinde
                                    2018 yılında İstanbul'da temellerimizi attık.
                                </p>
                                <p>
                                    Sektördeki boşlukları iyi analiz eden uzman kadromuzla, sadece hizmet üreten değil,
                                    aynı zamanda "katma değer" ve "sürdürülebilir çözümler" sunan bir yapı kurguladık.
                                    Bugün, gayrimenkulden enerjiye, teknolojiden ulaşıma kadar geniş bir yelpazede
                                    faaliyet gösteren çok uluslu bir vizyonla yolumuza devam ediyoruz.
                                </p>
                                <div className="pt-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FeatureItem text="Yenilikçi Yaklaşım" />
                                        <FeatureItem text="Global Standartlar" />
                                        <FeatureItem text="Uzman Kadro" />
                                        <FeatureItem text="Müşteri Memnuniyeti" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
                                    <img
                                        src="/selami-balci.jpg"
                                        alt="Selami Balcı - Yönetim Kurulu Başkanı"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Quote Float Box */}
                                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-sm">
                                    <div className="text-expert-gold text-4xl font-serif leading-none mb-4">"</div>
                                    <p className="text-expert-navy font-medium text-lg mb-4 italic leading-relaxed">
                                        Geleceği inşa etmek sadece binalar dikmek değil; insana ve doğaya değer katan sürdürülebilir yaşam alanları yaratmaktır.
                                    </p>
                                    <div>
                                        <p className="text-expert-navy font-bold text-base">Selami BALCI</p>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider text-xs">Yönetim Kurulu Başkanı</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section (Executive List) */}
                <TeamList />

                {/* Values Grid */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-expert-navy mb-4">Temel Değerlerimiz</h2>
                            <p className="text-gray-600">Bizi biz yapan ve her kararımızda bize rehberlik eden prensiplerimiz.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ValueCard
                                icon={Award}
                                title="Mükemmeliyet"
                                desc="Her işte en yüksek kalite standartlarını hedefler, sıradanlığı reddederiz."
                            />
                            <ValueCard
                                icon={Users}
                                title="İnsan Odaklılık"
                                desc="Çalışanlarımızdan müşterilerimize kadar dokunduğumuz her insana değer veririz."
                            />
                            <ValueCard
                                icon={Globe}
                                title="Sürdürülebilirlik"
                                desc="Gelecek nesillere yaşanabilir bir dünya bırakmak için çevreye duyarlı projeler üretiriz."
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-expert-gold" />
            <span className="text-expert-anthracite font-medium">{text}</span>
        </div>
    );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-expert-navy/5 text-expert-navy rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-expert-navy">{title}</h3>
            <p className="text-gray-500 leading-relaxed">{desc}</p>
        </div>
    );
}
