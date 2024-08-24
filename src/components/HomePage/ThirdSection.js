import React from "react";
import Group from "../../assets/Container.png";
import Num from "../../assets/num.png";

const ThirdSection = () => {
  return (
    <div className="px-4 lg:px-0 my-20" lang="ar" dir="rtl">
      {" "}
      {/* Title */}{" "}
      <h1 className="text-right text-2xl sm:text-3xl lg:text-4xl font-bold mr-4 sm:mr-8 lg:mr-12 mb-8 text-black">
        كيف تعمل أسهل:
      </h1>{" "}
      {/* Main Content */}{" "}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:space-x-10 space-y-8 lg:space-y-0">
        {" "}
        {/* Image */}{" "}
        <div className="hidden lg:flex lg:w-1/3 justify-center lg:order-1">
          <img
            src={Group}
            alt="توضيح"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>{" "}
        {/* Text Boxes */}{" "}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-0 lg:w-1/2 lg:order-2">
          <div className="border border-black p-4 sm:p-6 rounded-sm flex items-start">
            <div className="w-8 sm:w-10 md:w-12 flex-shrink-0 flex items-center justify-center mx-2 sm:mx-4">
              <img src={Num} alt="رقم" />
            </div>{" "}
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                اكتشف معلمك المثالي على منصة أسهل{" "}
              </h3>{" "}
              <p className="text-base sm:text-lg">
                استعرض مجموعة واسعة من المعلمين المتخصصين على منصة أسهل، وابحث
                عن المعلم المثالي الذي يلبي احتياجاتك التعليمية بدقة وسهولة،
                وابدأ رحلتك التعليمية بنجاح وتميز، مع الدعم والإرشاد الذي يساعدك
                في تحقيق أهدافك الأكاديمية بكل يسر وسلاسة.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border border-black p-4 sm:p-6 rounded-sm flex items-center">
            <div className="w-8 sm:w-10 md:w-12 flex-shrink-0 flex items-center justify-center mx-2 sm:mx-4">
              <img src={Num} alt="رقم" />
            </div>{" "}
            <h3 className="text-lg sm:text-xl font-semibold mb-2"> عنوان 2 </h3>{" "}
          </div>{" "}
          <div className="border border-black p-4 sm:p-6 rounded-sm flex items-center">
            <div className="w-8 sm:w-10 md:w-12 flex-shrink-0 flex items-center justify-center mx-2 sm:mx-4">
              <img src={Num} alt="رقم" />
            </div>{" "}
            <h3 className="text-lg sm:text-xl font-semibold mb-2"> عنوان 3 </h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ThirdSection;
