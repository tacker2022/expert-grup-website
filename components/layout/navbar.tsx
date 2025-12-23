"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Kurumsal", href: "/about" },
    { name: "Grup Şirketleri", href: "/companies" },
    { name: "Hizmetler", href: "/services" },
    { name: "Projeler", href: "/projects" },
    { name: "İletişim", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className={cn(
                        "text-2xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-expert-navy" : "text-white"
                    )}>
                        EXPERT<span className="text-expert-gold">GRUP</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-expert-gold",
                                isScrolled ? "text-expert-anthracite" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300",
                            isScrolled
                                ? "bg-expert-navy text-white hover:bg-expert-navy/90"
                                : "bg-white text-expert-navy hover:bg-gray-100"
                        )}
                    >
                        Bize Ulaşın
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-expert-navy" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-expert-navy" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-expert-navy hover:text-expert-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
