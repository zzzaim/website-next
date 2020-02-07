import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { ThemeProvider } from "emotion-theming";
import theme from "../settings/theme";
import * as gtag from "../settings/gtag";

import "sanitize.css/sanitize.css";

function SiteApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

SiteApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default SiteApp;
