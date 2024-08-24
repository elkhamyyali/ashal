import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Ashal Logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#63518C] text-white" lang="ar" dir="ltr">
      <div className="relative z-10 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {" "}
          {/* Subscription Section */}{" "}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#F5CE6F]"> النشرة </h3>{" "}
            <p> أدخل بريدك الإلكتروني </p>{" "}
            <div className="flex">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="p-2 rounded-l-md w-full"
              />
              <button className="bg-[#F5CE6F] text-[#63518C] p-2 rounded-r-md">
                إشترك معنا{" "}
              </button>{" "}
            </div>{" "}
            <p className="text-xs">
              من خلال الاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا{" "}
            </p>{" "}
          </div>{" "}
          {/* Platform Information Section */}{" "}
          <div>
            <h3 className="text-lg font-bold text-[#F5CE6F]"> منصة أسهل </h3>{" "}
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  عن أسهل{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#" className="hover:underline">
                  قناة أسهل{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#" className="hover:underline">
                  تواصل معنا{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Services Section */}{" "}
          <div>
            <h3 className="text-lg font-bold text-[#F5CE6F]"> خدمات أسهل </h3>{" "}
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  الفئات{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#" className="hover:underline">
                  المعرفة{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#" className="hover:underline">
                  باقات المعلمين{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#" className="hover:underline">
                  شروط القبول{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            <li>
              <a href="#">
                {" "}
                <img src={Logo} alt="Ashal Logo" className="h-32" />{" "}
              </a>{" "}
            </li>{" "}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-white">
                <FaLinkedin size={24} />{" "}
              </a>{" "}
              <a href="#" className="text-white">
                <FaInstagram size={24} />{" "}
              </a>{" "}
              <a href="#" className="text-white">
                <FaFacebook size={24} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Social Media, Logo, and Copyright */}{" "}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xs">
            جميع الحقوق محفوظة لدى منصة أسهل للتعليم الالكتروني© 2024{" "}
          </p>{" "}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-[#F5CE6F] hover:text-white">
              <span className="sr-only"> Back to top </span>⬆{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
