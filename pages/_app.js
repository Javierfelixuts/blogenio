import "@/styles/globals.css";
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return(
  
  <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6M5HHJ97V9`}
      />
      <Script
        id="ga4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6M5HHJ97V9', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
          <Component {...pageProps} />
  </>
  );
}
