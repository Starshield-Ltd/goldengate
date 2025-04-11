import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use a more optimized rendering approach
const rootElement = document.getElementById("root");

// Ensure the DOM is ready before rendering
if (rootElement) {
  const root = createRoot(rootElement);

  // Use requestIdleCallback for non-critical rendering if available
  if ('requestIdleCallback' in window) {
    // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
    window.requestIdleCallback(() => {
      root.render(<App />);
    });
  } else {
    // Fallback to setTimeout for browsers that don't support requestIdleCallback
    setTimeout(() => {
      root.render(<App />);
    }, 0);
  }
}
