
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
    id: number;
    name: string;
    total_grid: 3 | 4;
    total_user: number;
    font_url: string;
    type_font: 'italic' | 'regular';
    font_family: string
    background_color_hex: string
    color_hex: string
    weight: 'extralight' | 'light' | 'medium' | 'normal' | 'semibold' | 'bold' | 'extrabold' | 'black';
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
    isPaymentSuccess: boolean
  };

  // Contoh reactive state menggunakan $state
  export const photos = $state<photo[]>(
    [
      {
        id: 0,
        url_photo: '',
      } 
    ]
  );
  export const effectsList = $state<effects>({ data: [] });


  export const resultPhotoCloudUrl = $state<resultPhotoPackage>({
    main_url: '',
    result_url: '',
    photos_url: []
  })
  export const currentFrame = $state<frame>(

    {
      name: '',
    id: 1,
    total_grid: 3,
    total_user: 2,
    font: 'metro',
    type_font: 'regular',
    weight: 'bold',
    background_color_hex: '#fafafa',
    color_hex: '#010101',
    }
  );
  export const userData = $state<data_user>(
    {
    username: '', // user1
    frame: currentFrame,
    photos: photos,
    paymentMethod: 'gopay',
    amountPay: 30_000,
    resultPhotoPackageUrl: resultPhotoCloudUrl,
    isPaymentSuccess: false,
    }
  );
