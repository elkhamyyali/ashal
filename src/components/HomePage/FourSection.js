import React from "react";
import Yellow from "../../assets/left.png";

const YellowCurvedBackground = () => {
  return (
    <>
      <div className="bg-[#F7D671] h-[400px] overflow-hidden rounded-b-[20%]">
        {" "}
        {/* Reduced the height of the yellow background to 400px */}{" "}
        <div className="container mx-auto px-4 py-12 relative">
          {" "}
          {/* Adjusted padding from py-16 to py-12 */} {/* Text above */}{" "}
          <h1 className="lg:text-right text-center text-3xl font-bold mb-8 text-gray-800">
            !ما يميز أسهل{" "}
          </h1>{" "}
          {/* Content layout */}{" "}
          <div className="flex justify-between items-start">
            <div className="w-1/2">
              {" "}
              {/* Placeholder for left content (e.g. phone image) */}{" "}
              <div className="relative h-20 w-auto">
                <img
                  src={Yellow}
                  alt="Yellow Background"
                  className="absolute bottom-0 transform translate-y-60 md:translate-y-72" // Adjust translate and position
                />
              </div>{" "}
            </div>{" "}
            <div className="w-1/2 text-right">
              <p className="lg:text-lg text-base text-gray-700">
                أسهل، هي المنصة الأولى للتعليم الشامل، حيث تسهل التواصل الفوري
                بين الطلاب والمعلمين عبر منصات وقنوات خاصة.يمكنك متابعة تقدم
                الطالب والتفاعل مع مختلف الدروس، مما يضمن تجربة تعليمية متكاملة
                وفعالة!
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default YellowCurvedBackground;
