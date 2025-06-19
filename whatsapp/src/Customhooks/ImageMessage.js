// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Messagedisplay } from "../Slices/Messageslice";
// function useImageMessage() {
//   const dispatch = useDispatch();
//   const [image, noimage] = useState();
//   const [imagse, noimages] = useState();

//   function Images(e) {
//     if (e.target.files[0]) {
//       // dispatch(Messagedisplay.ReplyImage(e.target.files[0]));
//       noimages(e.target.files[0]);
//       noimage(URL.createObjectURL(e.target.files[0]));
//     }
//   }

//   return { image, Images, imagse };
// }

// export default useImageMessage;
