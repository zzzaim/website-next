import React from "react";
import Head from "next/head";
import Box from "../components/Box";
import Grid from "../components/Grid";

function IndexPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Zaim Bakar</title>
      </Head>
      <Grid
        alignItems="center"
        gridTemplateColumns="repeat(2, 50%)"
        gridTemplateRows="100%"
        justifyItems="center"
        minHeight="100vh"
      >
        <Grid.Item>
          <Box as="h1" fontFamily="main" fontSize={7} mb={0}>
            Zaim Bakar,
          </Box>
          <Box
            as="h2"
            fontFamily="monospace"
            fontSize={6}
            fontWeight="normal"
            mt={0}
          >
            Freelancer
            <br />
            Programmer
            <br />
            Designer.
          </Box>
        </Grid.Item>
        <Grid.Item>pic</Grid.Item>
      </Grid>
    </React.Fragment>
  );
}

export default IndexPage;
