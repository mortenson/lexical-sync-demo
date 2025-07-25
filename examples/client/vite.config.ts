/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lexical-collab-stream",
  plugins: [react()],
  build: {
    minify: false,
    rollupOptions: {
      input: ["index.html", "app.html"],
    },
  },
  resolve: {
    dedupe: ["lexical", "@lexical/react", "@lexical/utils"],
  },
});
