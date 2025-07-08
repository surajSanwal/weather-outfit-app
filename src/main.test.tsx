import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('./App.tsx', () => ({
  __esModule: true,
  default: () => <div>AppComponent</div>
}))
vi.mock('./app/store.ts', () => ({
  store: {},
}))

// Mock createRoot
vi.mock('react-dom/client', () => {
  return {
    createRoot: vi.fn(() => ({
      render: vi.fn()
    }))
  }
})

describe('main', () => {
  it('renders without crashing', async () => {
    document.body.innerHTML = '<div id="root"></div>'
    await import('./main')
    // If no error, test passes
  })
})
