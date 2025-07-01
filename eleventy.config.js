import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import eleventyPug from "@11ty/eleventy-plugin-pug";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPug);

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
    templateFormats: ["pug", "md", "html"],
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
