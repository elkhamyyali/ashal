import React from "react";
import { Link } from "react-router-dom";

const ArticlesContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      lang="ar"
      dir="rtl"
    >
      {/* Title */}{" "}
      <div className="border border-[#63518C] rounded-3xl bg-white max-w-6xl w-full p-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#63518C]">
          مقالات مميزة{" "}
        </h1>
        {/* Bordered Container for Links */}{" "}
        <div className="flex flex-col space-y-4 text-right">
          <Link
            to="/article1"
            className="text-[#63518C] text-xl font-normal hover:underline"
          >
            1. المقالة الأولى: دليل شامل لأفضل النصائح الدراسية للطلاب المتفوقين
            والمجتهدين{" "}
          </Link>{" "}
          <Link
            to="/article2"
            className="text-[#63518C] text-xl font-normal hover:underline"
          >
            2. المقالة الثانية: طرق فعالة لتحسين مهارات الكتابة والإبداع للطلاب
            الجامعيين{" "}
          </Link>{" "}
          <Link
            to="/article3"
            className="text-[#63518C] text-xl font-normal hover:underline"
          >
            3. المقالة الثالثة: استراتيجيات مبتكرة لتحفيز الطلاب وزيادة تحصيلهم
            الدراسي{" "}
          </Link>{" "}
          <Link
            to="/article4"
            className="text-[#63518C] text-xl font-normal hover:underline"
          >
            4. المقالة الرابعة: نصائح هامة لاختيار التخصص الأكاديمي المناسب
            لاحتياجات الطلاب{" "}
          </Link>{" "}
          <Link
            to="/article5"
            className="text-[#63518C] text-xl font-normal hover:underline"
          >
            5. المقالة الخامسة: خطوات فعالة لتحسين التفاعل والتواصل بين الطلاب
            والمعلمين{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ArticlesContent;
