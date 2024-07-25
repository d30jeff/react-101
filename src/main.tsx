import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "@fontsource/inter";
import { queryClient } from '@/providers/query.provider.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import '@/styles/custom-style.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
