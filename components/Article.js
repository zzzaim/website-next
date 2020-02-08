import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Shevy from "shevyjs";
import Styled, { all } from "../components/Styled";
import theme from "../settings/theme";

export const shevy = new Shevy(theme.typography);

export default function Article({ children, meta }) {
  return (
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
}

Article.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object
};

export const components = {
  p: styled.p(all, shevy.content),
  li: styled.li(all, shevy.content),
  aside: styled.aside(all, shevy.content, { fontStyle: "italic" }),
  blockquote(props) {
    return (
      <Styled as="blockquote" borderLeft="block" m="0" pl={3} {...props} />
    );
  },
  wrapper: Article
};

// Headings within articles start with H2 size

["2", "3", "4", "5", "6", "6"].forEach((h, n) => {
  const htag = "h" + n;
  const stag = "h" + h;
  /* eslint-disable react/display-name */
  components[htag] = props => (
    <Styled as={htag} fontFamily="heading" {...shevy[stag]} {...props} />
  );
  /* eslint-enable react/display-name */
});
