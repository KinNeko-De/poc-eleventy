// Eleventy config snippet: add filters to include manual service docs in your API pages
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Check if a file exists
  eleventyConfig.addFilter('exists', function(filePath) {
    return fs.existsSync(filePath);
  });

  // Read file content as string
  eleventyConfig.addFilter('readFileSync', function(filePath) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    }
    return '';
  });

  // Render markdown to HTML
  const md = new markdownIt({ html: true, linkify: true, typographer: true });
  eleventyConfig.addFilter('markdown', function(content) {
    return md.render(content || '');
  });
};
