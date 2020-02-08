import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Base from "./Base";

export const Container = styled(Base)`
  display: ${props => (props.inline ? "inline-" : "") + "block"};
  position: relative;

  svg,
  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const Img = ({ src, alt, ...containerProps }) => (
  <Container {...containerProps}>
    <img alt={alt} src={src} />
  </Container>
);

Img.propTypes = { src: PropTypes.string, alt: PropTypes.string };

export const Svg = ({ xml, ...containerProps }) => (
  <Container dangerouslySetInnerHTML={{ __html: xml }} {...containerProps} />
);

Svg.propTypes = { xml: PropTypes.string };
