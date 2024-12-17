const multer = require('multer');
const path = require('path');

//Configure where uploaded files will go
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') //Directory to store uplpoaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); //Unique filename
    },
});

//FIlter to accept only image files
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images are allowed.'));
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;