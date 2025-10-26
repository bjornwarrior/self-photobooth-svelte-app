import type { FrameData } from "$lib/types/frameTypes";

// src/lib/state/package.svelte.ts
export type Photo = {
  id: number;
  url_photo: string;
  effect?: string;
  photo_file?: File;
};

export type Effect = {
  id: number;
  name: string;
  effect: Node;
  image_example_url: string;
};

export type Effects = {
  data: Effect[];
};

export type ResultPhotoPackage = {
  main_url: string;
  photos_url: string[];
  result_url: string;
};

export type DataUser = {
  username: string;
  username2?: string;
  frame: FrameData;
  photos: Photo[];
  paymentMethod: string;
  amountPay: number;
  resultPhotoPackageUrl: ResultPhotoPackage;
  isPaymentSuccess: boolean;
};

export const photos = $state<Photo[]>([
  {
    id: 0,
    url_photo: '',
  },
]);

export const effectsList = $state<Effects>({ data: [] });

export const resultPhotoCloudUrl = $state<ResultPhotoPackage>({
  main_url: '',
  result_url: '',
  photos_url: [],
});

export let stateCurrentFrame = $state<FrameData>({
    id: 1,
    name: "Sweet Blush",
    total_grid: 3,
    total_user: 2,
    grid_cols: 1,
    grid_rows: 3,
    gap: 2,
    label_position: "bottom",
    background_color_hex: "#FFF0F5",
    color_name_hex: "#333333",
    color_brand_hex: "#FFB6C1",
    outline_hex: "#FF9EB5",
    mid_border_hex: "#FFD6E0",
    outline: true,
    shadow: true,
    font_url_name: "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap",
    font_url_brand: "https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap",
    font_family_name: "Great Vibes",
    font_family_brand: "Inter",
    weight: "semibold",
    brand_name: "ELEGANT42",
    category: "handwritten",
    suitableFor: "couple",
  },);

export let stateUserData = $state<DataUser>({
  username: 'USERNAME1',
  username2: 'USERNAME2',
  frame: stateCurrentFrame,
  photos: photos,
  paymentMethod: 'gopay',
  amountPay: 30000,
  resultPhotoPackageUrl: resultPhotoCloudUrl,
  isPaymentSuccess: false,
});
