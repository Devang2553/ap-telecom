import { useEffect, useRef } from "react";
import { AddressIcon } from "../../assets/AddressIcon";
import { EmailIcon } from "../../assets/EmailIcon";
import { LockIcon } from "../../assets/LockIcon";
import { MoneyBackIcon } from "../../assets/MoneyBackIcon";
import { PhoneIcon } from "../../assets/PhoneIcon";
import ServiceBG from "../../assets/secBG.jpeg";
import { ShippingIcon } from "../../assets/ShippingIcon";
import { HeroSection } from "../../component/mainSection";

const ContactUsPage = () => {
  const data = [
    {
      id: 1,
      icon: <AddressIcon />,
      title: "Address",
      description: `  234 Hai Trieu, Ho Chi Minh City,\n Viet Nam`,
    },
    {
      id: 2,
      icon: <PhoneIcon color="black" />,
      title: "Contact Us",

      description: "+84 234 567 890",
    },
    {
      id: 3,
      icon: <EmailIcon />,
      title: "Email",

      description: "hello@3legant.com",
    },
  ];
  const data2 = [
    {
      id: 1,
      icon: <ShippingIcon />,
      title: "Free Shipping",
      description: `Order above $200`,
    },
    {
      id: 2,
      icon: <MoneyBackIcon />,
      title: "Money-back",

      description: "30 days guarantee",
    },
    {
      id: 3,
      icon: <LockIcon />,
      title: "Secure Payments",

      description: "Secured by Stripe",
    },
    {
      id: 4,
      icon: <PhoneIcon color="black" size="25" />,
      title: "24/7 Support",

      description: "Phone and Email support",
    },
  ];

  //   const { values, handleChange, handleBlur, handleSubmit, touched } = useFormik(
  //     {
  //       initialValues: {
  //         full_name: "",
  //         email: "",
  //         message: "",
  //       },
  //       onSubmit: () => {},
  //     }
  //   );

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the Google Maps API is available
    if (!window.google || !window.google.maps) return;

    // Set your desired location (latitude & longitude)
    const myLocation = { lat: 28.6139, lng: 77.209 }; // Example: New Delhi, India

    // Initialize the map
    const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
      center: myLocation,
      zoom: 14,
    });

    // Add a marker to the location
    new google.maps.Marker({
      position: myLocation,
      map,
      title: "Our Location",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection
        backgroundImage={ServiceBG}
        title="Contacts"
        subtitle="Home ideas and design inspiration"
        
      />

      {/* Services Section */}
      <div className="mt-[10px] ">
        <div>
          <h1 className="text-[40px] font-bold text-center mb-10">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between md:w-full  md:px-5 gap-5">
            {data.map((x) => (
              <div
                key={x.id}
                className="bg-[#F3F5F7] min-w-[410px]  h-40 flex flex-col items-center gap-3 justify-center"
              >
                {x.icon}
                <h2 className="  text-[#0A5EB0] font-bold">
                  {x.title.toLocaleUpperCase()}
                </h2>
                <p className="text-center">{x.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col md:flex-row  items-center justify-between px-7 md:px-10 ">
            <div className="md:w-[48%] w-full">
              <form action="POST">
                <div className="flex flex-col gap-3 ">
                  <h2 className="text-[#6C7275]  font-bold text-xs">
                    FULL NAME
                  </h2>
                  <input
                    type="text"
                    className="w-full h-10  border pl-3 rounded-md outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-5 md:mt-3">
                  <h2 className="text-[#6C7275]  font-bold text-xs">
                    EMAIL ADDRESS
                  </h2>
                  <input
                    type="email"
                    className="w-full h-10  border pl-3 rounded-md outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-5 md:mt-3">
                  <h2 className="text-[#6C7275]  font-bold text-xs">MESSAGE</h2>
                  <textarea
                    rows={5}
                    // type="text"
                    className="w-full   border pl-3 rounded-md outline-none"
                    placeholder="Your Message"
                  />
                </div>
                <div>
                  <button
                    className="bg-[#0A5EB0] text-white w-full md:w-fit   rounded-lg mt-10"
                    style={{ padding: "6px 40px" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10 w-full md:w-[48%] h-[550px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937499306!2d77.06889954999999!3d28.5272182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1cb5c1e4828b%3A0x3a7b5b81e3f3b1b5!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-5 gap-5 my-12">
            {data2.map((x) => (
              <div
                key={x.id}
                className="bg-[#F3F5F7] w-full md:min-w-[262px]  h-56 flex flex-col items-center md:items-start md:pl-5 gap-3 justify-center"
              >
                {x.icon}
                <h2 className="font-medium">{x.title}</h2>
                <p className="text-center text-[#6C7275] text-sm">
                  {x.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
