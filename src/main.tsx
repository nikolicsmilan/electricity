import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GeneralContextProvider } from './context/GeneralContext.tsx'; // Helyes import útvonal

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralContextProvider> {/* Becsomagoljuk az App-ot a GeneralContextProvider-be */}
      <App />
    </GeneralContextProvider>
  </StrictMode>
);

