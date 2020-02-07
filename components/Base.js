import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography
} from "styled-system";

const Box = styled("div", { shouldForwardProp })(
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography
);

export default Box;
