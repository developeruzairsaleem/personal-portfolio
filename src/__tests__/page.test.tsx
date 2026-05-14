import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Portfolio Homepage', () => {
  it('renders the hero headline', () => {
    render(<Home />)
    expect(screen.getAllByText(/B2B SaaS/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the role + status meta in hero', () => {
    render(<Home />)
    expect(screen.getAllByText(/Senior Full-Stack Engineer/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 3 projects', () => {
    render(<Home />)
    expect(screen.getAllByText(/Indiecator/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Diffed\.gg/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Sat-Raj/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 3 testimonials with correct names', () => {
    render(<Home />)
    expect(screen.getByText(/Robbie Multani/)).toBeInTheDocument()
    expect(screen.getByText(/Omar Al Watan/)).toBeInTheDocument()
    expect(screen.getByText(/Daniel Reuter/)).toBeInTheDocument()
  })

  it('renders the writing section with 3 AI-agent posts', () => {
    render(<Home />)
    expect(screen.getByText(/AI is leverage/i)).toBeInTheDocument()
    expect(screen.getByText(/agent that worked while I slept/i)).toBeInTheDocument()
    expect(screen.getByText(/hardest part of working with AI agents/i)).toBeInTheDocument()
  })

  it('renders the stats bar', () => {
    render(<Home />)
    expect(screen.getByText('Years shipping')).toBeInTheDocument()
    expect(screen.getByText('Products in production')).toBeInTheDocument()
  })

  it('has resume download links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const resumeLinks = allLinks.filter(el => el.getAttribute('href') === '/uzair-saleem-resume.pdf')
    expect(resumeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has indiecator.com, diffed.gg, satraj.inc live links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const hrefs = allLinks.map(el => el.getAttribute('href'))
    expect(hrefs).toContain('https://indiecator.com')
    expect(hrefs).toContain('https://diffed.gg')
    expect(hrefs).toContain('https://satraj.inc')
  })

  it('has GitHub, LinkedIn, and email links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const hrefs = allLinks.map(el => el.getAttribute('href'))
    expect(hrefs).toContain('https://github.com/developeruzairsaleem')
    expect(hrefs).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(hrefs).toContain('mailto:uzairsaleemdev@gmail.com')
  })

  it('has 3 case study links', () => {
    render(<Home />)
    const caseStudyLinks = screen.getAllByText(/Open case study/i)
    expect(caseStudyLinks.length).toBe(3)
  })

  it('has index of work + operating notes sections', () => {
    render(<Home />)
    expect(screen.getByText(/Index of work/i)).toBeInTheDocument()
    expect(screen.getByText(/Operating notes/i)).toBeInTheDocument()
    expect(screen.getByText(/Tools, with hands-on hours/i)).toBeInTheDocument()
  })
})
