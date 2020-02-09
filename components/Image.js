import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Styled from "./Styled";

export const Container = styled(Styled)`
  display: ${props => (props.inline ? "inline-" : "") + "block"};
  position: relative;

  svg,
  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const Img = ({ src, srcSet, alt, ...containerProps }) => (
  <Container as="figure" m={0} {...containerProps}>
    <img alt={alt} src={src} srcSet={srcSet} />
  </Container>
);

Img.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string
};

export const Svg = ({ xml, ...containerProps }) => (
  <Container
    as="figure"
    dangerouslySetInnerHTML={{ __html: xml }}
    m={0}
    {...containerProps}
  />
);

Svg.propTypes = { xml: PropTypes.string };
