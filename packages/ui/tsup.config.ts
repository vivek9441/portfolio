import { defineConfig } from "tsup";
import { readFile, writeFile } from "fs/promises";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom"],
    treeshake: true,
    minify: true,
    async onSuccess() {
        // Generate CSS file
        const css = await readFile("src/styles/globals.css", "utf8");
        const result = await postcss([
            tailwindcss(),
            autoprefixer,
        ]).process(css, {
            from: undefined,
        });
        await writeFile("dist/index.css", result.css);
    },
});
