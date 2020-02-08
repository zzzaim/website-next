import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/react";
import Base from "../components/Base";
import theme from "../settings/theme";
import * as gtag from "../settings/gtag";

import "sanitize.css/sanitize.css";

function MDXWrapper({ children, meta }) {
  return (
    <Base px={[3, 6, 7]}>
      <article title={meta.title}>
        <header>
          <h1>{meta.title}</h1>
        </header>
        {children}
      </article>
    </Base>
  );
}

MDXWrapper.propTypes = {
  children: PropTypes.element,
  meta: PropTypes.object
};

function SiteApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={{ wrapper: MDXWrapper }}>
        <Component {...pageProps} />
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
