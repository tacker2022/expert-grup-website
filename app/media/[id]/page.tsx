"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useParams } from "next/navigation";

// Mock Data (In a real app, this would be fetched from an API/CMS)
const NEWS_DATA: Record<string, any> = {
    "1": {
        title: "Expert Grup, Sürdürülebilir Enerji Yatırımlarını İki Katına Çıkarıyor",
        date: "15 Aralık 2024",
        category: "Basın Bülteni",
        author: "Kurumsal İletişim",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee7e8e9?q=80&w=2674&auto=format&fit=crop",
        content: `
            <p class="lead text-xl text-gray-600 mb-8 font-medium">
                2025 vizyonumuz kapsamında yenilenebilir enerji portföyümüzü genişletiyor, karbon ayak izimizi sıfıra indirmeyi hedefliyoruz.
            </p>
            <p class="mb-6">
                Expert Grup olarak, gelecek nesillere daha yaşanabilir bir dünya bırakma sorumluluğumuzun bilincindeyiz. Bu doğrultuda, enerji sektöründeki yatırımlarımızı tamamen yenilenebilir kaynaklara yönlendirme kararı aldık. Yönetim Kurulumuzun onayladığı yeni strateji planı çerçevesinde, 2025 yılı sonuna kadar rüzgar ve güneş enerjisi santrali (RES ve GES) kurulu gücümüzü %100 artırmayı hedefliyoruz.
            </p>
            <h3 class="text-2xl font-bold text-expert-navy mt-10 mb-4">Stratejik Hedefler ve Yatırım Planı</h3>
            <p class="mb-6">
                Bu yatırım hamlesi sadece kapasite artışını değil, aynı zamanda teknolojik altyapının modernizasyonunu da kapsıyor. Akıllı şebeke sistemleri ve enerji depolama teknolojileri üzerine Ar-Ge çalışmalarımıza hız vereceğiz.
            </p>
            <ul class="list-disc pl-6 space-y-3 mb-8 text-gray-700">
                <li>Yıllık 500 MW kurulu güç kapasitesine ulaşılması.</li>
                <li>Karbon emisyonlarının %40 oranında azaltılması.</li>
                <li>Yerli teknoloji kullanımının teşvik edilmesi.</li>
            </ul>
            <p>
                Yönetim Kurulu Başkanımız Sn. Selami Balcı konuyla ilgili yaptığı açıklamada, "Enerji, sadece bir ticari faaliyet alanı değil, ülkemizin bağımsızlığı ve dünyanın geleceği için kritik bir sektördür. Expert Grup olarak bu alanda öncü adımlar atmaya devam edeceğiz," ifadelerini kullandı.
            </p>
        `
    },
    // Fallback for other IDs just to show layout works
    "default": {
        title: "Örnek Haber İçeriği",
        date: "01 Ocak 2025",
        category: "Genel",
        author: "Editör",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        content: `
            <p class="lead text-xl text-gray-600 mb-8 font-medium">
                Bu bir örnek haber detay sayfasıdır. Gerçek veriler CMS veya API üzerinden gelecektir.
            </p>
            <p class="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 class="text-2xl font-bold text-expert-navy mt-10 mb-4">Alt Başlık</h3>
            <p class="mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        `
    }
};

export default function NewsDetailPage() {
    const params = useParams();
    // In Next.js 14+ params might be async in some contexts, but client-side useParams is sync.
    // However, handling "id" safely:
    const id = typeof params.id === 'string' ? params.id : '1';

    const news = NEWS_DATA[id] || NEWS_DATA["default"];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                {/* Hero / Header Section */}
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/media" className="inline-flex items-center gap-2 text-gray-500 hover:text-expert-gold transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Basın Odasına Dön
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-expert-gold font-bold uppercase tracking-wider mb-6">
                        <span>{news.category}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-gray-400 font-normal normal-case flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {news.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-expert-navy leading-tight mb-12">
                        {news.title}
                    </h1>
                </div>

                {/* Featured Image */}
                <div className="container mx-auto px-6">
                    <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl relative">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-expert-navy/20 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 max-w-3xl relative">
                    {/* Share Sidebar (Desktop) */}
                    <div className="hidden lg:flex flex-col gap-4 absolute -left-24 top-0 items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase rotate-90 mb-4 tracking-widest origin-bottom">Paylaş</span>
                        <SocialShareButton icon={Linkedin} />
                        <SocialShareButton icon={Twitter} />
                        <SocialShareButton icon={Facebook} />
                    </div>

                    <div
                        className="prose prose-lg prose-headings:text-expert-navy prose-a:text-expert-gold prose-li:marker:text-expert-gold text-gray-600 mx-auto"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />

                    {/* Author Box */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Yazar</p>
                                <p className="font-bold text-expert-navy">{news.author}</p>
                            </div>
                        </div>
                        <div className="flex lg:hidden gap-2">
                            <SocialShareButton icon={Share2} />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

function SocialShareButton({ icon: Icon }: { icon: any }) {
    return (
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-expert-navy hover:text-white hover:border-expert-navy transition-all">
            <Icon className="w-4 h-4" />
        </button>
    );
}
