import React from "react";

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-[#000a2d] px-8 md:px-[300px] flex md:flex-row flex-col items-start space-y-6 md:space-y-0 justify-between text-sm md:text-md py-8 ">
      <div className="flex flex-col text-[#adadad]">
        <p>Feature Blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>
      </div>
      <div className="flex flex-col text-[#adadad]">
        <p>Forums</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>
      <div className="flex flex-col text-[#adadad]">
        <p>Privacy Policy</p>
        <p>About us</p>
        <p>Terms and Conditions</p>
        <p>Terms and Services</p>
      </div>
    </div>
    <p className="py-2 pb-6 text-center text-[#adadad] bg-[#000a2d] text-sm">All Right Reserved  @Daily Hunts 2023</p>

    </>
  );
};

export default Footer;
