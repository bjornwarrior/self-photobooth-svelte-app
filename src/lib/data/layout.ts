// export interface FrameLayout {
//   id: string;
//   name: string;
//   size: '2R' | '3R' | '4R' | 'Custom';
//   grid: { columns: number; rows: number; gap: number };
//   ratio: string;
//   elements: {
//     type: 'photo' | 'text';
//     position: { top: string; left: string; width: string; height: string };
//   }[];
//   theme: string;
// }

// export const layouts: FrameLayout[] = [
//   {
//     id: 'layout_2R_portrait_3',
//     name: '2R Portrait (3 Grid)',
//     size: '2R',
//     grid: { columns: 1, rows: 3, gap: 4 },
//     ratio: '2:3',
//     elements: [
//       { type: 'photo', position: { top: '0%', left: '0%', width: '100%', height: '33.33%' } },
//       { type: 'photo', position: { top: '33.33%', left: '0%', width: '100%', height: '33.33%' } },
//       { type: 'photo', position: { top: '66.66%', left: '0%', width: '100%', height: '33.33%' } },
//     ],
//     theme: 'light'
//   },
//   {
//     id: 'layout_2R_portrait_2',
//     name: '2R Portrait (2 Grid)',
//     size: '2R',
//     grid: { columns: 1, rows: 2, gap: 6 },
//     ratio: '2:3',
//     elements: [
//       { type: 'photo', position: { top: '0%', left: '0%', width: '100%', height: '50%' } },
//       { type: 'photo', position: { top: '50%', left: '0%', width: '100%', height: '50%' } },
//     ],
//     theme: 'dark'
//   },
//   {
//     id: 'layout_2R_square_3',
//     name: '2R Square (3 Grid)',
//     size: '2R',
//     grid: { columns: 1, rows: 3, gap: 8 },
//     ratio: '1:1',
//     elements: [
//       { type: 'photo', position: { top: '0%', left: '0%', width: '100%', height: '33.33%' } },
//       { type: 'photo', position: { top: '33.33%', left: '0%', width: '100%', height: '33.33%' } },
//       { type: 'photo', position: { top: '66.66%', left: '0%', width: '100%', height: '33.33%' } },
//     ],
//     theme: 'light'
//   }
// ];


import type { FrameLayout } from "../types/frameTypes";

export const layouts: FrameLayout[] = [
  { id: 1, name: "Classic Vertical 2R", grid_cols: 1, grid_rows: 3, gap: 4, label_position: "bottom" },
  { id: 2, name: "Compact Mini", grid_cols: 1, grid_rows: 2, gap: 2, label_position: "bottom" },
  { id: 3, name: "Full Portrait", grid_cols: 1, grid_rows: 1, gap: 0, label_position: "bottom" },
  { id: 4, name: "Split Duo", grid_cols: 1, grid_rows: 2, gap: 3, label_position: "bottom" },
  { id: 5, name: "Sticker Strip", grid_cols: 1, grid_rows: 4, gap: 2, label_position: "bottom" },
  // 🔮 future layout bisa ditambah nanti
];
