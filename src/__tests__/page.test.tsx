import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'
import Resume from '../app/resume/Resume'
import { CaseStudy } from '../components/portfolio/case-study'
import { WORK } from '../components/portfolio/work-data'
import { HIRE_HREF } from '../app/service-contact'
import { EXPERIENCE, SUMMARY } from '../app/resume/resume-data'
import { posts } from '../app/blog/posts'

jest.mock('@vercel/analytics', () => ({ track: jest.fn() }))

const toText = (markup: string) =>
  markup
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')

const html = renderToStaticMarkup(<Home />)
const text = toText(html)
const resume = renderToStaticMarkup(<Resume />)

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/'/g, '&#x27;')

describe('Home page (job-focused portfolio)', () => {
  it('leads with the role, the proof and availability, under a single h1', () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
    expect(text).toContain("I'm a full-stack engineer.")
    expect(text).toContain('a billing system')
    expect(text).toContain('a revenue dashboard')
    expect(text).toContain('a gaming marketplace')
    expect(text).toContain('Available now for full-time remote roles')
  })

  it('links each headline noun to its project', () => {
    for (const id of ['satraj', 'indiecator', 'diffed']) {
      expect(html).toContain(`href="#${id}"`)
      expect(html).toContain(`id="${id}"`)
    }
  })

  it('shows the at-a-glance facts a recruiter looks for', () => {
    expect(text).toContain('Next.js, TypeScript, Node, Postgres')
    expect(text).toContain('Islamabad (UTC+5)')
    expect(text).toContain('Works US hours')
  })

  it('links the hiring email CTA', () => {
    expect(html).toContain(`href="${escapeAttr(HIRE_HREF)}"`)
    expect(text).toContain('Email me')
  })

  it('renders every section the nav points to', () => {
    for (const id of ['main', 'work', 'experience', 'writing', 'stack', 'contact', 'reels']) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it('links live projects, public code and every case study', () => {
    expect(html).toContain('href="https://indiecator.com"')
    expect(html).toContain('href="https://satraj.inc"')
    expect(html).toContain('href="https://diffed-swart.vercel.app/"')
    expect(html).toContain('href="https://github.com/developeruzairsaleem/indiecator"')
    expect(html).toContain('href="https://github.com/developeruzairsaleem/diffedgg"')
    for (const w of WORK) expect(html).toContain(`href="/work/${w.slug}"`)
  })

  it('pulls every job from the résumé data', () => {
    for (const job of EXPERIENCE) expect(text).toContain(job.company.replace(/\s*\(.*\)$/, ''))
  })

  it('lists the writing', () => {
    for (const p of posts) expect(html).toContain(`href="/blog/${p.slug}"`)
  })

  it('links LinkedIn, GitHub, email and both résumé formats', () => {
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('https://github.com/developeruzairsaleem')
    expect(html).toContain('mailto:uzair@uzairsaleem.dev')
    expect(html).toContain('href="/resume"')
    expect(html).toContain('href="/uzair-saleem-resume.pdf"')
  })

  it('keeps old sales copy and padded year counts off the page', () => {
    expect(text).not.toContain('Stop retyping delivery tickets into QuickBooks.')
    expect(text).not.toContain('5+ years')
    expect(text).not.toContain('ETL')
  })

  it('never uses em or en dashes in visible copy', () => {
    expect(text).not.toContain('—')
    expect(text).not.toContain('–')
  })
})

describe('Case studies', () => {
  it('has a unique slug for every project, and every résumé link points at one', () => {
    const slugs = WORK.map((w) => w.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const job of EXPERIENCE) if (job.work) expect(slugs).toContain(job.work)
  })

  it.each(WORK.map((w) => [w.slug, w] as const))('%s renders the full story with no dashes', (_slug, work) => {
    const markup = renderToStaticMarkup(<CaseStudy work={work} />)
    const body = toText(markup)
    expect(markup.match(/<h1[\s>]/g)).toHaveLength(1)
    expect(body).toContain(work.title)
    expect(body).toContain('The problem')
    expect(body).toContain('What I built')
    expect(body).toContain('The hard part')
    expect(body).toContain('Results')
    expect(body).toContain(work.case.hard.title)
    for (const l of work.links) expect(markup).toContain(`href="${l.href}"`)
    expect(body).not.toContain('—')
    expect(body).not.toContain('–')
  })

  it('links the Indiecator write-up from its hard part', () => {
    const indiecator = WORK.find((w) => w.slug === 'indiecator')!
    const markup = renderToStaticMarkup(<CaseStudy work={indiecator} />)
    expect(markup).toContain('href="/blog/show-2-years-revenue-stripe-keeps-3-months"')
  })
})

describe('Résumé document', () => {
  it('renders the name, headline and summary', () => {
    expect(resume).toContain('Uzair Saleem')
    expect(resume).toContain('Full-Stack Engineer')
    expect(SUMMARY).toContain('since 2021')
  })

  it('links to the live projects', () => {
    expect(resume).toContain('https://satraj.inc')
    expect(resume).toContain('https://indiecator.com')
    expect(resume).toContain('https://diffed-swart.vercel.app/')
  })

  it('carries his own proof points', () => {
    expect(resume).toContain('Engineered data intensive ETL pipelines')
    expect(resume).toContain('n8n')
  })

  it('never uses em dashes', () => {
    expect(resume).not.toContain('—')
  })
})
