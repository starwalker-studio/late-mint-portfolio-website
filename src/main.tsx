import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { LateMintApp } from './main/app/LateMintApp';
import './scss/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LateMintApp />
    </BrowserRouter>
  </StrictMode>,
)
