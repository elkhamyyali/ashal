import React from "react";
import Breadcrumb from "../components/Breadcrumb"; // Adjust the path as necessary
import SixSection from "../components/HomePage/SixSection";
import SmallBanner from "../components/AboutPage/SmallBanner";
import Subscribe from "../components/CategoryPage/Subscribe";

const Category = () => {
  const breadcrumbs = [
    { label: "الصفحة الرئيسية", path: "/" },
    { label: "الفئات", path: "/category" },
  ];

  return (
    <div>
      {" "}
      {/* Breadcrumb Component with Title */}{" "}
      <Breadcrumb breadcrumbs={breadcrumbs} title="تحتوي أسهل علي خمس فئات" />{" "}
      <div>
        <SixSection />
      </div>{" "}
      <div>
        <SmallBanner />
      </div>{" "}
      <div>
        <Subscribe />
      </div>{" "}
    </div>
  );
};

export default Category;
