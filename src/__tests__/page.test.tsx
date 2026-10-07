import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'
import Resume from '../app/resume/Resume'
import { CONTACT_HREF } from '../app/service-contact'

jest.mock('@vercel/analytics', () => ({ track: jest.fn() }))

const html = renderToStaticMarkup(<Home />)
const text = html
  .replace(/<[^>]+>/g, '')
  .replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
const resume = renderToStaticMarkup(<Resume />)

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/'/g, '&#x27;')

describe('Home page (developer & automation portfolio)', () => {
  it('leads with developer and automation positioning', () => {
    expect(text).toContain('I build software and automate the work around it.')
    expect(text).toContain('Full-stack developer & automation specialist')
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
  })

  it('highlights 5+ years experience once in the hero assure list', () => {
    expect(text).toContain('5+ years shipping production software')
  })

  it('links contact CTAs to mailto', () => {
    expect(html).toContain(`href="${escapeAttr(CONTACT_HREF)}"`)
    expect(text).toContain('Get in touch')
    expect(text).toContain('Email Uzair')
  })

  it('renders main sections the nav points to', () => {
    for (const id of ['main', 'work', 'automation', 'about', 'contact']) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it('names flagship projects and live links', () => {
    expect(text).toContain('Satraj')
    expect(text).toContain('Indiecator')
    expect(html).toContain('href="https://indiecator.com"')
    expect(html).toContain('href="https://satraj.inc"')
    expect(html).toContain('href="https://diffed-swart.vercel.app/"')
  })

  it('includes automation and n8n positioning', () => {
    expect(text).toContain('Automation specialist')
    expect(text).toContain('n8n')
  })

  it('does not use the old fuel-distributor sales headline', () => {
    expect(text).not.toContain('Stop retyping delivery tickets into QuickBooks.')
  })

  it('links LinkedIn, email and the résumé in the footer', () => {
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('mailto:uzair@uzairsaleem.dev')
    expect(html).toContain('href="/resume"')
    expect(html).toContain('href="/uzair-saleem-resume.pdf"')
  })
})

describe('Résumé document', () => {
  it('renders the name and 5+ years summary', () => {
    expect(resume).toContain('Uzair Saleem')
    expect(resume).toContain('5+ years')
  })

  it('links to the live projects', () => {
    expect(resume).toContain('https://satraj.inc')
    expect(resume).toContain('https://indiecator.com')
    expect(resume).toContain('https://diffed-swart.vercel.app/')
  })

  it('lists automation skills', () => {
    expect(resume).toContain('n8n')
  })
})
