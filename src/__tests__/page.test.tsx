import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'
import Resume from '../app/resume/Resume'
import { BOOK_HREF, FIT_CHECK_HREF } from '../app/service-contact'

// @vercel/analytics ships ESM only; the page just needs `track` to exist.
jest.mock('@vercel/analytics', () => ({ track: jest.fn() }))

// Render as static HTML (SSR-style). Client effects (scroll reveals, the
// animated product scenes) don't run, so this checks the server markup.
const html = renderToStaticMarkup(<Home />)
const text = html
  .replace(/<[^>]+>/g, '')
  .replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
const resume = renderToStaticMarkup(<Resume />)

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/'/g, '&#x27;')

describe('Home page (fuel distributor redesign)', () => {
  it('leads with the outcome headline and who it is for', () => {
    expect(text).toContain('Stop retyping delivery tickets into QuickBooks.')
    expect(text).toContain('Back-office software for gasoline & diesel distributors')
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
  })

  it('points every booking CTA at the walkthrough calendar', () => {
    const bookLinks = html.match(new RegExp(`href="${BOOK_HREF}"`, 'g')) ?? []
    // nav + hero + process + final CTA
    expect(bookLinks.length).toBeGreaterThanOrEqual(4)
    expect(text).toContain('Book a 20-min walkthrough')
  })

  it('offers the email fit check as the secondary CTA', () => {
    expect(html).toContain(`href="${escapeAttr(FIT_CHECK_HREF)}"`)
    expect(text).toContain('Email Uzair')
  })

  it('has the film section, with a lazy video and a hero link to it', () => {
    expect(html).toContain('id="film"')
    expect(html).toContain('href="#film"')
    expect(html).toMatch(/<video[^>]*src="\/fuel-film\.mp4"[^>]*poster="\/fuel-film-poster\.jpg"[^>]*preload="metadata"/)
  })

  it('keeps the screen recording one click away, loaded only when opened', () => {
    expect(text).toContain('Watch the live Sat-Raj system')
    expect(html).not.toMatch(/<video[^>]*src="\/fuel-demo-v3\.mp4"/)
    expect(html.match(/<video[\s>]/g)).toHaveLength(1)
  })

  it('renders every section the nav and CTAs point to', () => {
    for (const id of ['main', 'film', 'how', 'build', 'case', 'process', 'about', 'faq', 'contact']) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it('names the real client and links the case study', () => {
    expect(text).toContain('Sat-Raj, Inc.')
    expect(html).toContain('href="/work/satraj"')
    expect(html).toContain('href="https://satraj.inc"')
  })

  it('labels product visuals as illustrations with demo data', () => {
    expect(text).toContain('Illustration · demo data')
  })

  it('shows no testimonial until the owner quote exists', () => {
    expect(html).not.toContain('<blockquote')
  })

  it('answers the four obvious questions', () => {
    expect(text).toContain("We don't use Samsara.")
    expect(text).toContain('We already have fuel software.')
    expect(text).toContain("You're not local. What if something breaks?")
    expect(text).toContain('What does it cost?')
    expect(text).toContain('How long does it take?')
  })

  it('drops the cut copy', () => {
    for (const s of ['Turn the sound on', "here's what replaces it", 'Also shipped', "We'll look", 'Three jobs your office repeats', 'No. 0001', '24 customers', 'Anyone on the team', 'Sound familiar?', 'Engagement', 'The fuel system, end to end']) {
      expect(text).not.toContain(s)
    }
  })

  it('keeps the risk reversal and hero proof', () => {
    expect(text).toContain('Nothing changes until the invoices match.')
    expect(html).toContain('href="#case"')
    expect(text).toContain('NJ & PA fuel distributor')
    expect(text).toContain('on QuickBooks Desktop')
    expect(text).toContain('How it was built')
  })

  it('says each headline fact once', () => {
    const count = (s: string) => text.split(s).length - 1
    expect(count('45–60')).toBe(1)
    expect(count('5 years')).toBe(1)
    expect(count('one click')).toBe(1)
    expect(count('own cloud account')).toBe(1)
    expect(count('Same-day replies')).toBe(1)
    expect(count('Book a 20-min walkthrough')).toBe(3)
  })

  it('speaks about Uzair in third person', () => {
    expect(text).not.toMatch(/\b(he|him|his|I|me|my)\b/)
    expect(text).not.toMatch(/\bWe'll\b/)
  })

  it('links LinkedIn, email and the résumé in the footer', () => {
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('mailto:uzair@uzairsaleem.dev')
    expect(html).toContain('href="/resume"')
  })
})

describe('Résumé document', () => {
  it('renders the name', () => {
    expect(resume).toContain('Uzair Saleem')
  })

  it('links to the live projects', () => {
    expect(resume).toContain('https://satraj.inc')
  })
})
