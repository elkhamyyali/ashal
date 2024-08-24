import React from "react";
import Tech from "../../assets/tech.png";

const EightSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 pr-24">
      {" "}
      {/* Left Section: Image */}{" "}
      <div className="lg:w-1/2 p-4 flex justify-center">
        <img src={Tech} alt="وصف الصورة" className="w-50 h-50 object-cover" />
      </div>{" "}
      {/* Right Section: Text and Button */}{" "}
      <div
        className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start justify-center"
        lang="ar"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold mb-4"> هل أنت معلم؟ </h2>{" "}
        <p className="text-lg mb-6">
          يمكنك الآن الانضمام لفريق المعلمين على المنصة، والمشاركة في تدريس
          المناهج التعليمية{" "}
        </p>{" "}
        {/* Button aligned to the end */}{" "}
        <div className="flex justify-center lg:justify-start mt-auto">
          <button className="bg-[#63518C] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            انقر هنا{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default EightSection;
