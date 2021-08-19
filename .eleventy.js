module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/et-book");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/tufte.css");
  eleventyConfig.addPassthroughCopy("src/tufte.min.css");

  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({ 
          globals: ['filters']
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
