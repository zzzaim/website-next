const withPlugins = require("next-compose-plugins");
const withMdx = require("@next/mdx");
const optimizedImages = require("next-optimized-images");
const remarkAttr = require("remark-attr");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        svgo: {
          plugins: [{ removeViewBox: false }]
        },
        responsive: {
          min: 800,
          max: 1920,
          steps: 4
        }
      }
    ],
    withMdx({
      options: {
        remarkPlugins: [remarkAttr]
      }
    })
  ],
  {
    pageExtensions: ["js", "mdx"]
  }
);
