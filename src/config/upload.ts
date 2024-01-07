import multer from 'multer'
import * as path from 'path'

const MAX_SIZE = 5 * 1024 * 1024 // 5MO

export const storage = multer.diskStorage({
  destination: function (_, file, cb) {
    let uploadPath = ''

    if (file.fieldname === 'coverLetter') {
      uploadPath = 'uploads/coverLetters/'
    } else if (file.fieldname === 'cv') {
      uploadPath = 'uploads/cvs/'
    } else {
      uploadPath = 'uploads/others/'
    }

    cb(null, uploadPath)
  },
  filename: function (_, file, cb) {
    const extension = path.extname(file.originalname)
    const originalName = path.basename(file.originalname, extension)
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9)
    cb(null, originalName + '-' + uniqueSuffix + extension)
  }
})

export const applicationFiles = multer({ storage: storage, limits: { fileSize: MAX_SIZE } }).fields([
  { name: 'coverLetter', maxCount: 1 },
  { name: 'cv', maxCount: 1 }
])
