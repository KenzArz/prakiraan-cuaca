import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// host: "192.168.232.111",
		// host: "192.168.1.11",
		// host: "192.168.35.111",
	},
});
