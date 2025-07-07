import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // You're using the SWC plugin, that's fine
import path from "path"; // Keep this import, it's used for your '@' alias

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      // Your existing alias
      "@": path.resolve(__dirname, "./src"),
      // --- ADD THIS NEW ALIAS FOR source-map-js ---
      "source-map-js": path.resolve(__dirname, "./src/utils/empty-module.js"), // Adjust path to your empty-module.js
      // --- END ADDITION ---
    },
  },
});
