import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import styled from "@emotion/styled";
import { themeGet } from "@styled-system/theme-get";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/react";
import Styled from "../components/Styled";
import components from "../components/mdx";
import theme from "../settings/theme";
import * as gtag from "../settings/gtag";
import dot from "../images/dot.svg";

import "sanitize.css/sanitize.css";

const Main = styled(Styled)`
  font-size: ${themeGet("typography.baseFontSize", "18px")};

  a,
  a:visited {
    color: ${themeGet("colors.link", "black")};
  }
`;

function SiteApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Main
          as="main"
          backgroundImage={`url("${dot}")`}
          bg="bg"
          color="text"
          fontFamily="sans"
          minHeight="100vh"
        >
          <Component {...pageProps} />
        </Main>
      </MDXProvider>
    </ThemeProvider>
  );
}

SiteApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default SiteApp;
