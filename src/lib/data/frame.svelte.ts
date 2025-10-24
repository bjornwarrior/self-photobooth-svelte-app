// src/lib/data/frames.svelte.ts
import type { FrameData } from "$lib/state/package.svelte";

export const dataFrames: FrameData[] = [
  {
    id: 1,
    name: "Classic White",
    total_grid: 3,
    total_user: 2,
    font_url: "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap",
    font_family: "Poppins",
    type_font: "regular",
    weight: "semibold",
    background_color_hex: "#ffffff",
    color_hex: "#000000",
  },
  {
    id: 2,
    name: "Modern Blush",
    total_grid: 3,
    total_user: 2,
    font_url: "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
    font_family: "Inter",
    type_font: "regular",
    weight: "bold",
    background_color_hex: "#ffd6e0",
    color_hex: "#111111",
  },
  {
    id: 3,
    name: "Dark Minimalist",
    total_grid: 3,
    total_user: 2,
    font_url: "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap",
    font_family: "Roboto",
    type_font: "regular",
    weight: "bold",
    background_color_hex: "#010101",
    color_hex: "#fafafa",
  },
  // ... tambahkan sisanya nanti (hingga 30)
];
