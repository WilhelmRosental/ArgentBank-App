import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        deps: {
            inline: ['@testing-library/jest-dom'],
        },
        mockReset: true,
        env: {
            NEXT_PUBLIC_BASE_URL: 'http://localhost:3001/api/v1'
        }
    },
})