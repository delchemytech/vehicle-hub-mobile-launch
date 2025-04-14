// src/lib/ga.ts
export const initGA = () => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId || typeof window === 'undefined' || (window as any).gtag) return;
  
    // Load GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  
    // Init config
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${gaId}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(inlineScript);
  };
  
  export const trackPageView = (url: string) => {
    const gaId = import.meta.env.VITE_GA_ID;
    if ((window as any).gtag && gaId) {
      (window as any).gtag("config", gaId, {
        page_path: url,
      });
    }
  };
  