const multer = require('multer');

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb (null, './public/img/users');
    },

    filename: (req, file, cb) =>{
        const newFileImg ='userImg'+Date.now()+path.extname(file.originalname);
        cb(null, newFileImg);
    }
});

const upload = multer ({storage});

module.exports = upload;