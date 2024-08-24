import React, { useState } from "react";
import SampleImage from "../../assets/student10.jpeg"; // Replace with your image path
import { Link } from "react-router-dom";

const ThreeColumnsComponent = () => {
  // State to manage the active index
  const [activeIndex, setActiveIndex] = useState(null);

  // Array of links
  const links = [
    { text: " طلاب", id: 1 },
    { text: " معلمين", id: 2 },
    { text: " خدمات برمجية خاصة", id: 3 },
    { text: " مدارس", id: 4 },
    { text: " جينيور", id: 5 },
  ];

  return (
    <div className="flex flex-wrap p-8 gap-x-10" dir="rtl">
      {" "}
      {/* First Column: Yellow Background with Header and Links */}{" "}
      <div className="flex-shrink-0 w-full md:w-2/12 bg-[#F7D671] p-4 text-right rounded-2xl flex flex-col">
        <h2 className="text-xl font-bold my-5 border-b-2 border-[#63518C]">
          {" "}
          فئات{" "}
        </h2>{" "}
        <ul className="flex flex-col gap-2 flex-grow">
          {" "}
          {links.map((link, index) => (
            <li key={link.id}>
              <Link
                href=""
                onClick={() => setActiveIndex(link.id)} // Set active index on click
                className={`block w-full py-3 px-4 rounded-sm ${
                  activeIndex === link.id ? "bg-[#63518C] text-white" : ""
                } text-black hover:bg-[#7a638c]`}
              >
                {link.text}{" "}
              </Link>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
      {/* Second Column: Heading, Paragraph, and Button */}{" "}
      <div className="flex-shrink-0 w-full md:w-5/12 p-4 text-right flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {" "}
            اشترك الان وابدأ في بناء مستقبلك!
          </h1>{" "}
          <p className="text-lg mb-4">
            اكتشف مجموعتنا الشاملة: مناهج، مراجع نهائية، ونماذج امتحانات لكل
            مادة دراسية.اشترك الآن!
          </p>{" "}
        </div>{" "}
        <div className="flex justify-end">
          <button className="bg-[#63518C] text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-[6px_6px_8px_0px_#63518C73]">
            إبدأ رحلتك{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Third Column: Image */}{" "}
      <div className="flex-shrink-0 w-full md:w-4/12 p-4">
        <img
          src={SampleImage}
          alt="Sample"
          className="w-full h-full object-cover "
        />
      </div>{" "}
    </div>
  );
};

export default ThreeColumnsComponent;
