import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {
  // Needed for GitHub Pages because it runs in a subpath
  eleventyConfig.addPlugin(HtmlBasePlugin);
  // Add passthrough copy for all files from src/assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add passthrough copy for blog images
  eleventyConfig.addPassthroughCopy("src/blog/**/*.{jpg,jpeg,png,gif,webp,svg}");

  // Add custom filter to find posts by slug
  eleventyConfig.addFilter("find", function(collection, property, value) {
    return collection.find(item => {
      const keys = property.split('.');
      let obj = item;
      for (const key of keys) {
        obj = obj[key];
        if (obj === undefined) return false;
      }
      return obj === value;
    });
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/index.md").sort((a, b) => b.date - a.date);
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
