import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  // Needed for GitHub Pages because it runs in a subpath
  eleventyConfig.addPlugin(HtmlBasePlugin);
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
