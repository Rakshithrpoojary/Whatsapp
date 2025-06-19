import multer, { diskStorage } from "multer";

const Multerusage = diskStorage({
  destination: function (req, file, cb) {
    console.log("file", file);

    console.log("MULTER");
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log("file", file);

    cb(null, file.originalname);
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: Multerusage });
