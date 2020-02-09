import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Shevy from "shevyjs";
import Styled from "../components/Styled";
import theme from "../settings/theme";

export const shevy = new Shevy(theme.typography);

const wrapper = ({ children, meta }) => (
  <Styled as="section" maxWidth={["none", "48em", "52em"]} mx="auto" p={4}>
    <article>
      <header>
        <Styled as="h1" fontFamily="heading" mt={0} {...shevy.h1}>
          {meta.title}
        </Styled>
      </header>
      {children}
    </article>
  </Styled>
);

wrapper.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object
};

const p = styled.p(shevy.content);

const li = styled.li(shevy.content);

const aside = styled.aside(shevy.content, { fontStyle: "italic" });

const blockquote = props => (
  <Styled as="blockquote" borderLeft="block" m="0" pl={3} {...props} />
);

const components = {
  p,
  li,
  aside,
  blockquote,
  wrapper
};

// Headings within articles start with H2 size

["2", "3", "4", "5", "6", "6"].forEach((h, n) => {
  const htag = "h" + n;
  const stag = "h" + h;
  /* eslint-disable react/display-name */
  components[htag] = props => (
    <Styled as={htag} fontFamily="heading" {...shevy[stag]} {...props} />
  );
  components[htag].displayName = htag;
  /* eslint-enable react/display-name */
});

export default components;
