import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'
import Resume from '../app/resume/Resume'

// Render as static HTML (SSR-style). This skips client-side effects
// (IntersectionObserver, clock) that jsdom can't run reliably, while
// still verifying the rendered output.
const html = renderToStaticMarkup(<Home />)
const resume = renderToStaticMarkup(<Resume />)

describe('Portfolio homepage (minimal rebuild)', () => {
  it('renders the hero headline and four-years sub', () => {
    expect(html).toMatch(/full-stack engineer/i)
    expect(html).toMatch(/front to back/i)
    expect(html).toMatch(/four years/i)
  })

  it('renders the 3 work entries', () => {
    expect(html).toContain('Indiecator')
    expect(html).toContain('Satraj')
    expect(html).toContain('Diffed.gg')
  })

  it('links to the live projects', () => {
    expect(html).toContain('https://indiecator.com')
    expect(html).toContain('https://satraj.inc')
    expect(html).toContain('https://diffed-swart.vercel.app/')
  })

  it('has GitHub, LinkedIn, and email links', () => {
    expect(html).toContain('https://github.com/developeruzairsaleem')
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('mailto:uzairsaleemdev@gmail.com')
  })

  it('links the résumé to the /resume page', () => {
    expect(html).toContain('href="/resume"')
  })

  it('has the sections: work, about, contact', () => {
    expect(html).toContain('id="work"')
    expect(html).toContain('id="about"')
    expect(html).toContain('id="contact"')
  })
})

describe('Résumé document', () => {
  it('renders the name and four-years summary', () => {
    expect(resume).toContain('Uzair Saleem')
    expect(resume).toMatch(/four years/i)
  })

  it('titles every role "Full-Stack Engineer" and never "senior"', () => {
    expect(resume).toContain('Full-Stack Engineer')
    expect(resume).not.toMatch(/senior/i)
  })

  it('renders the real career timeline', () => {
    expect(resume).toContain('Rocket Devs')
    expect(resume).toMatch(/Design&amp;Desktop|Design&Desktop/)
    expect(resume).toContain('Apifiny')
    expect(resume).toContain('SZABIST')
  })

  it('surfaces the real technical trade-offs', () => {
    expect(resume).toMatch(/proration/i)         // Indiecator MRR ledger
    expect(resume).toMatch(/MediaBunny/i)          // render pipeline
    expect(resume).toMatch(/divisions/i)           // Diffed ranking engine
    expect(resume).toMatch(/Samsara/i)             // Satraj reconciliation
  })

  it('links to the live projects', () => {
    expect(resume).toContain('https://indiecator.com')
    expect(resume).toContain('https://satraj.inc')
    expect(resume).toContain('https://diffed-swart.vercel.app/')
  })
})
