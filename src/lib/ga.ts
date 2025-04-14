export const initGA = () => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId || typeof window === "undefined" || document.getElementById("gtag-script")) return;
  
    const script = document.createElement("script");
    script.id = "gtag-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(inlineScript);
  };
  
  export const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", import.meta.env.VITE_GA_ID, {
        page_path: url,
      });
    }
  };
  