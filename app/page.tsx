import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Companies } from "@/components/home/companies";
import { Services } from "@/components/home/services";
import { Projects } from "@/components/home/projects";
import { Vision } from "@/components/home/vision";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Companies />
        <Services />
        <Projects />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
