import React from "react";
import "./style.css";
import { LogoIcon } from "../../assets/logo";
import { PhoneIcon } from "../../assets/PhoneIcon";

export const Navbar = () => {
  const array = ["Home", "Service", "About", "Contact us", "Testimonial"];
  return (
    <div
      className="navbar "
      style={{
        display: "flex",
        alignItems: "center",
        height: "100px",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">
        <LogoIcon />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {array?.map((x) => (
          <p className="hover:text-[#0A5EB0]  duration-200 cursor-pointer">
            {x}
          </p>
        ))}
      </div>
      <button
        style={{
          padding: "12px 44px",
          //   width: "142px",
          //   height:"48px",
          borderRadius: "50px",
          backgroundColor: "#0A5EB0",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          gap: "10px",
          border: "0px",
        }}
      >
        <PhoneIcon /> Call
      </button>
    </div>
  );
};
