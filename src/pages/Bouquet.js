import React from "react";
import Breadcrumb from "../components/Breadcrumb"; // Adjust the import path as needed
import TeacherBook from "../components/BouquetPage/TeacherBook";
import SmallBanner from "../components/AboutPage/SmallBanner";
import PricingSection from "../components/BouquetPage/PricingSection";

const Bouquet = () => {
  const breadcrumbs = [
    { label: "الصفحة الرئيسية", path: "/" },
    { label: "باقات", path: "/bouquet" },
  ];

  return (
    <div>
      {" "}
      {/* Breadcrumb Component with Title */}{" "}
      <Breadcrumb breadcrumbs={breadcrumbs} title="باقات أسهل للمعلمين" />
      <div>
        <TeacherBook />
      </div>{" "}
      <div>
        <SmallBanner />
      </div>{" "}
      <div>
        <PricingSection />
      </div>{" "}
    </div>
  );
};

export default Bouquet;
