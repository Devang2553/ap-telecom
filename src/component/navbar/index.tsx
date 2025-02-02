import { useLocation, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/logo";
import { PhoneIcon } from "../../assets/PhoneIcon";
import "./style.css";
import { Hamburger } from "../../assets/Hamburger";
import { CloseIcon } from "../../assets/CloseIcon";
interface NavbarType {
  isopen: boolean;
  setIsopen: any;
}
export const Navbar: React.FC<NavbarType> = ({ isopen, setIsopen }) => {
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

  const location = useLocation();
  const navigate = useNavigate();

  const HandleNav = () => {
    setIsopen(!isopen);
  };
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
      <div className="md:hidden">
        {!isopen ? (
          <div onClick={HandleNav}>
            <Hamburger />
          </div>
        ) : (
          <div onClick={HandleNav}>
            <CloseIcon />
          </div>
        )}
      </div>
      <div
        className="logo cursor-pointer hidden md:block"
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoIcon />
      </div>
      <div
      className="hidden md:flex items-center  gap-14"
      
      >
        {listArray?.map((x) => (
          <a
            key={x.id}
            href={x.href}
            className={`${
              location.pathname == x.href ? "text-[#0A5EB0]" : ""
            } hover:text-[#0A5EB0]  duration-200 cursor-pointer`}
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
