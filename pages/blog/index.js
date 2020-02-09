import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Head from "next/head";
import Link from "next/link";
import Container from "../../components/Container";
import Styled from "../../components/Styled";
import Flex from "../../components/Flex";
import { Img } from "../../components/Image";
import { meta, posts } from "./index.json";

const components = posts.map(slug =>
  dynamic(() =>
    import(`./${slug}/index.mdx`).then(mod => props => (
      <PostLink slug={slug} {...mod.meta} {...props} />
    ))
  )
);

function PostLink({ author, publishDate, slug, title, image, ...props }) {
  const date = format(parseISO(publishDate), "d MMM yyyy");

  author = author || meta.author;

  return (
    <Flex alignItems="center" bg="white" mb={4} {...props}>
      <Styled width="7em">
        {image ? <Img src={image.src} srcSet={image.srcSet} /> : null}
      </Styled>
      <Styled p={3}>
        <strong>
          <Link href={`/blog/${slug}`}>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a>{title}</a>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </Link>
        </strong>
        <br />
        <small>
          {" by " + author}
          {" on "}
          <time dateTime={publishDate}>{date}</time>
        </small>
      </Styled>
    </Flex>
  );
}

PostLink.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object
};

function BlogIndex() {
  return (
    <Container>
      <Head>
        <title>Zaim Bakar Blog</title>
      </Head>
      <header>
        <Styled as="h1" fontFamily="heading" mt={0} p={3}>
          Zaim Bakar Blog
        </Styled>
      </header>
      <div>
        {components.map((Comp, i) => (
          <Comp key={i} />
        ))}
      </div>
    </Container>
  );
}

export default BlogIndex;
