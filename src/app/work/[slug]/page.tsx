import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/portfolio/chrome";
import { CaseStudy } from "@/components/portfolio/case-study";
import { WORK, getWork } from "@/components/portfolio/work-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  const title = `${work.name}: ${work.title}`;
  return {
    title,
    description: work.case.lead,
    alternates: { canonical: `/work/${work.slug}` },
    openGraph: { title, description: work.case.lead, url: `/work/${work.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: work.case.lead },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  return (
    <SiteShell>
      <CaseStudy work={work} />
    </SiteShell>
  );
}
