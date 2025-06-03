const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const { ViteImageOptimizer } = require("vite-plugin-image-optimizer");

module.exports = function (eleventyConfig) {

  // Copy over Tufte fonts, and styles
  eleventyConfig.addPassthroughCopy({ "src/assets/et-book": "css/et-book" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css/": "css" });

  // Copy over images
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "img" });

  // Make global filters accessible to Pug templates
  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({
    globals: ["filters"],
  });

  // Instantiate the Vite plugin.
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [
        ViteImageOptimizer({
          jpg: {
            quality: 80,
          },
          png: {
            quality: 25,
            dither: 0.5,
          },
        }),
      ],
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
