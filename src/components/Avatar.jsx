import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Resume } from "../store/Actions/resumeActions";
import { Avatar } from "../store/Actions/userActions";

export default function Editavatar(props) {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.data);
  const [formData, setFormData] = useState(resume);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Resume());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] }); // Update the avatar property in formData
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("avatar", formData.avatar);
      await dispatch(Avatar(formDataToSend, resume._id));
      dispatch(Resume());
      props.onClose();
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false); // Set loading state back to false when update process is completed
    }
  };

  if (!resume) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <img
          className="w-[20%]"
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt=""
        />
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className=" z-10 flex items-center justify-center fixed h-full w-full bg-black/30 ">
        <div className=" py-5 px-10 rounded-3xl w-[30%] bg-white ">
          <RiCloseLine
            size={30}
            className="ml-[52vh]   "
            onClick={props.onClose}
            color="#1c1c1c9d" // set custom `width` and `height`
          />
          <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
            <h1>Edit Profile Picture</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="">
              <div className="w-[100%]  ">
                <h1 className=" mt-16 text-2xl font-bold mb-2 text-[#272727c1]">
                  Profile picture
                </h1>
                <div className=" relative flex gap-4 items-center justify-center bg-[#EAFCFF] w-[100%] border-[1px] border-[#008BDC] p-2 rounded-lg border-dashed   h-[7vh]  ">
                  <RiUploadCloudLine
                    size={30}
                    className="  "
                    color="#008BDC" // set custom `width` and `height`
                  />
                  <h1 className=" text-2xl font-bold  text-[#008BDC]">
                    Upload Picture
                  </h1>
                  <input
                    className="w-full  pl-[2vh] absolute   h-full text-5xl  opacity-0 outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                    type="file"
                    onChange={handleChange}
                    name="avatar"
                    id=""
                  />
                </div>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className=" w-[20vh] ml-[16vh] h-[20vh] object-cover border-cyan-500 border-2  mt-4  rounded-full"
                  />
                )}
              </div>
              <h1 className="mt-2 text-xl font-semibold text-[#2727279a] ">
                Upload a professional picture of yourself (Max file size: 1Mb
                and max resolution: 500px x 500px. File type - jpeg, jpg, png,
                gif)
              </h1>
            </div>
            <button
              type="submit"
              className="px-[4vh] py-[2vh] ml-[20vh] mt-5 text-2xl font-semibold rounded-2xl text-white bg-[#008BDC] "
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Update"} {/* Show loader or Update text */}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
