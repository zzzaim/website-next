import React from "react";
import styled from "@emotion/styled";
import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "../components/GoogleFonts";
import GoogleAnalytics from "../components/GoogleAnalytics";
import dot from "../images/dot.svg";
import theme from "../settings/theme";
import { GA_TRACKING_ID } from "../settings/gtag";

const Body = styled.body`
  font-family: "${theme.fonts.main}", sans-serif;
  background-color: ${theme.colors.bg};
  background-image: url("${dot}");
  background-repeat: repeat;
  background-blend-mode: luminosity;
`;

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
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default SiteDocument;
