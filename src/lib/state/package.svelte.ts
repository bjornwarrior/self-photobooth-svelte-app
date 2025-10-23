
  export type photo = {
    id: number;
    url_photo: string;
    effect?: string;
    photo_file?: File;
  };

  export type effect = {
    id: number;
    name: string;
    effect: Node;
    image_example_url: string;
  };

  export type effects = {
    data: effect[];
  };

  export type frame = {
    name: string;
    id: number;
    total_grid: number;
    total_user: number;
    font: string;
    type_font: 'italic' | 'regular';
    weight: 'extralight' | 'light' | 'normal' | 'semibold' | 'bold' | 'extrabold' | 'black';
  };

  export type resultPhotoPackage = {
    main_url: string;
    photos_url: string[];
    result_url: string;
  };

  export type data_user = {
    username: string; // user1
    username2?: string;
    frame: frame;
    photos: photo[];
    paymentMethod: string;
    amountPay: number;
    resultPhotoPackageUrl: resultPhotoPackage;
  };

  // Contoh reactive state menggunakan $state
  export const photos = $state<photo[]>([]);
  export const effectsList = $state<effects>({ data: [] });
  export const currentFrame = $state<frame | null>(null);
  export const userData = $state<data_user | null>(null);
