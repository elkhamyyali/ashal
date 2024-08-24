import React from "react";
import LearnImage from "../../assets/lrn.jpeg";
import { Link } from "react-router-dom";

const CardLearn = () => {
  return (
    <div className="max-w-sm sm:max-w-md rounded-md overflow-hidden shadow-lg bg-white cursor-pointer">
      {" "}
      {/* Image Section */}{" "}
      <div className="relative">
        <img
          src={LearnImage}
          alt="Study Tips"
          className="w-full h-48 object-cover md:h-56 lg:h-64"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">
            نصائح دراسية يتبعها جميع الطلاب المتفوقين{" "}
          </h3>{" "}
        </div>{" "}
      </div>{" "}
      {/* Content Section */}{" "}
      <div className="p-4">
        <p className="bg-gray-300 text-black p-1 w-fit mb-4 text-sm sm:text-base">
          التعليم الأونلاين{" "}
        </p>{" "}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-2">
          نصائح دراسية يتبعها جميع الطلاب المتفوقين{" "}
        </h2>{" "}
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          ممن أهم النصائح للاختبارات هي أن تكون طالباً مبادراً: دوّ ن الملاحظات،
          واطرح الأسئلة، وحاول مساعدة غيرك في الفهم.إذا كنت مضطراً إلى حفظ
          الكثير من المعلومات، قسمها...{" "}
        </p>{" "}
        <Link
          to="/blog/1"
          className="text-[#63518C] underline text-sm sm:text-base block"
        >
          شاهد{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default CardLearn;
