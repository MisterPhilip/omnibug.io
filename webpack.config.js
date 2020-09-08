const path = require("path");

module.exports = {
    entry: {
        /*app: "./src/assets/scripts/app.js",*/
        homepage: "./src/assets/scripts/homepage.js",
    },
    output: {
        path: path.resolve(__dirname, "dist/assets/scripts"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}
