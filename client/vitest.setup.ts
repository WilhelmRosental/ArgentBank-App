import '@testing-library/jest-dom'
import { expect, beforeAll, afterAll, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { server } from './mocks/server'

// Étend Vitest avec les matchers de jest-dom
expect.extend(matchers)

// Configure MSW
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())