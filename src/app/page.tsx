import { SiteShell } from "@/components/portfolio/chrome";
import { Experience, Facts, Hero, HireCta, Stack, Work, Writing } from "@/components/portfolio/sections";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Facts />
      <Work />
      <Experience />
      <Writing />
      <Stack />
      <HireCta />
    </SiteShell>
  );
}
