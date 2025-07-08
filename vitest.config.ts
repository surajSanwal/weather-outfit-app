import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/vite-env.d.ts',
        '**/*.d.ts',
        '**/index.ts',
        '**/index.tsx',
        '../*.js',
        '../*.ts',
        '../*.cjs',
        '../*.json',
        '../*.config.*',
        '../*.eslintrc.*',
        '../tailwind.config.js',
        '../vite.config.ts',
        '../vitest.config.ts'
      ]
    }
  }
})
