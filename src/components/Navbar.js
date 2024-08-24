import React, { useState } from "react";
import LogoAshal from "../assets/logoAshal.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "../assets/menu.png";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      className="shadow-sm py-2"
      style={{
        background:
          "linear-gradient(90deg, #FFFFFF 0%, rgba(99, 100, 100, 0.27) 60.46%, #FFFFFF 100%)",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {" "}
        {/* Logo */}{" "}
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#63518C] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            إنشاء حساب{" "}
          </button>{" "}
          <button className="border border-[#755DA5] text-[#755DA5] px-4 py-2 rounded-md hover:bg-purple-100">
            تسجيل دخول{" "}
          </button>{" "}
        </div>{" "}
        {/* Desktop Links and Buttons */}{" "}
        <div className="hidden md:flex space-x-8 ">
          <Link to="/blog" className="text-gray-600 hover:text-purple-600">
            المدونة{" "}
          </Link>{" "}
          <Link to="/category" className="text-gray-600 hover:text-purple-600">
            الفئات{" "}
          </Link>{" "}
          <Link to="/bouquet" className="text-gray-600 hover:text-purple-600">
            الباقات{" "}
          </Link>{" "}
          <Link to="/about" className="text-gray-600 hover:text-purple-600">
            عن أسهل{" "}
          </Link>{" "}
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            الرئيسية{" "}
          </Link>{" "}
        </div>{" "}
        <div className="md:hidden flex items-center ml-3">
          <button onClick={toggleSidebar}>
            <img src={Menu} alt="" />
          </button>{" "}
        </div>{" "}
        {/* Hamburger Icon for Mobile */}{" "}
        <div className="flex items-center space-x-4 mr-3">
          <img src={LogoAshal} alt="Logo" className="h-14" />
        </div>{" "}
        {/* Sidebar */}{" "}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform transform ${
            sidebarOpen ? "-translate-x-0" : "-translate-x-full"
          } w-64 z-50`}
        >
          <div className="p-4 flex items-center justify-between">
            <img src={LogoAshal} alt="Logo" className="h-14" />
            <button onClick={toggleSidebar}>
              <FaTimes className="text-2xl text-gray-600 hover:text-purple-600" />
            </button>{" "}
          </div>{" "}
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600"
              onClick={toggleSidebar}
            >
              الرئيسية{" "}
            </Link>{" "}
            <Link
              to="/about"
              className="text-gray-600 hover:text-purple-600"
              onClick={toggleSidebar}
            >
              عن أسهل{" "}
            </Link>{" "}
            <Link
              to="/bouquet"
              className="text-gray-600 hover:text-purple-600"
              onClick={toggleSidebar}
            >
              الباقات{" "}
            </Link>{" "}
            <Link
              to="/category"
              className="text-gray-600 hover:text-purple-600"
              onClick={toggleSidebar}
            >
              الفئات{" "}
            </Link>{" "}
            <Link
              to="/blog"
              className="text-gray-600 hover:text-purple-600"
              onClick={toggleSidebar}
            >
              المدونة{" "}
            </Link>{" "}
            <button className="bg-[#63518C] text-white px-4 py-2 rounded-md hover:bg-purple-700">
              إنشاء حساب{" "}
            </button>{" "}
            <button className="border border-[#755DA5] text-[#755DA5] px-4 py-2 rounded-md hover:bg-purple-100">
              تسجيل دخول{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
