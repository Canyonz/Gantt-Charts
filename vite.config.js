import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Gantt-Charts/",
	plugins: [
		svgr({
			include: "**/*.svg",
			svgrOptions: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: "convertColors",
							params: {
								currentColor: true,
							},
						},
					],
				},
			},
		}),
		react(),
	],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	define: {
		__API__: JSON.stringify("http://26.146.72.207:8000/"),
	},
});
