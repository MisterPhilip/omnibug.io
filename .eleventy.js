const navPlugin = require("@11ty/eleventy-navigation");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = (eleventyConfig) => {
    const env = process.env.NODE_ENV || "development",
          baseURL = (env === "development" ? "http://localhost:8080/" : "https://omnibug.io/");
    eleventyConfig.addGlobalData("helpers.environment", env);
    eleventyConfig.addGlobalData("helpers.currentYear", () => (new Date()).getFullYear());
    eleventyConfig.addGlobalData("helpers.baseURL", baseURL);

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
    eleventyConfig.addPlugin(inclusiveLangPlugin);

    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://omnibug.io",
        },
    });

    eleventyConfig.addFilter('toAbsoluteUrl', (url) => {
        return new URL(url, baseURL).href;
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
