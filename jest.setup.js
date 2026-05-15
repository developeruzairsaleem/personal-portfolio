import '@testing-library/jest-dom'

// jsdom doesn't ship IntersectionObserver — page.tsx uses it for scroll reveal
// + stat counters. Provide a no-op so render() doesn't throw under test.
class MockIntersectionObserver {
  constructor(_cb, _opts) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return [] }
}
global.IntersectionObserver = global.IntersectionObserver || MockIntersectionObserver

// requestAnimationFrame fallback
if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0)
  global.cancelAnimationFrame = (id) => clearTimeout(id)
}

// Surface the real error inside AggregateError so we can see what's happening.
const origConsoleError = console.error
console.error = (...args) => {
  origConsoleError(...args)
  args.forEach((a) => {
    if (a && a.errors && Array.isArray(a.errors)) {
      a.errors.forEach((err, i) => origConsoleError(`AggregateError[${i}]:`, err))
    }
  })
}
