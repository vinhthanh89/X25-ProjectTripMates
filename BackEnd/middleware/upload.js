import multer from 'multer'


const storage = new multer.memoryStorage()
const upload = multer({storage : storage})

export default upload
