import React from "react";
import PropTypes from "prop-types";

function GoogleAnalytics({ id }) {
  return (
    <React.Fragment>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
      `
        }}
      />
    </React.Fragment>
  );
}

GoogleAnalytics.propTypes = {
  id: PropTypes.string
};

export default GoogleAnalytics;
