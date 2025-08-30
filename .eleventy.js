module.exports = async function(eleventyConfig) {
  // Dynamically import Eleventy HtmlBase plugin to avoid ESM/CommonJS interop errors
  const { EleventyHtmlBasePlugin } = await import('@11ty/eleventy');

  // Needed for GitHub Pages because it runs in a subpath
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Add passthrough copy for all files from src/assets
  eleventyConfig.addPassthroughCopy("src/assets");

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
