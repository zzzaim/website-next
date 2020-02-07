import styled from "@emotion/styled";
import Box from "./Box";

const Grid = styled(Box)({
  display: "grid"
});

Grid.Item = Box;

export default Grid;
