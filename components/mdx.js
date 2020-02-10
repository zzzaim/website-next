import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Shevy from "shevyjs";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Head from "next/head";
import { Img } from "../components/Image";
import Container from "../components/Container";
import Styled from "../components/Styled";
import Flex from "../components/Flex";
import theme from "../settings/theme";

export const shevy = new Shevy(theme.typography);

const wrapper = ({ children, meta }) => (
  <Container pt={4}>
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.title} key="og:title" property="og:title" />
      <meta content="article" key="og:type" property="og:type" />
      <meta content="" key="og:url" property="og:url" />
      {((meta.image && meta.image.images) || []).map((img, n) => (
        <React.Fragment key={n}>
          <meta
            content={img.path}
            key={`og:image:${n}`}
            property="og:image"
          />
          <meta
            content={img.width}
            key={`og:image:width:${n}`}
            property="og:image:width"
          />
          <meta
            content={img.height}
            key={`og:image:height:${n}`}
            property="og:image:height"
          />
        </React.Fragment>
      ))}
    </Head>
    <article>
      <Styled as="header" mb={4}>
        <Styled as="h1" fontFamily="heading" mt={0} {...shevy.h1}>
          {meta.title}
        </Styled>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Styled>
            {"by "}
            <a href="/" rel="author">
              Zaim Bakar
            </a>
          </Styled>
          <Styled>
            <time dateTime={meta.publishDate}>
              {format(parseISO(meta.publishDate), "d MMM yyyy")}
            </time>
          </Styled>
        </Flex>
      </Styled>
      <Styled>{children}</Styled>
    </article>
  </Container>
);

wrapper.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object
};

const p = styled.p(shevy.content);

const li = styled.li(shevy.content, { marginBottom: shevy.baseSpacing(0.5) });

const img = ({ src, srcSet, alt }) => (
  <Img alt={alt} mb={shevy.baseSpacing(1)} src={src} srcSet={srcSet} />
);

img.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string
};

const aside = styled.aside(shevy.content, { fontStyle: "italic" });

const blockquote = props => (
  <Styled as="blockquote" borderLeft="block" m="0" pl={3} {...props} />
);

const components = {
  p,
  li,
  img,
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
