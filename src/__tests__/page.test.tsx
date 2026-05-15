import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'

// Render the page as static HTML (SSR-style). This skips client-side
// effects (IntersectionObserver, requestAnimationFrame, photo tilt) that
// jsdom can't run reliably, while still verifying the rendered output.
const html = renderToStaticMarkup(<Home />)

describe('Portfolio Homepage (Maximal)', () => {
  it('renders the hero headline', () => {
    expect(html).toMatch(/B2B SaaS/i)
    expect(html).toMatch(/to end\./i)
  })

  it('renders all 3 projects', () => {
    expect(html).toContain('Indiecator')
    expect(html).toContain('Diffed.gg')
    expect(html).toContain('Sat-Raj')
  })

  it('renders all 3 testimonials with correct names', () => {
    expect(html).toContain('Robbie Multani')
    expect(html).toContain('Omar Al Watan')
    expect(html).toContain('Daniel Reuter')
  })

  it('renders the writing section with 3 AI-agent posts', () => {
    expect(html).toMatch(/AI is leverage/i)
    expect(html).toMatch(/agent that worked while I slept/i)
    expect(html).toMatch(/hardest part of working with AI agents/i)
  })

  it('renders the stats bar', () => {
    expect(html).toContain('Years shipping')
    expect(html).toContain('Products in production')
    expect(html).toContain('Founder clients')
  })

  it('has resume download link', () => {
    expect(html).toContain('/uzair-saleem-resume.pdf')
  })

  it('has indiecator.com, diffed.gg, satraj.inc live links', () => {
    expect(html).toContain('https://indiecator.com')
    expect(html).toContain('https://diffed.gg')
    expect(html).toContain('https://satraj.inc')
  })

  it('has GitHub, LinkedIn, and email links', () => {
    expect(html).toContain('https://github.com/developeruzairsaleem')
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('mailto:uzairsaleemdev@gmail.com')
  })

  it('has 3 case study links', () => {
    expect(html).toContain('/case-studies/indiecator.pdf')
    expect(html).toContain('/case-studies/diffed.pdf')
    expect(html).toContain('/case-studies/satraj.pdf')
  })

  it('has Maximal sections: work, how, about, contact', () => {
    expect(html).toContain('id="work"')
    expect(html).toContain('id="how"')
    expect(html).toContain('id="about"')
    expect(html).toContain('id="contact"')
  })

  it('renders the Rocket Devs / Apifiny / Design&Desktop context', () => {
    expect(html).toContain('Rocket Devs')
    expect(html).toContain('Apifiny')
    expect(html).toMatch(/Design&amp;Desktop|Design&Desktop/)
  })
})
