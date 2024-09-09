import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Configure MSW avec les handlers que tu définis pour simuler des API
export const server = setupServer(...handlers)