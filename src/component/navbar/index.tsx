import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/LogoIcon";
import { PhoneIcon } from "../../assets/PhoneIcon";
import "./style.css";
import { Hamburger } from "../../assets/Hamburger";
import { CloseIcon } from "../../assets/CloseIcon";
import { SideIconHomePage } from "../../assets/SideIconHomePage";
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
      <div className="lg:hidden">
        {isopen ? (
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
        className="logo cursor-pointer hidden lg:block"
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoIcon />
      </div>
      <div className="hidden lg:flex items-center  gap-14">
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
      <div className=" lg:hidden">
        <LogoIcon className="w-52" />
        {/* <SideIconHomePage height="90px" width="auto" className=" aspect-auto bg-black" /> */}
      </div>
      <a href="tel:+61469827679">
        <button
          // className=" pl-2 pr-2 lg:pl-[44px] lg:pr-[44px] pt-2 pb-2 lg:pt-[12px] lg:pb-[12px] "
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
          <PhoneIcon /> <span className="hidden lg:block">Call </span>
        </button>
      </a>

      {!isopen && (
        <div>
          <ul className="fixed   w-full flex md:hidden flex-col  md:pt-5  py-5 h-screen top-0  pt-[20%]  left-0  bg-[#0A5EB0]  items-center gap-5 z-50">
            {listArray.map((x, index) => (
              <Link
                onClick={() => setIsopen(true)}
                key={x.id}
                to={x.href}
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                <li
                  className={`text-center cursor-pointer py-1 text-white font-semibold pb-3 text-2xl md:text-base duration-300 w-full ${
                    index !== listArray.length - 1 ? "border-b" : ""
                  }`}
                >
                  {" "}
                  {x.title}
                </li>
              </Link>
            ))}
            <div className="absolute top-10 left-5">
              <div onClick={() => setIsopen(true)}>
                <CloseIcon />
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};
