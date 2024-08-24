// src/components/TextAndImage.js
import React from "react";
import SampleImage from "../../assets/student10.jpeg"; // Replace with your image path
import yellowpart from "../../assets/yellowpart.png";
import purplepart from "../../assets/purplepart.png";

const TextAndImage = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between p-8 bg-[#F7F7F7]"
      dir="rtl"
      lang="ar"
    >
      {/* Text on the right */}{" "}
      <div className="w-full lg:w-1/2 text-center lg:text-right mb-4 lg:mb-0">
        <h1 className="font-bold text-2xl lg:text-3xl mb-3"> منصة أسهل </h1>{" "}
        <p className="text-base lg:text-lg text-gray-700">
          منصة أسهل هي منصة شاملة تهدف إلى تحويل عملية التعلم والتدريس إلى تجربة
          مثيرة ومبتكرة للطلاب والمعلمين على حد سواء.توفر المنصة مجموعة واسعة من
          الأدوات والموارد التعليمية المبتكرة، مع التركيز على التواصل الفعال بين
          الطلاب والمعلمين وتوفير بيئة تعليمية داعمة وتفاعلية.{" "}
        </p>{" "}
      </div>{" "}
      {/* Image with styled shapes on the left */}{" "}
      <div className="relative w-64 h-64">
        {" "}
        {/* Yellow shape */}{" "}
        <div
          className="absolute top-10 -right-5 w-44 h-48  rounded-full"
          style={{
            transform: "translate(20%, 0%)",
            zIndex: 1, // Ensure the yellow shape is behind the image
          }}
        >
          <img
            src={yellowpart}
            alt="Yellow Background"
            className="w-full h-full object-cover rounded-full"
          />
        </div>{" "}
        {/* Purple shape */}{" "}
        <div
          className="absolute top-0 left-5 w-48 h-56 bg-purple-600 rounded-full"
          style={{
            transform: "translate(0%, 10%)",
            zIndex: 1, // Ensure the purple shape is behind the image
          }}
        >
          <img
            src={purplepart}
            alt="Purple Background"
            className="w-full h-full object-cover rounded-full"
          />
        </div>{" "}
        {/* Image */}{" "}
        <img
          src={SampleImage}
          alt="Sample Image"
          className="relative h-64 object-cover rounded-full"
          style={{
            width: "auto", // Automatically adjust width while maintaining height
            maxWidth: "70%", // Optional: Set a maximum width if needed
            zIndex: 10, // Ensure the image appears above the shapes
          }}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default TextAndImage;
