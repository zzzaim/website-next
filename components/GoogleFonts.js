import React from "react";
import PropTypes from "prop-types";

function toFontString(font) {
  const name = encodeURIComponent(font.name);
  const styles = font.styles;

  if (styles) {
    return `${name}:${styles.join(",")}`;
  } else {
    return name;
  }
}

function GoogleFonts({ fonts }) {
  const fontStr = Object.keys(fonts)
    .map(k => toFontString(fonts[k]))
    .join("|");

  return (
    <link
      href={`https://fonts.googleapis.com/css?family=${fontStr}&display=swap`}
      rel="stylesheet"
      type="text/css"
    />
  );
}

GoogleFonts.propTypes = {
  fonts: PropTypes.object
};

export default GoogleFonts;
