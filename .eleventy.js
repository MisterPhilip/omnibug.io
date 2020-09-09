const navPlugin = require("@11ty/eleventy-navigation");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = (eleventyConfig) => {
    let markdown = require("markdown-it")({
        html: true,
        linkify: true
    });

    markdown.use(require("markdown-it-attrs"));
    eleventyConfig.setLibrary("md", markdown);

    // Ensure all webpack-compiled (mix) assets are copied over
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");

    // Add a watch to those webpack-compiled (mix) assets so they can be copied over when updated
    eleventyConfig.addWatchTarget("src/assets/css");
    eleventyConfig.addWatchTarget("src/assets/images");

    eleventyConfig.addPlugin(navPlugin);

    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://omnibug.io",
        },
    });

    return {
        // templateFormats: ["css"],
        // markdownTemplateEngine: 'njk',
        // htmlTemplateEngine: "md",
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
        }
    }
}
