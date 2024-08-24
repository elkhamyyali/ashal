import React from "react";
import CardLearn from "./CardLearn";

const NineSec = () => {
  return (
    <div lang="ar" dir="rtl" className="px-4 md:px-8 lg:px-10">
      <p className="text-lg font-semibold"> المدونات </p>{" "}
      <div className="flex flex-col md:flex-row justify-between items-start mt-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-0">
          مدونات ممتعة وملهمة لتفعيل التعلم الشيق!
        </h1>{" "}
        <button className="border border-[#63518C] text-[#63518C] p-2 rounded-md mt-2 md:mt-0">
          اشترك الآن{" "}
        </button>{" "}
      </div>{" "}
      <p className="mt-4 text-sm md:text-base lg:text-lg">
        استعد لرحلة تعليمية فريدة مع مدوناتنا الملهمة، حيث يمكنك التفاعل مع
        زملائك ومعلميك، والاطلاع على آخر الأخبار والتطورات التعليمية.اكتشف
        الأفكار الجديدة والاستراتيجيات المبتكرة لتعزيز عملية التعلم بطرق مبتكرة
        وممتعة!
      </p>{" "}
      <div className="p-4 md:p-8 lg:p-12 flex flex-wrap justify-center gap-6 mt-8">
        <CardLearn />
        <CardLearn />
      </div>{" "}
    </div>
  );
};

export default NineSec;
