import React from "react";
import BlogImage from "../../assets/blogimage.jpeg";
const MainImage = () => {
  return (
    <div>
      <img
        src={BlogImage}
        alt="وصف الصورة"
        className="w-full object-cover rounded-b-[35px] "
        style={{ height: "400px" }} // Set a custom height
      />{" "}
    </div>
  );
};

export default MainImage;
