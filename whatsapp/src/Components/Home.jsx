import React, { useEffect } from "react";
import "../Styles/Home.css";
import { useState } from "react";
import { useSignup } from "../Customhooks/Signup";
import useUploadImage from "../Customhooks/UploadImage";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { signup } = useSignup();
  const signUpdata = useSelector((selector) => selector.one);
  const { ImageUpload, loading } = useUploadImage();
  const Country = ["India", "USA", "UK", "Russia", "China"];
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    imageuser: "",
    country: "",
  });

  async function Submit(e) {
    e.preventDefault();
    await signup(user);
  }
  useEffect(() => {
    if (signUpdata.Signupdata === 200) {
      setUser({
        username: "",
        password: "",
        email: "",
        imageuser: "",
        country: "",
      });
    }
    if (signUpdata.Userimage) {
      console.log(signUpdata.Userimage);
      setUser((imageupload) => ({
        ...imageupload,
        imageuser: signUpdata.Userimage.data,
      }));
    }
  }, [signUpdata]);
  return (
    <div
      style={{
        backgroundImage:
          "url(/Images/pexels-muhammad-khairul-iddin-adnan-808510.jpg)",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="signup-container">
        <form onSubmit={(e) => Submit(e)} encType="multipart/form-data">
          {loading && <p className="Loading">Loading...</p>}
          <label>
            <input
              onChange={(e) => ImageUpload(e)}
              type="file"
              name="profileimage"
              className="userprofileimage"
            />
            <img
              src={
                signUpdata.Userimage?.data
                  ? signUpdata.Userimage?.data
                  : "/Images/download copy 2.png"
              }
              className="userprofileimage"
            />
          </label>
          <div className="Innerdiv">
            <label>
              <p className="heading">Username</p>
              <input
                value={user.username}
                onChange={(e) =>
                  setUser((set) => ({ ...set, username: e.target.value }))
                }
                type="text"
                placeholder="Enter username"
                className="username"
              />
            </label>
            <label>
              <p className="heading"> Password</p>
              <input
                value={user.password}
                onChange={(e) =>
                  setUser((set) => ({ ...set, password: e.target.value }))
                }
                type="password"
                placeholder="Enter password"
                className="password"
              />
            </label>
            <label>
              <p className="heading"> Email</p>
              <input
                value={user.email}
                onChange={(e) =>
                  setUser((set) => ({ ...set, email: e.target.value }))
                }
                type="email"
                className="useremail"
                placeholder="Enter your email"
              />
            </label>
            <label>
              <select
                onChange={(e) =>
                  setUser((Country) => ({
                    ...Country,
                    country: e.target.value,
                  }))
                }
                className="selectdropdown"
              >
                {Country.map((op) => (
                  <option>{op}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="Loginoption">
        <p className="Logintext">
          Already have an account?
          <Link className="signinlink" to="/signin">
            Login
          </Link>
        </p>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Home;
// const data = await axios({
//   url: "http://localhost:3001/api/v1/user/register",
//   method: "POST",
//   data: formData,
//   headers: { "Content-Type": "multipart/form-data" },
// });
// console.log(data);
// const image = await fetch(
//   "http://localhost:3001/api/v1/user/register",
//   {
//     method: "POST",
//     body: formData,
//   }
// );
// const data = await image.json();
// console.log("IMAGE", data);
// setUserImage(image);

// const data = await axios({
//   url: "http://localhost:3001/api/v1/user/register",
//   method: "POST",
//   data: formData,
//   // headers: { "Content-Type": "multipart/form-data" },
// });
// console.log(data);
// setUserImage(data.data);
// const image = await fetch(
//   "http://localhost:3001/api/v1/user/register",
//   {
//     method: "POST",
//     body: formData,
//     credentials: "include",
//   }
// );
// const data = await image.json();
// console.log("IMAGE", data);
// setUserImage(image);

// useEffect(() => {
//   if (UserImage) {
//     formData.append("profileimage", UserImage);
//     noloading(true);
//     ImageUpload();
//     noloading(false);
//   }

// }, [UserImage]);
