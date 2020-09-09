module.exports = {
    theme: {},
    variants: {},
    plugins: [ ],
    purge: [
        "./dist/**/*.html",
        "./dist/assets/scripts/*.js",
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
}
