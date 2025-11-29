import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // We use process.cwd() to ensure we look in the root.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // Use relative path to ensure assets load correctly on any domain/subdomain
    base: './', 
    define: {
      // Priority: 1. .env file (local) 2. System Env (Vercel/Netlify Dashboard)
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY)
    }
  };
});