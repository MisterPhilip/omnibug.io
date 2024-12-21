import path from "path";
// import { fileURLToPath } from 'url';

export default {
    entry: {
        homepage: "./src/assets/scripts/homepage.js",
    },
    output: {
        path: path.resolve("./dist/assets/scripts"),
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
