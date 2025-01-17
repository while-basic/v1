import { defineConfig } from "tsup";
import { cp } from "fs/promises";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/*.tsx",
    "src/utils/*.ts"
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-dialog",
    "@radix-ui/react-slot",
    "@radix-ui/react-tooltip",
    "class-variance-authority",
    "lucide-react",
    "tailwind-merge",
    "tailwindcss-animate"
  ],
  onSuccess: async () => {
    await cp("src/globals.css", "dist/globals.css");
  }
}); 