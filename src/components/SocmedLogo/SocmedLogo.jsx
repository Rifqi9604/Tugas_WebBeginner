import React from "react";
import insta from "./instagram.png";
import LinkedIn from "./linkedin.png";

export const SocmedLogo = () => {
  return (
    <div className="flex flex-row pt-6 gap-3 ">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <div className="w-[28px] h-[28px] rounded-[10px] bg-[#e5e5e5] flex items-center justify-center hover:bg-gradient-to-br from-[#8A3AB9] via-[#DD2A7B] to-[#F58529] transition duration-300 ease-in-out transform hover:scale-125">
          <img src={insta} alt="Instagram" className="w-[28px] h-[28px] font-extrabold" />
        </div>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <div className="w-[28px] h-[28px] rounded-10px bg-[#e5e5e5] flex items-center justify-center hover:bg-[#0077B5] transition duration-300 ease-in-out transform hover:scale-125">
          <img src={LinkedIn} alt="LinkedIn" className="w-[28px] h-[28px]" />
        </div>
      </a>
    </div>
  );
};
