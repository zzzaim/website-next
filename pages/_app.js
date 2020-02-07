import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";
import theme from "../settings/theme";

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

export default SiteApp;
