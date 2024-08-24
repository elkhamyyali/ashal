import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4" lang="ar" dir="rtl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        باقات أسهل{" "}
      </h2>{" "}
      <p className="text-base md:text-lg text-center mb-6 md:mb-8">
        نقدم في أسهل 3 باقات تتناسب مع احتياجاتكم، وتُ لبّ ي تطلعاتكم في <br />
        التوسع وزيادة أعداد الطلاب.{" "}
      </p>{" "}
      {/* Buttons Container */}{" "}
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 w-full md:w-2/3 mx-auto mb-8">
        <button className="w-full md:w-1/3 lg:mx-3 mx-0 bg-purple-600 text-white py-3 rounded mb-4 md:mb-0 text-center">
          باقة معاملات{" "}
        </button>{" "}
        <button className="w-full md:w-1/3 bg-gray-300 text-gray-700 py-3 rounded mb-4 md:mb-0 text-center">
          باقة موظفين{" "}
        </button>{" "}
        <button className="w-full md:w-1/3 bg-gray-300 text-gray-700 py-3 rounded mb-4 md:mb-0 text-center">
          باقة حسابات{" "}
        </button>{" "}
      </div>{" "}
      <div className="flex flex-col items-center">
        <div className="relative border-[9px] max-w-full md:max-w-4xl min-h-[500px] border-[#63518C99] p-6 md:p-8 rounded-3xl bg-white shadow-md flex flex-col items-center">
          {" "}
          {/* Text Above Cards */}{" "}
          <p className="text-base md:text-lg mb-4 text-center p-4 md:p-8">
            اختر باقتك{" "}
          </p>{" "}
          {/* Cards Container */}{" "}
          <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-14 mb-8">
            <PricingCard
              title="باقة سنة"
              price="3000"
              features={[
                "إدارة حسابات غير محدودة",
                "إمكانية تخصيص واجهة المستخدم",
                "دعم على مدار الساعة",
                "تحليل تقارير متقدمة",
                "استضافة مخصصة",
              ]}
              highlighted={true}
            />{" "}
            <PricingCard
              title="باقة 3 شهور"
              price="2000"
              features={[
                "إدارة حتى 50 حساب",
                "إمكانية تخصيص واجهة المستخدم",
                "دعم على مدار الساعة",
                "تحليل تقارير أساسي",
              ]}
            />{" "}
            <PricingCard
              title="باقة شهر واحد"
              price="1000"
              features={[
                "إدارة حتى 10 حسابات",
                "واجهة مستخدم قياسية",
                "دعم خلال أوقات العمل",
                "تقارير أساسية",
              ]}
            />{" "}
          </div>{" "}
          {/* Text Below Cards */}{" "}
          <button className="bg-[#F3B40A] text-black py-3 px-6 md:px-12 rounded-md font-bold m-4">
            انشاء الأكاديمية{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

const PricingCard = ({ title, price, features, highlighted }) => {
  return (
    <div
      className={`relative rounded-3xl shadow-md p-4 mb-3 lg:mb-0 md:p-6 ${
        highlighted
          ? "transform translate-y-2 md:translate-y-4 translate-x-2 md:translate-x-8 z-10 bg-[#63518C] text-white w-full md:w-80"
          : "border-[2px] border-[#63518C] w-full md:w-64"
      }`}
    >
      <h3 className="text-lg md:text-xl font-bold mb-3"> {title} </h3>{" "}
      <ul className="mb-4">
        {" "}
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 m-1 text-white bg-purple-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>{" "}
            {feature}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <button
        className={`w-full py-2 rounded-lg ${
          highlighted ? "bg-white text-[#63518C]" : "bg-[#63518C] text-white"
        }`}
      >
        {price} <span className="text-sm"> جنيه </span>{" "}
      </button>{" "}
    </div>
  );
};

export default PricingSection;
