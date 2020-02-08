import React from "react";
import Head from "next/head";
import Box from "../components/Box";
import Grid from "../components/Grid";
import { Svg } from "../components/Image";
import { TwitterLink, GitHubLink, MediumLink } from "../components/SocialLink";
import drawing from "../images/drawing.svg?include";

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
        <Grid.Item textAlign={["center", "left"]}>
          <Box as="h1" fontFamily="main" fontSize={[6, 7, 8]} mb={0}>
            Zaim Bakar
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
            Designer
          </Box>
          <TwitterLink m={3} name="zzzaim" />
          <GitHubLink m={3} name="zzzaim" />
          <MediumLink m={3} name="zzzaim" />
        </Grid.Item>
        <Grid.Item>
          <Svg maxWidth={["300px", "450px", "500px"]} xml={drawing} />
        </Grid.Item>
      </Grid>
    </React.Fragment>
  );
}

export default IndexPage;
