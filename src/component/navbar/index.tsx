import React from "react";
import "./style.css";
import { LogoIcon } from "../../assets/logo";
import { PhoneIcon } from "../../assets/PhoneIcon";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const listArray = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Service",
      href: "/our-services",
    },
    {
      id: 3,
      title: "About",
      href: "/about-us",
    },
    {
      id: 4,
      title: "Contact us",
      href: "/contact",
    },
    {
      id: 5,
      title: "Testimonial",
      href: "/testimonials",
    },
  ];

  const location=useLocation()
  console.log(location.pathname,"location")
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
        {listArray?.map((x) => (
          <a
            key={x.id}
            href={x.href}
            className={`${location.pathname==x.href?"text-[#0A5EB0]":""} hover:text-[#0A5EB0]  duration-200 cursor-pointer`}
          >
            {x.title}
          </a>
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
