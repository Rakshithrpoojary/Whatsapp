import React from "react";
import { useState } from "react";
import axios from "axios";
import { Loginslicedata } from "../Slices/Loginslice";
import { useDispatch } from "react-redux";

function useUploadImage() {
  const dispatch = useDispatch();
  const [loading, noloading] = useState(false);
  const formData = new FormData();

  async function ImageUpload(e) {
    try {
      if (e.target.files[0]) {
        console.log(e.target.files[0]);
        formData.append("profileimage", e.target.files[0]);
        console.log("FORMDATA", formData);
        noloading(true);
        const data = await axios.post(
          "http://localhost:3001/api/v1/user/register",
          formData,
          { withCredentials: "include" }
        );
        noloading(false);
        dispatch(Loginslicedata.UserImage(data.data));
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { ImageUpload, loading };
}

export default useUploadImage;
