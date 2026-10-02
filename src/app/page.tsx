import { SiteShell } from "@/components/site/shell";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Film } from "@/components/home/film";
import { Problem } from "@/components/home/problem";
import { Pipeline } from "@/components/home/pipeline";
import { Pillars } from "@/components/home/pillars";
import { Stats } from "@/components/home/stats";
import { CaseTeaser } from "@/components/home/case-teaser";
import { About } from "@/components/home/about";
import { Process } from "@/components/home/process";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <SiteShell>
      <main id="main">
        <Hero />
        <Marquee />
        <Film />
        <Problem />
        <Pipeline />
        <Pillars />
        <Stats />
        <CaseTeaser />
        <About />
        <Process />
        <Faq />
        <FinalCta />
      </main>
    </SiteShell>
  );
}
