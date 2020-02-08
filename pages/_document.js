import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "../components/GoogleFonts";
import GoogleAnalytics from "../components/GoogleAnalytics";
import theme from "../settings/theme";
import { GA_TRACKING_ID } from "../settings/gtag";

class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleFonts fonts={theme.fontsFromGoogle} />
          <GoogleAnalytics id={GA_TRACKING_ID} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SiteDocument;
