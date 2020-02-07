import React from "react";
import styled from "@emotion/styled";
import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "../components/GoogleFonts";
import theme from "../settings/theme";

const Body = styled.body`
  font-family: "${theme.fonts.main}", sans-serif;
  background-color: ${theme.colors.bg};
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
