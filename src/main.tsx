import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'

import './styles/globals.css'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { env } from './lib/env.ts'

const convex = new ConvexReactClient(env.VITE_CONVEX_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
)
