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

export type FrameData = {
  id: number;
  name: string;
  total_grid: 3 | 4;
  total_user: number;
  font_url: string;
  font_family: string;
  type_font: 'italic' | 'regular';
  background_color_hex: string;
  color_hex: string;
  weight: 'extralight' | 'light' | 'medium' | 'normal' | 'semibold' | 'bold' | 'extrabold' | 'black';
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

export const currentFrame = $state<FrameData>({
  id: 1,
  name: 'Default Frame',
  total_grid: 3,
  total_user: 2,
  font_url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap',
  font_family: 'Inter',
  type_font: 'regular',
  weight: 'bold',
  background_color_hex: '#fafafa',
  color_hex: '#010101',
});

export const userData = $state<DataUser>({
  username: '',
  frame: currentFrame,
  photos: photos,
  paymentMethod: 'gopay',
  amountPay: 30000,
  resultPhotoPackageUrl: resultPhotoCloudUrl,
  isPaymentSuccess: false,
});
