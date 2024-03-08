import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_PUBLIC_SUPABASE_URL": JSON.stringify(
        env.REACT_PUBLIC_SUPABASE_URL
      ),
      "process.env.REACT_PUBLIC_SUPABASE_API_KEY": JSON.stringify(
        env.REACT_PUBLIC_SUPABASE_API_KEY
      ),
    },
    plugins: [react()],
  };
});
