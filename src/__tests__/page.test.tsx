import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'

// Render the page as static HTML (SSR-style). This skips client-side
// effects (IntersectionObserver, clock) that jsdom can't run reliably,
// while still verifying the rendered output.
const html = renderToStaticMarkup(<Home />)

describe('Portfolio Homepage (editorial rebuild)', () => {
  it('renders the hero headline', () => {
    expect(html).toMatch(/parts of the stack/i)
    expect(html).toMatch(/exact/i)
  })

  it('renders all 4 work entries', () => {
    expect(html).toContain('Indiecator')
    expect(html).toContain('Sat-Raj')
    expect(html).toContain('Diffed.gg')
    expect(html).toContain('Design&amp;Desktop')
  })

  it('surfaces the real technical trade-offs', () => {
    expect(html).toMatch(/3 months of event history/i)        // Indiecator MRR
    expect(html).toMatch(/geofence/i)                          // Sat-Raj 3-gate
    expect(html).toMatch(/MediaBunny/i)                        // render pipeline
    expect(html).toMatch(/divisions/i)                         // Diffed ranking engine
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

  it('has the sections: work, experience, approach, stack, about, contact', () => {
    expect(html).toContain('id="work"')
    expect(html).toContain('id="experience"')
    expect(html).toContain('id="approach"')
    expect(html).toContain('id="stack"')
    expect(html).toContain('id="about"')
    expect(html).toContain('id="contact"')
  })

  it('renders the real career timeline', () => {
    expect(html).toContain('Rocket Devs')
    expect(html).toContain('Apifiny')
    expect(html).toMatch(/Design&amp;Desktop|Design&Desktop/)
    expect(html).toContain('SZABIST')
  })
})
