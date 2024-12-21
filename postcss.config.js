import { default as tailwindcss } from "tailwindcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

export default {
    plugins: [
        autoprefixer,
        tailwindcss,
        cssnano({ preset: "default", }),
    ]
};
