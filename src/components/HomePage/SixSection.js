import React from "react";
import {
  FaUser,
  FaCog,
  FaChartLine,
  FaComment,
  FaSchool,
} from "react-icons/fa";

// HexagonCard Component
const HexagonCard = ({ icon: Icon, title, subtitle, isGray }) => (
  <div
    className="flex flex-col items-center p-6 transform translate-y-[-20px]"
    lang="ar"
  >
    <div className="relative w-24 h-24 mb-4">
      {" "}
      {/* Hexagon Shape */}{" "}
      <div
        className={`absolute inset-0 ${
          isGray ? "bg-[#767676]" : "bg-[#63518C]"
        } text-white`}
        style={{
          clipPath:
            "polygon(48.83% 91.8%, 84.67% 70.13%, 84.67% 31.67%, 48.83% 12.22%, 13% 31.67%, 13% 70.13%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-2xl">
          <Icon />
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Text Content */}{" "}
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-center justify-center h-24 w-28 transform translate-y-[-40px] -z-10">
      <h3 className="text-sm font-bold text-center text-gray-800 mb-2">
        {" "}
        {title}{" "}
      </h3>{" "}
      <p
        className={`text-xs ${
          isGray ? "text-gray-500" : "text-purple-600"
        } text-center`}
      >
        {subtitle}{" "}
      </p>{" "}
    </div>{" "}
  </div>
);

// SixSection Component
const SixSection = () => {
  const services = [
    { icon: FaUser, title: " البرمجة ", subtitle: "عرض", isGray: false },
    { icon: FaCog, title: "معلمين", subtitle: "عرض", isGray: false },
    { icon: FaChartLine, title: "طلاب", subtitle: "عرض", isGray: false },
    { icon: FaComment, title: "جمهور", subtitle: "عرض", isGray: true },
    { icon: FaSchool, title: "مدارس", subtitle: "قريبا", isGray: true },
    { icon: FaSchool, title: "مدارس", subtitle: "قريبا", isGray: true },
  ];

  return (
    <div className="mt-0 px-2 lg:p-14 bg-[#F9FAFB]">
      {" "}
      {/* Title and Description */}{" "}
      <div className="text-right mb-4 p-4 md:p-8 lg:p-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
          فئات منصة أسهل{" "}
        </h1>{" "}
        <p className="text-base md:text-lg lg:text-lg text-[#0D002C]">
          انضم إلى مجتمع متعلّ مي أسهل لتحدث نقلة نوعية في مسيرتك المهنية من
          خلال البرامج المصمّ مة لتزويدك بالمهارات التي تحتاجها لاستكشاف طاقاتك
          وإمكانيّ اتك الذاتية.{" "}
        </p>{" "}
      </div>{" "}
      {/* Grid Layout */}{" "}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-4">
        {" "}
        {/* Render all items */}{" "}
        {services.map((service, index) => (
          <div key={index} className="flex justify-center">
            <HexagonCard {...service} />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default SixSection;
