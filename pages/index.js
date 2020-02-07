import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Box from "../components/Box";
import Grid from "../components/Grid";
import drawing from "../images/drawing.svg?include";
import twitter from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg";
import github from "@fortawesome/fontawesome-free/svgs/brands/github.svg";
import medium from "@fortawesome/fontawesome-free/svgs/brands/medium.svg";

const Container = styled(Box)`
  svg,
  img {
    width: 100%;
    height: auto;
  }
`;

const Outlink = styled(Container)({
  display: "inline-block",
  maxWidth: "32px",
  margin: "1.5em 1.5em 0 0"
});

function Svg({ svg, ...otherProps }) {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: svg }}
      {...otherProps}
    ></Container>
  );
}

Svg.propTypes = {
  svg: PropTypes.string
};

function IndexPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Zaim Bakar</title>
      </Head>
      <Grid
        alignItems="center"
        gridTemplateColumns={["100%", "repeat(2, 50%)"]}
        gridTemplateRows={["repeat(2, 50%)", "100%"]}
        justifyItems="center"
        minHeight="100vh"
      >
        <Grid.Item>
          <Box as="h1" fontFamily="main" fontSize={[6, 7, 8]} mb={0}>
            Zaim Bakar,
          </Box>
          <Box
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
            Designer.
          </Box>
          <Outlink as="a" href="https://twitter.com/zzzaim">
            <img alt="Twitter" src={twitter} />
          </Outlink>
          <Outlink as="a" href="https://github.com/zzzaim">
            <img alt="GitHub" src={github} />
          </Outlink>
          <Outlink as="a" href="https://medium.com/@zzzaim">
            <img alt="Medium" src={medium} />
          </Outlink>
        </Grid.Item>
        <Grid.Item>
          <Svg maxWidth={["300px", "450px", "500px"]} svg={drawing} />
        </Grid.Item>
      </Grid>
    </React.Fragment>
  );
}

export default IndexPage;
