/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Collect styled-components styles on the server
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        // Merge Next's styles with styled-components' styles
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 🔹 removed this.props.styleTags – styles are injected via `styles` above */}

          {/* ✅ Keep / edit these meta tags to your info instead of the original author's */}
          <meta name="author" content="Manaswi Yadamreddy" />
          <meta
            name="keywords"
            content="Manaswi Yadamreddy, portfolio, AI, machine learning, data science"
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Portfolio of Manaswi Yadamreddy."
          />
          <meta
            property="og:description"
            content="Portfolio of Manaswi Yadamreddy."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          {/* ⚠️ Removed hard-coded `next-head-count` meta */}

          {/* Favicon + app icons */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/ms-icon-144x144.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />

          {/* Fonts + basic global CSS */}
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://i.ibb.co/" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                @font-face{
                  font-family:'Blorado';
                  src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                  font-weight:bold;
                  font-display:swap;
                  font-style:normal;
                }
                @font-face{
                  font-family:'Blorado';
                  src:url("/fonts/NeurialGrotesk-Regular.otf");
                  font-weight:normal;
                  font-display:swap;
                  font-style:normal;
                }
                @font-face{
                  font-family:'Blorado';
                  src:url("/fonts/NeurialGrotesk-Medium.otf");
                  font-weight:500;
                  font-display:swap;
                  font-style:normal;
                }
                @font-face{
                  font-family:'Blorado';
                  src:url("/fonts/NeurialGrotesk-Bold.otf");
                  font-weight:600;
                  font-display:swap;
                  font-style:normal;
                }
              `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
