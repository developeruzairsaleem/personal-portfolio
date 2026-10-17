import "@/components/portfolio/portfolio.css";
import { Contact, Experience, Hero, PfFooter, PfNav, Stack, Work } from "@/components/portfolio/sections";

export default function Home() {
  return (
    <div className="pf">
      <PfNav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <PfFooter />
    </div>
  );
}
