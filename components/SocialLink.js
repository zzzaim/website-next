import React from "react";
import PropTypes from "prop-types";
import { Svg } from "../components/Image";
import twitter from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg?include";
import github from "@fortawesome/fontawesome-free/svgs/brands/github.svg?include";
import medium from "@fortawesome/fontawesome-free/svgs/solid/blog.svg?include";

export default function SocialLink({ icon, href, ...otherProps }) {
  return (
    <Svg as="a" href={href} inline width="2em" xml={icon} {...otherProps} />
  );
}

SocialLink.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string
};

export const TwitterLink = ({ name, ...props }) => (
  <SocialLink href={`https://twitter.com/${name}`} icon={twitter} {...props} />
);

TwitterLink.propTypes = { name: PropTypes.string };

export const GitHubLink = ({ name, ...props }) => (
  <SocialLink href={`https://github.com/${name}`} icon={github} {...props} />
);

GitHubLink.propTypes = { name: PropTypes.string };

export const MediumLink = ({ name, ...props }) => (
  <SocialLink href={`https://medium.com/@${name}`} icon={medium} {...props} />
);

MediumLink.propTypes = { name: PropTypes.string };
