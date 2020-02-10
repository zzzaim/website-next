import React from "react";
import PropTypes from "prop-types";
import Styled from "./Styled";
import { Svg } from "./Image";

function Icon({ icon, style, ...props }) {
  style = style || {};
  style.mr = style.mr || "2em";
  style.width = style.width || "2em";

  return (
    <Styled display="inline-block" {...props}>
      <Svg xml={icon} {...style} />
    </Styled>
  );
}

Icon.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
