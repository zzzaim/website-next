import React from "react";
import Styled from "./Styled";

function Container(props) {
  return (
    <Styled
      as="section"
      maxWidth={["none", "48em", "52em"]}
      mx="auto"
      p={3}
      {...props}
    />
  );
}

export default Container;
