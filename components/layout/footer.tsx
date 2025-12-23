import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-expert-navy text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                EXPERT<span className="text-expert-gold">GRUP</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Sürdürülebilir mobilite, enerji ve gayrimenkul çözümleriyle geleceği inşa eden, çok disiplinli bir şirketler grubu.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Kurumsal</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about">Hakkımızda</FooterLink>
                            <FooterLink href="/companies">Grup Şirketleri</FooterLink>
                            <FooterLink href="/vision">Vizyon & Değerler</FooterLink>
                            <FooterLink href="/projects">Projeler</FooterLink>
                            <FooterLink href="/career">Kariyer / İK</FooterLink>
                            <FooterLink href="/media">Basın Odası</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Faaliyet Alanları</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/services/mobility">Mobilite & Otopark</FooterLink>
                            <FooterLink href="/services/real-estate">Gayrimenkul & İmar</FooterLink>
                            <FooterLink href="/services/energy">Enerji</FooterLink>
                            <FooterLink href="/services/digital">Dijital Dönüşüm</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">İletişim</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-expert-gold shrink-0" />
                                <span>İnkilap Mah. Küçüksu Cad. Antasya Residence Ümraniye/İSTANBUL</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-expert-gold shrink-0" />
                                <span>0 216 504 47 22</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-expert-gold shrink-0" />
                                <span>info@expertgrup2030.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>&copy; {currentYear} Expert Grup. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-expert-gold hover:text-expert-navy transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-300 hover:text-expert-gold transition-colors text-sm">
                {children}
            </Link>
        </li>
    );
}
