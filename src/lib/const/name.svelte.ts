type staterPack = {
    name: string,
    // totalPhotos: number
    id_frame: number
}
type frame = {
    name: string,
    id: number
    total_grid: number
    total_user: number
    username: string[]
    photos: File[]
    url_photos: string[]
}

// data yang dibutuhkan itu 1. Nama user, 2 Nama user2, 3. Jumlah user, 4. Jumlah foto, 5. Foto[], 6. url_photo (preview), 7. url_upload
// data transaction 1. harga, 2. payment method, 3. api key, 4. respojnse code, 5. response message 