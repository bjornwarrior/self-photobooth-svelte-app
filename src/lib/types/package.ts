type photo = {
    id: number
    url_photo: string
    effect?: string
    photo_file?: File
}

type effect = {
    id: number
    name: String
    effect: Node 
    image_example_url: string
}

type effects = {
    data: effect[]
}

type frame = {
    name: string,
    id: number
    total_grid: number
    total_user: number
    font: string
    type_font: 'italic' | 'regular'
    weight: 'extralight' | 'light' | 'normal' | 'semibold' | 'bold' | 'extrabold' | 'black'
}


type resultPhotoPackage = {
    main_url: string
    photos_url: string[]
    result_url: string
}

type data_user = {
    username: string //user1
    username2?: string
    frame: frame
    photos: photo[]
    paymentMethod: string
    amountPay: number
    resultPhotoPackageUrl: resultPhotoPackage
}


// data yang dibutuhkan itu 1. Nama user, 2 Nama user2, 3. Jumlah user, 4. Jumlah foto, 5. Foto[], 6. url_photo (preview), 7. url_upload
// data transaction 1. harga, 2. payment method, 3. api key, 4. respojnse code, 5. response message 