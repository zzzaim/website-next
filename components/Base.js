import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, layout, typography, color, flexbox, grid } from "styled-system";

const Box = styled("div", { shouldForwardProp })(
  color,
  flexbox,
  grid,
  layout,
  space,
  typography
);

export default Box;
