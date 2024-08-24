import React from "react";
import SampleImage from "../../assets/Teacher.jpeg"; // Adjust the import path as needed

const TeacherBook = () => {
  return (
    <div
      className="flex flex-col md:flex-row p-4 md:p-8 gap-6 md:gap-10"
      dir="rtl"
    >
      {/* Second Column: Heading, Paragraph, and Button */}{" "}
      <div className="flex-shrink-0 w-full md:w-7/12 p-4 text-center md:text-right flex flex-col justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            اشترك الآن وابدأ في بناء مستقبل التعليم!
          </h1>{" "}
          <p className="text-base md:text-lg mb-4">
            شارك الآن في تعليم المستقبل وانضم لفريق المعلمين على منصتنا وشارك في
            تدريس المناهج التعليمية بطرق مبتكرة!
          </p>{" "}
        </div>{" "}
        <div className="flex justify-center md:justify-end">
          <button className="bg-[#63518C] text-white px-6 py-3 rounded-md hover:bg-blue-600 shadow-[6px_6px_8px_0px_#63518C73]">
            انضم الآن كمعلم{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Third Column: Image */}{" "}
      <div className="flex-shrink-0 w-full md:w-5/12 p-4">
        <img
          src={SampleImage}
          alt="Sample"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>{" "}
    </div>
  );
};

export default TeacherBook;
