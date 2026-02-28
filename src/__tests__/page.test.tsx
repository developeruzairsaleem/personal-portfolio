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
    expect(screen.getByText(/I build SaaS products/i)).toBeInTheDocument()
  })

  it('shows the available for projects badge', () => {
    render(<Home />)
    expect(screen.getByText(/Available for Projects/i)).toBeInTheDocument()
  })

  it('renders all 3 projects', () => {
    render(<Home />)
    expect(screen.getByText('Indiecator')).toBeInTheDocument()
    expect(screen.getByText('Diffed.gg')).toBeInTheDocument()
    expect(screen.getByText('Scraping API Dashboard')).toBeInTheDocument()
  })

  it('renders the stats bar', () => {
    render(<Home />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Products Shipped')).toBeInTheDocument()
    expect(screen.getByText('Faster with AI Dev')).toBeInTheDocument()
    expect(screen.getByText('Global Remote')).toBeInTheDocument()
  })

  it('has a contact email link', () => {
    render(<Home />)
    const emailLink = screen.getByRole('link', { name: /uzairsaleemdev@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:uzairsaleemdev@gmail.com')
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
})
