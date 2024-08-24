import React from "react";
import CardImage from "../../assets/aboutsec.png"; // Import image

const CardsPart = () => {
  const cardData = [
    {
      title: "تتبع التقدم وتقييم الأداء",
      description:
        "نظام تعقب لتقييم التقدم المحرز في تحقيق الأهداف وتقييم الأداء بشكل فعال",
    },
    {
      title: "تغطية كاملة للمراحل التعليمية",
      description:
        "منهج شامل يغطي جميع المراحل التعليمية، من المرحلة الابتدائية إلى الثانوية",
    },
    {
      title: "تصميم مستجيب وسهل الاستخدام",
      description:
        "واجهة سهلة الاستخدام ومتجاوبة مع جميع الأجهزة والشاشات المختلفة",
    },
    {
      title: "موارد تعليمية متنوعة",
      description:
        "توفر المنصة مجموعة متنوعة من الموارد التعليمية، بما في ذلك مقاطع الفيديو والرسوم البيانية والاختبارات",
    },
    {
      title: "منتدى عام للنقاش والتبادل الثقافي",
      description:
        "منبر للنقاش يجمع الطلاب والمعلمين، لتبادل الأفكار والخبرات والمناقشات الثقافية",
    },
    {
      title: "تتبع الأداء",
      description:
        "أدوات تحليلية متقدمة لتتبع تقدم الطلاب وتحسين الأداء الأكاديمي",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {cardData.map((card, index) => (
          <div key={index} className="bg-[#F9FAFB] p-6 rounded-sm text-center">
            {" "}
            {/* Image section */}{" "}
            <div className="relative mb-4 flex justify-center">
              <img
                src={CardImage}
                alt="Card Background"
                className="w-32 h-32 object-cover"
              />
            </div>{" "}
            {/* Text section */}{" "}
            <h3 className="text-xl font-semibold mb-2"> {card.title} </h3>{" "}
            <p className="text-gray-600"> {card.description} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default CardsPart;
