import React from "react";
import Main from "../../assets/image.png";

const SecondSection = () => {
  return (
    <div className="mt-32 px-4 flex flex-col items-end">
      {" "}
      {/* Container for text */}{" "}
      <div className="w-full max-w-2xl flex flex-col items-center text-center mr-0 lg:mr-36">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#755DA5]">
          تعلم من نخبة الخبراء مباشرة - شارك المعرفة مع الجميع{" "}
        </h3>{" "}
        <p className="text-base sm:text-lg mb-8 text-[#0D002C]">
          تخلص من التشتت وتعلم بتركيز!اكتشف العديد من الدروس المميزة من نخبة
          المعلمين، بالإضافة إلى أسئلة متنوعة وشاملة.{" "}
        </p>{" "}
      </div>{" "}
      {/* Full-width Image */}{" "}
      <img
        src={Main}
        alt="وصف الصورة"
        className="w-full object-cover rounded-br-full rounded-bl-full mt-8"
        style={{ height: "300px" }} // Set a custom height
      />{" "}
    </div>
  );
};

export default SecondSection;
