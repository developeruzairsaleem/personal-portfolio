import { SiteShell } from "@/components/site/shell";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Automation } from "@/components/home/automation";
import { About } from "@/components/home/about";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <SiteShell>
      <main id="main">
        <Hero />
        <Marquee />
        <Automation />
        <About />
        <FinalCta />
      </main>
    </SiteShell>
  );
}
