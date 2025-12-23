import { PageHeader } from "@/components/layout/page-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "İletişim | Expert Grup",
    description: "Bize ulaşın. Adres, telefon ve iletişim formu.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <PageHeader
                    title="İletişim"
                    description="Sorularınız, projeleriniz ve iş birlikleri için bize dilediğiniz zaman ulaşabilirsiniz."
                    parent="Bize Ulaşın"
                />

                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-expert-navy mb-6">Merkez Ofis</h3>
                                    <div className="space-y-6">
                                        <ContactItem
                                            icon={MapPin}
                                            title="Adres"
                                            content={
                                                <>
                                                    İnkilap Mah. Küçüksu Cad.<br />
                                                    Antasya Residence Ümraniye/İSTANBUL
                                                </>
                                            }
                                        />
                                        <ContactItem
                                            icon={Phone}
                                            title="Telefon"
                                            content="0 216 504 47 22"
                                        />
                                        <ContactItem
                                            icon={Mail}
                                            title="E-Posta"
                                            content="info@expertgrup2030.com"
                                        />
                                        <ContactItem
                                            icon={Clock}
                                            title="Çalışma Saatleri"
                                            content="Pzt - Cum: 09:00 - 18:00"
                                        />
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium">
                                    [Google Haritalar Entegrasyonu]
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-expert-navy mb-2">Bize Yazın</h3>
                                <p className="text-gray-500 mb-8">Formu eksiksiz doldurun, en kısa sürede size dönüş yapalım.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputGroup label="Adınız Soyadınız" placeholder="John Doe" />
                                        <InputGroup label="E-Posta Adresiniz" placeholder="john@example.com" type="email" />
                                    </div>
                                    <InputGroup label="Konu" placeholder="Proje talebi hakkında..." />

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-expert-anthracite ml-1">Mesajınız</label>
                                        <textarea
                                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-expert-gold/20 focus:border-expert-gold transition-all resize-none h-40"
                                            placeholder="Detayları buraya yazabilirsiniz..."
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-expert-navy text-white rounded-xl font-bold text-lg hover:bg-expert-navy/90 transition-all shadow-lg shadow-expert-navy/20"
                                    >
                                        Gönder
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

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: React.ReactNode }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-expert-gold/10 text-expert-navy rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-sm font-bold text-expert-anthracite uppercase tracking-wide mb-1">{title}</h4>
                <div className="text-gray-600 font-medium leading-relaxed">{content}</div>
            </div>
        </div>
    );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-expert-anthracite ml-1">{label}</label>
            <input
                type={type}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-expert-gold/20 focus:border-expert-gold transition-all"
                placeholder={placeholder}
            />
        </div>
    );
}
