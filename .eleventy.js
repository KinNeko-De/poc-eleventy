module.exports = function(eleventyConfig) {
  // Add passthrough copy for CSS files and favicon
  eleventyConfig.addPassthroughCopy("src/tailwind.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.date - a.date);
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
