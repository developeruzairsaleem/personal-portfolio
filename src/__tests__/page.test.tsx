import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Mock framer-motion — strip animation props before passing to DOM
jest.mock('framer-motion', () => {
  const strip = ({ children, initial, animate, variants, whileInView, viewport, transition, ...rest }: any) =>
    ({ children, ...rest })
  return {
    motion: {
      div: (props: any) => { const p = strip(props); return React.createElement('div', p) },
      h1:  (props: any) => { const p = strip(props); return React.createElement('h1', p) },
      h2:  (props: any) => { const p = strip(props); return React.createElement('h2', p) },
      p:   (props: any) => { const p = strip(props); return React.createElement('p', p) },
    },
  }
})

import Home from '../app/page'

describe('Portfolio Homepage', () => {
  it('renders the hero headline', () => {
    render(<Home />)
    // Hero headline contains "B2B SaaS" inside a span — uniquely identifies hero
    expect(screen.getByText('B2B SaaS')).toBeInTheDocument()
    // "products end to end" appears in hero + about — use getAllByText
    const matches = screen.getAllByText(/products end to end/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('shows the role-availability badge', () => {
    render(<Home />)
    // Both hero badge and about section use this phrasing — assert at least one exists
    const matches = screen.getAllByText(/Open to Senior Full-Stack/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 3 projects', () => {
    render(<Home />)
    expect(screen.getByText('Indiecator')).toBeInTheDocument()
    expect(screen.getByText('Diffed.gg')).toBeInTheDocument()
    expect(screen.getByText(/Sat-Raj/i)).toBeInTheDocument()
  })

  it('renders the stats bar', () => {
    render(<Home />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Live SaaS Products')).toBeInTheDocument()
    expect(screen.getByText('Client Projects Shipped')).toBeInTheDocument()
    expect(screen.getByText('Remote, Global')).toBeInTheDocument()
  })

  it('has a contact email link', () => {
    render(<Home />)
    const emailLinks = screen.getAllByRole('link', { name: /uzairsaleemdev@gmail\.com|email me/i })
    const mailto = emailLinks.find(el => el.getAttribute('href') === 'mailto:uzairsaleemdev@gmail.com')
    expect(mailto).toBeDefined()
  })

  it('renders the nav logo', () => {
    render(<Home />)
    expect(screen.getByText('Uzair Saleem')).toBeInTheDocument()
  })

  it('has a LinkedIn link', () => {
    render(<Home />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/uzair-saleem-5a399825a/')
  })

  it('has an indiecator.com link', () => {
    render(<Home />)
    const indiecatorLink = screen.getByRole('link', { name: /indiecator\.com/i })
    expect(indiecatorLink).toHaveAttribute('href', 'https://indiecator.com')
  })

  it('has a satraj.inc link', () => {
    render(<Home />)
    const satrajLink = screen.getByRole('link', { name: /satraj\.inc/i })
    expect(satrajLink).toHaveAttribute('href', 'https://satraj.inc')
  })

  it('has case study PDF links for each project', () => {
    render(<Home />)
    const caseStudyLinks = screen.getAllByText(/Read case study/i)
    expect(caseStudyLinks.length).toBe(3)
  })
})
