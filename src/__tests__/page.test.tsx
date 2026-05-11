import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Mock framer-motion — strip animation props before passing to DOM
jest.mock('framer-motion', () => {
  const strip = ({ children, initial, animate, variants, whileInView, viewport, transition, ...rest }: any) =>
    ({ children, ...rest })
  const make = (tag: string) => (props: any) => {
    const p = strip(props)
    return React.createElement(tag, p)
  }
  return {
    motion: {
      div:     make('div'),
      article: make('article'),
      figure:  make('figure'),
      span:    make('span'),
      h1:      make('h1'),
      h2:      make('h2'),
      h3:      make('h3'),
      p:       make('p'),
    },
    useInView: () => true,
    useMotionValue: (v: number) => ({ get: () => v, set: () => {}, on: () => {} }),
    useTransform: () => '0',
    animate: () => ({ stop: () => {} }),
  }
})

import Home from '../app/page'

describe('Portfolio Homepage', () => {
  it('renders the hero headline', () => {
    render(<Home />)
    expect(screen.getByText('B2B SaaS')).toBeInTheDocument()
    const matches = screen.getAllByText(/products end to end/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('shows the role-availability badge', () => {
    render(<Home />)
    const matches = screen.getAllByText(/Open to Senior Full-Stack/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 3 projects', () => {
    render(<Home />)
    expect(screen.getByText('Indiecator')).toBeInTheDocument()
    expect(screen.getByText('Diffed.gg')).toBeInTheDocument()
    expect(screen.getByText('Sat-Raj')).toBeInTheDocument()
  })

  it('renders all 3 testimonials with correct names', () => {
    render(<Home />)
    expect(screen.getByText('Robbie Multani')).toBeInTheDocument()
    expect(screen.getByText('Omar Al Watan')).toBeInTheDocument()
    expect(screen.getByText('Daniel Reuter')).toBeInTheDocument()
  })

  it('renders the writing section with 3 AI-agent posts', () => {
    render(<Home />)
    expect(screen.getByText(/AI is leverage/i)).toBeInTheDocument()
    expect(screen.getByText(/agent that worked while I slept/i)).toBeInTheDocument()
    expect(screen.getByText(/hardest part of working with AI agents/i)).toBeInTheDocument()
  })

  it('renders the stats bar', () => {
    render(<Home />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Live SaaS Products Shipped')).toBeInTheDocument()
    const matches = screen.getAllByText(/Founders/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('has resume download links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const resumeLinks = allLinks.filter(el => el.getAttribute('href') === '/uzair-saleem-resume.pdf')
    expect(resumeLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('has indiecator.com, diffed.gg, satraj.inc live links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const hrefs = allLinks.map(el => el.getAttribute('href'))
    expect(hrefs).toContain('https://indiecator.com')
    expect(hrefs).toContain('https://diffed.gg')
    expect(hrefs).toContain('https://satraj.inc')
  })

  it('renders the nav logo', () => {
    render(<Home />)
    const matches = screen.getAllByText('Uzair Saleem')
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('has GitHub, LinkedIn, and email links', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link')
    const hrefs = allLinks.map(el => el.getAttribute('href'))
    expect(hrefs).toContain('https://github.com/developeruzairsaleem')
    expect(hrefs).toContain('https://www.linkedin.com/in/uzair-saleem-5a399825a/')
    expect(hrefs).toContain('mailto:uzairsaleemdev@gmail.com')
  })

  it('has 3 View Case Study buttons', () => {
    render(<Home />)
    const caseStudyLinks = screen.getAllByText(/View Case Study/i)
    expect(caseStudyLinks.length).toBe(3)
  })
})
