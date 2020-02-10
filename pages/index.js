import React from "react";
import Head from "next/head";
import Link from "next/link";
import Styled from "../components/Styled";
import Grid from "../components/Grid";
import Icon from "../components/Icon";
import { Svg } from "../components/Image";
import blog from "@fortawesome/fontawesome-free/svgs/solid/blog.svg?include";
import twitter from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg?include";
import github from "@fortawesome/fontawesome-free/svgs/brands/github.svg?include";
import dot from "../images/dot.svg";
import drawing from "../images/drawing.svg?include";

//function IconLink({ href, icon }) {
//  return (
//    <Styled as="a" display="inline-block" href={href}>
//      <Svg mr="2em" width="2em" xml={icon} />
//    </Styled>
//  );
//}
//
//IconLink.propTypes = {
//  href: PropTypes.string,
//  icon: PropTypes.string
//};

function IndexPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Zaim Bakar</title>
      </Head>
      <Grid
        alignItems="center"
        as="section"
        backgroundImage={`url("${dot}")`}
        gridTemplateColumns={["100%", "repeat(2, 50%)"]}
        gridTemplateRows={["repeat(2, 50%)", "100%"]}
        justifyItems="center"
        minHeight="100vh"
      >
        <Grid.Item textAlign={["center", "left"]}>
          <Styled as="h1" fontFamily="sans" fontSize={[6, 7, 8]} mb={0}>
            Zaim Bakar
          </Styled>
          <Styled
            as="h2"
            fontFamily="monospace"
            fontSize={[4, 5, 6]}
            fontWeight="normal"
            mt={0}
          >
            Freelancer
            <br />
            Programmer
            <br />
            Designer
          </Styled>
          <Icon as="a" href="https://twitter.com/zzzaim" icon={twitter} />
          <Icon as="a" href="https://github.com/zzzaim" icon={github} />
          <Link href="/blog">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a style={{ display: "inline-block" }}>
              <Svg width="2em" xml={blog} />
            </a>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </Link>
        </Grid.Item>
        <Grid.Item>
          <Svg width={["300px", "450px", "500px"]} xml={drawing} />
        </Grid.Item>
      </Grid>
    </React.Fragment>
  );
}

export default IndexPage;
