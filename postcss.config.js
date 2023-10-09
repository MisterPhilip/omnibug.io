const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        autoprefixer,
        tailwindcss,
        cssnano({ preset: "default", }),
    ]
};
