import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Mock framer-motion and strip animation props before passing to DOM
jest.mock('framer-motion', () => {
  const strip = (props: Record<string, unknown>) => {
    const cleanProps = { ...props }

    delete cleanProps.initial
    delete cleanProps.animate
    delete cleanProps.variants
    delete cleanProps.whileInView
    delete cleanProps.viewport
    delete cleanProps.transition

    return cleanProps
  }

  return {
    motion: {
      div: (props: Record<string, unknown>) => {
        const p = strip(props)
        return React.createElement('div', p)
      },
      h1: (props: Record<string, unknown>) => {
        const p = strip(props)
        return React.createElement('h1', p)
      },
      h2: (props: Record<string, unknown>) => {
        const p = strip(props)
        return React.createElement('h2', p)
      },
      p: (props: Record<string, unknown>) => {
        const p = strip(props)
        return React.createElement('p', p)
      },
    },
  }
})

import Home from '../app/page'

describe('Portfolio Homepage', () => {
  it('renders the updated hero headline', () => {
    render(<Home />)
    expect(screen.getByText(/I build SaaS products/i)).toBeInTheDocument()
    expect(screen.getByText(/AI workflows, and real-time systems/i)).toBeInTheDocument()
  })

  it('shows the updated role badge', () => {
    render(<Home />)
    expect(screen.getByText(/Full-Stack & AI Engineer/i)).toBeInTheDocument()
  })

  it('renders selected projects from the resume', () => {
    render(<Home />)
    expect(screen.getByText('Chatalize')).toBeInTheDocument()
    expect(screen.getByText('Thumbffice')).toBeInTheDocument()
    expect(screen.getByText('BogoExpress')).toBeInTheDocument()
  })

  it('renders the updated stats bar', () => {
    render(<Home />)
    expect(screen.getByText('Years Building Products')).toBeInTheDocument()
    expect(screen.getByText('Resume Projects Highlighted')).toBeInTheDocument()
    expect(screen.getByText('API Performance Improvement')).toBeInTheDocument()
    expect(screen.getByText('Cloud and DevOps Experience')).toBeInTheDocument()
  })

  it('has the updated contact links', () => {
    render(<Home />)
    const emailLink = screen.getByRole('link', { name: /itsoxama@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:itsoxama@gmail.com')

    const phoneLink = screen.getByRole('link', { name: /\+31 50582855/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:+3150582855')
  })

  it('renders the updated nav name', () => {
    render(<Home />)
    expect(screen.getByText('Usama Saleem')).toBeInTheDocument()
  })

  it('renders the experience section content', () => {
    render(<Home />)
    expect(screen.getByText('Chatalize Technologies')).toBeInTheDocument()
    expect(screen.getByText('Routox Solutions')).toBeInTheDocument()
    expect(screen.getByText('CityForce LLC')).toBeInTheDocument()
  })
})
