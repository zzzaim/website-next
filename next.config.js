const withPlugins = require("next-compose-plugins");
const withMdx = require("@next/mdx");
const optimizedImages = require("next-optimized-images");

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
    [withMdx(), {}]
  ],
  { pageExtensions: ["js", "mdx"] }
);
