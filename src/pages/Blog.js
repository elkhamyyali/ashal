import Breadcrumb from "../components/Breadcrumb";
import CardLearn from "../components/HomePage/CardLearn";

const Blog = () => {
  const breadcrumbs = [
    { label: "الصفحة الرئيسية", path: "/" },
    { label: "المدونات", path: "/blog" },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} title="شاهد و اعرف أكثر" />
      <div dir="rtl" lang="ar" className="m-3 p-10">
        <h1 className="font-bold text-2xl"> المدونات </h1>{" "}
        <p className="text-xl"> شاهد جميع مقالات أسهل </p>{" "}
      </div>{" "}
      <div
        dir="rtl"
        lang="ar"
        className="p-10 flex flex-col gap-6 md:flex-row md:justify-around"
      >
        <CardLearn />
        <CardLearn />
      </div>{" "}
      <div
        dir="rtl"
        lang="ar"
        className="p-10 flex flex-col gap-6 md:flex-row md:justify-around"
      >
        <CardLearn />
        <CardLearn />
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

export default Blog;
