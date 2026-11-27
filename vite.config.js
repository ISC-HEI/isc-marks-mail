import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Version shown in the footer: short hash and date of the built commit.
function git(args, fallback) {
  try {
    return execSync(`git ${args}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || fallback
  } catch {
    return fallback
  }
}

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    __APP_VERSION__: JSON.stringify(git('rev-parse --short HEAD', 'dev')),
    __APP_DATE__: JSON.stringify(git('log -1 --format=%cd --date=format:%d.%m.%Y', '')),
  },
})
