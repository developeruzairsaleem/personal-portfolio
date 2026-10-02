import { SiteShell } from "@/components/site/shell";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Film } from "@/components/home/film";
import { Problem } from "@/components/home/problem";
import { Pipeline } from "@/components/home/pipeline";
import { CaseTeaser } from "@/components/home/case-teaser";
import { Process } from "@/components/home/process";
import { About } from "@/components/home/about";
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
        <CaseTeaser />
        <Process />
        <About />
        <Faq />
        <FinalCta />
      </main>
    </SiteShell>
  );
}
