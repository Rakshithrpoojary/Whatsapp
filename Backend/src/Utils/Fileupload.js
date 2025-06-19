// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // cloudinary.config({
// //   cloud_name: process.env.CLOUD_NAME,
// //   api_key: process.env.API_KEY,
// //   api_secret: process.env.API_SECREAT,
// // });
// cloudinary.config({
//   cloud_name: "dnbnsimy4",
//   api_key: "726583632318331",
//   api_secret: "WYBzKMElUmNiZJmvUR6cJClS-lQ",
// });
// export const fileupload = async (localpath) => {
//   try {
//     const uploading = await cloudinary.uploader.upload(localpath, {
//       resource_type: "auto",
//     });
//     return uploading;
//   } catch (error) {
//     fs.unlinkSync(localpath);
//     return null;
//   }
// };

import { v2 as clouds } from "cloudinary";
import fs from "fs";

clouds.config({
  cloud_name: "dnbnsimy4",
  api_key: "726583632318331",
  api_secret: "WYBzKMElUmNiZJmvUR6cJClS-lQ",
});

export const fileUpload = async (localpath) => {
  try {
    const uploading = await clouds.uploader.upload(localpath, {
      resource_type: "auto",
    });
    return uploading;
  } catch (error) {
    fs.unlinkSync(localpath);
    return null;
  }
};
