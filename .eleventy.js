import navPlugin from "@11ty/eleventy-navigation";
import inclusiveLangPlugin from "@11ty/eleventy-plugin-inclusive-language";
import { default as markdownLib } from "markdown-it";
import { default as markdownExtras } from "markdown-it-attrs";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


export default (eleventyConfig) => {
    const env = process.env.NODE_ENV || "development",
          baseURL = (env === "development" ? "http://localhost:8080/" : "https://omnibug.io/");
    eleventyConfig.addGlobalData("helpers.environment", env);
    eleventyConfig.addGlobalData("helpers.currentYear", () => (new Date()).getFullYear());
    eleventyConfig.addGlobalData("helpers.baseURL", baseURL);

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        baseHref: baseURL,
        extensions: "html,xml"
    });


    let markdown = markdownLib({
        html: true,
        linkify: true
    });

    markdown.use(markdownExtras);
    eleventyConfig.setLibrary("md", markdown);

    // Ensure all webpack-compiled (mix) assets are copied over
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");

    // Add a watch to those webpack-compiled (mix) assets so they can be copied over when updated
    eleventyConfig.addWatchTarget("src/assets/scss");
    eleventyConfig.addWatchTarget("src/assets/images");

    // Add redirects
    eleventyConfig.addPassthroughCopy("./_redirects");
    eleventyConfig.addPassthroughCopy("./_headers");

    eleventyConfig.addPlugin(navPlugin);
    eleventyConfig.addPlugin(inclusiveLangPlugin);

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
        }
    }
}
