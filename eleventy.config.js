const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const { ViteImageOptimizer } = require("vite-plugin-image-optimizer");

module.exports = function (eleventyConfig) {
  // Copy over Tufte fonts, and styles
  eleventyConfig.addPassthroughCopy("src/et-book");
  eleventyConfig.addPassthroughCopy("src/tufte.css");

  // Copy over images
  eleventyConfig.addPassthroughCopy("src/img");

  // Make global filters accessible to Pug templates
  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({
    globals: ["filters"],
  });

  // Instanciate the Vite plugin
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [
        ViteImageOptimizer({
          /* pass your config */
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
