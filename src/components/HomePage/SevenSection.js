import React from "react";
import Student from "../../assets/student.png";

const SevenSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 pl-24">
      {" "}
      {/* Left Section: Text and Button */}{" "}
      <div
        className="lg:w-1/2 p-4 flex flex-col justify-center"
        lang="ar"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold mb-4"> هل أنت طالب؟ </h2>{" "}
        <p className="text-lg mb-6">
          هالآن يمكنك الاشتراك للحصول على المناهج والمراجعات النهائية ونماذج
          الامتحانات التدريبية لجميع المواد الدراسية{" "}
        </p>{" "}
        {/* Button aligned to the end */}{" "}
        <div className="flex flex-col items-end mt-auto">
          <button className="bg-[#63518C] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            انقر هنا{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Right Section: Image */}{" "}
      <div className="lg:w-1/2 p-4 flex justify-center">
        <img
          src={Student}
          alt="وصف الصورة"
          className="w-50 h-50 object-cover"
        />
      </div>{" "}
    </div>
  );
};

export default SevenSection;
