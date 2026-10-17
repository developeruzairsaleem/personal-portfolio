import '@testing-library/jest-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'
import Resume from '../app/resume/Resume'
import { HIRE_HREF } from '../app/service-contact'
import { EXPERIENCE, SUMMARY } from '../app/resume/resume-data'

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

describe('Home page (job-focused portfolio)', () => {
  it('leads with the role and a single h1', () => {
    expect(text).toContain('Full-stack engineer')
    expect(text).toContain('Open to full-time remote roles')
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
  })

  it('shows the three proof lines in his own words', () => {
    expect(text).toContain('Engineered data intensive ETL pipelines for indiecator.com')
    expect(text).toContain('billing workflow from dispatch to QuickBooks for satraj.inc')
    expect(text).toContain('n8n workflow for automatic social media posting')
  })

  it('links the hiring email CTA', () => {
    expect(html).toContain(`href="${escapeAttr(HIRE_HREF)}"`)
    expect(text).toContain('Email me')
  })

  it('renders the sections the nav points to', () => {
    for (const id of ['main', 'work', 'experience', 'contact', 'satraj', 'indiecator', 'diffed', 'reels']) {
      expect(html).toContain(`id="${id}"`)
    }
  })

  it('links live projects and public code', () => {
    expect(html).toContain('href="https://indiecator.com"')
    expect(html).toContain('href="https://satraj.inc"')
    expect(html).toContain('href="https://diffed-swart.vercel.app/"')
    expect(html).toContain('href="https://github.com/developeruzairsaleem/indiecator"')
  })

  it('pulls every job from the résumé data', () => {
    for (const job of EXPERIENCE) expect(text).toContain(job.company)
  })

  it('links LinkedIn, GitHub, email and both résumé formats', () => {
    expect(html).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(html).toContain('https://github.com/developeruzairsaleem')
    expect(html).toContain('mailto:uzair@uzairsaleem.dev')
    expect(html).toContain('href="/resume"')
    expect(html).toContain('href="/uzair-saleem-resume.pdf"')
  })

  it('keeps the old sales pitch and padded year counts off the page', () => {
    expect(text).not.toContain('Stop retyping delivery tickets into QuickBooks.')
    expect(text).not.toContain('5+ years')
  })

  it('never uses em dashes in visible copy', () => {
    expect(text).not.toContain('—')
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
