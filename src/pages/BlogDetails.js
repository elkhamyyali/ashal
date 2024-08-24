import React from "react";
import MainImage from "../components/BlogDetailsPage/MainImage";
import Breadcrumb from "../components/Breadcrumb";
import ArticlesContent from "../components/BlogDetailsPage/ArticlesContent";
import ArticlesContentDetails from "../components/BlogDetailsPage/ArticlesContentDetails";
import CardLearn from "../components/HomePage/CardLearn";

const BlogDetails = () => {
  const breadcrumbs = [
    { label: "الصفحة الرئيسية", path: "/" },
    { label: "المدونات", path: "/blog" },
  ];

  return (
    <div>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="أساليب ذكية في التدريب الإلكتروني"
      />
      <MainImage />
      <div>
        <ArticlesContent />
      </div>{" "}
      <div>
        <ArticlesContentDetails />
      </div>{" "}
      <div dir="rtl" lang="ar" className="m-3 p-10">
        <h1 className="font-bold text-2xl mb-4"> المدونات </h1>{" "}
        <p className="text-xl"> شاهد جميع مقالات أسهل </p>{" "}
      </div>{" "}
      <div
        dir="rtl"
        lang="ar"
        className="p-10 flex flex-col gap-6 md:flex-row md:justify-around mb-20"
      >
        <CardLearn />
        <CardLearn />
      </div>{" "}
    </div>
  );
};

export default BlogDetails;
