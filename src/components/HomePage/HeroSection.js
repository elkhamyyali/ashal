import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
  FaPencilAlt,
  FaAtlas,
  FaLightbulb,
} from "react-icons/fa"; // Icons related to learning

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#040B32] w-full sm:w-2/3 md:w-1/2 text-center">
        انضم إلى أكبر تجمع تعليمي وتميز بالتفوق{" "}
      </h1>{" "}
      <p className="text-base sm:text-lg md:text-xl mb-8 text-center w-full sm:w-3/4 md:w-2/3 text-[#0D002C]">
        تواصل مع نخبة من المعلمين والطلاب المتفوقين، واطرح أسئلتك وتابع تقدمك
        خطوة بخطوة في أكبر تجمع تعليمي مميز.انضم الآن وكن جزءً من مجتمع يسعى
        للتفوق والنجاح{" "}
      </p>{" "}
      <section className="flex flex-wrap justify-evenly items-center gap-4 pt-7 bg-[#3C3155] rounded-md w-full sm:w-11/12 max-w-screen-lg">
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaBook className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            حصص مباشرة{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaChalkboardTeacher className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            أقوي الدروس التفاعلية{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaGraduationCap className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            كويزات علي كل فيديو{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaLaptopCode className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            أمتحانات شاملة{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaPencilAlt className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            ملخصات مميزة{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaAtlas className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            تمارين عديدة{" "}
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col items-center mb-4 md:mb-8 w-1/3 sm:w-1/4 lg:w-auto">
          <div className="bg-[#63518C] p-3 md:p-4 rounded-full">
            <FaLightbulb className="text-2xl md:text-3xl text-white" />
          </div>{" "}
          <span className="mt-2 text-xs sm:text-sm md:text-base text-white">
            منتديات تفاعلية{" "}
          </span>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};

export default HeroSection;
