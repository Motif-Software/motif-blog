const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');
const siteSettings = require('./src/globals/site.json');

let markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}).use(markdownItFootnote);

module.exports = (config) => {
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));

  config.addFilter('dateDisplay', require('./filters/date-display.js'));

  config.addPassthroughCopy({ public: './' });

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  config.setDataDeepMerge(true);

  config.addCollection('pagesWithoutDrafts', (collection) =>
    [...collection.getFilteredByGlob('src/pages/*.md')].filter(
      (page) => !page.data.draft
    )
  );
  config.addCollection('postsWithoutDrafts', (collection) =>
    [...collection.getFilteredByGlob('src/posts/*.md')].filter(
      (post) => !post.data.draft
    )
  );

  config.setLibrary("md", markdownLibrary);

  return {
    pathPrefix: siteSettings.baseUrl,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      data: 'globals',
    },
  };
};
