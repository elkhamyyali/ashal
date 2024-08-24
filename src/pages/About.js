// src/pages/AboutPage.js
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Firstpart from "../components/AboutPage/Firstpart";
import SmallBanner from "../components/AboutPage/SmallBanner";
import CardsPart from "../components/AboutPage/CardsPart";

const About = () => {
  const breadcrumbs = [
    { label: "الصفحة الرئيسية", path: "/" },
    { label: "عن أسهل", path: "/about" },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} title="تعرف أكثر علي أسهل" />
      <div>
        <Firstpart />
      </div>{" "}
      <div>
        <SmallBanner />
      </div>{" "}
      <div>
        <CardsPart />
      </div>{" "}
    </div>
  );
};

export default About;
