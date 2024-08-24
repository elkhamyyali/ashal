import React from "react";
import ExampleImage from "../../assets/shj.png"; // Replace with your image path
import { FaUser, FaCog, FaChartLine } from "react-icons/fa"; // Replace with your icons

const FiveSection = () => {
  // Define card data
  const cardData = [
    {
      icon: <FaUser className="text-xl text-[#755DA5]" />, // Reduced icon size
      title: "تعلم",
      description:
        "منصة تعليمية شاملة بفيديوهات مثيرة، محتوى تفاعلي، واختبارات تقييمية.",
    },
    {
      icon: <FaCog className="text-xl text-[#755DA5]" />, // Reduced icon size
      title: "تفاعل",
      description:
        "منتدى حيوي يجمع الطلاب والمعلمين لمناقشة الأخبار والمواضيع الثقافية الشيقة.",
    },
    {
      icon: <FaChartLine className="text-xl text-[#755DA5]" />, // Reduced icon size
      title: "قيم",
      description:
        "يمكن للمعلمين تتبع التقدم الذي يحققه الطلاب وتقييم الأداء بشكل فعال ودقيق ومستمر.",
    },
  ];

  return (
    <div lang="ar" className="mt-8 px-2 lg:px-6" dir="rtl">
      {" "}
      {/* Container for Title and Paragraph */}{" "}
      <div className="text-right mb-6">
        <h1 className="text-3xl font-bold text-black mb-4 mt-28">
          تقدم مع أسهل{" "}
        </h1>{" "}
        <p className="text-base text-[#0D002C] w-full lg:w-2/3">
          انضم إلى مجتمع متعلمي أسهل لتحدث نقلة نوعية في مسيرتك المهنية من خلال
          البرامج المصممة لتزويدك بالمهارات التي تحتاجها لاستكشاف طاقاتك
          وإمكانياتك الذاتية.{" "}
        </p>{" "}
      </div>{" "}
      {/* Main Content */}{" "}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {" "}
        {/* Small Cards with Icons */}{" "}
        <div className="flex flex-wrap justify-center gap-4 p-4 lg:w-1/2">
          {" "}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 w-full max-w-xs lg:w-1/3"
            >
              <div className="w-12 h-12 mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                {" "}
                {card.icon}{" "}
              </div>{" "}
              <h3 className="text-base font-bold mb-2 text-center w-full">
                {" "}
                {card.title}{" "}
              </h3>{" "}
              <p className="text-sm text-gray-600 text-center w-full">
                {" "}
                {card.description}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Image */}{" "}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src={ExampleImage}
            alt="وصف الصورة"
            className="w-2/4 max-w-sm mb-12"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FiveSection;
