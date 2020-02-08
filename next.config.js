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
        }
      }
    ],
    withMdx({
      options: {
        remarkPlugins: [remarkAttr]
      }
    })
  ],
  { pageExtensions: ["js", "mdx"] }
);
