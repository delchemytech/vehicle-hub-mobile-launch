// src/utils/hotjar.ts
export const initHotjar = () => {
    const hjid = import.meta.env.VITE_HOTJAR_ID;
  
    // Ensure we have a valid ID and are in a browser context
    if (!hjid || typeof window === 'undefined' || (window as any).hj) return;
  
    (function(h: any, o: any, t: string, j: string, a: any, r: HTMLScriptElement) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
      h._hjSettings = { hjid: Number(hjid), hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = true;
      r.src = `${t}${h._hjSettings.hjid}${j}${h._hjSettings.hjsv}`;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=', null as any, null as any);
  };
  