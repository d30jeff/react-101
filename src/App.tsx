import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/AppRoutes';
import { Suspense } from 'react';

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  )
}
