import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AddressIcon } from "../../assets/AddressIcon";
import { EmailIcon } from "../../assets/EmailIcon";
import { PhoneIcon } from "../../assets/PhoneIcon";
import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";

const ContactUsPage = () => {
  const data = [
    {
      id: 1,
      icon: <AddressIcon />,
      title: "Address",
      description: ` 27 Minmi Rd, Wallsend NSW 2287`,
    },
    {
      id: 2,
      icon: <PhoneIcon color="black" />,
      title: "Contact Us",

      description: " +61 469 827 679 ",
    },
    {
      id: 3,
      icon: <EmailIcon />,
      title: "Email",

      description: "aptelecomp@gmail.com ",
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

  const [, setSubmitted] = useState(false);

  const notify = () => toast.success("Thank you! Your message has been sent.");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: "", // Full Name
      email: "", // Email
      message: "", // Message
      phone: "", // Hidden Phone field (if needed)
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("entry.124381670", values.fullName);
      formData.append("entry.319344401", values.email);
      formData.append("entry.493923015", values.message);
      formData.append("entry.899288621", values.phone); // Hidden input
      console.log(formData);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfr7j9NpjL-yyuEPZbjEb5WsYHZy_doDcWPxO6zIlilTyyaPQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setSubmitted(true);
      resetForm(); // Reset form fields after submission
      notify();
    },
  });



    useEffect(() => {
    const initMap = () => {
      const wallsend = { lat: -32.898874, lng: 151.636672 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: wallsend,
      });

      new window.google.maps.Marker({
        position: wallsend,
        map,
        title: "Your Custom Location",
        icon: {
          url: "https://yourdomain.com/path-to-your-icon.png", // Replace with your icon URL
          scaledSize: new window.google.maps.Size(50, 50), // Resize icon
        },
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      document.head.appendChild(script);
      script.onload = initMap;
    } else {
      initMap();
    }
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
                className="bg-[#F3F5F7] min-w-[410px]  h-40 flex flex-col items-center gap-3 justify-center hover:bg-[#d7dde2] duration-500 cursor-pointer"
                onClick={() => {
                  if (x.id == 1) {
                    window.open(
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6645226574974!2d151.6645692!3d-32.890986999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733fad4c34f7c7%3A0xeb9d7d9b17623cbc!2sUnit%2016%2F27%20Minmi%20Rd%2C%20Wallsend%20NSW%202287%2C%20Australia!5e1!3m2!1sen!2sin!4v1741290417369!5m2!1sen!2sin",
                      "_blank"
                    );
                  } else if (x.id == 2) {
                    window.open("tel:+919876543210");
                  } else if (x.id == 3) {
                    window.open(
                      "mailto:aptelecomp@gmail.com?subject=Hello&body=I want to connect with you."
                    );
                  }
                }}
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
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-3">
                  <label className="text-[#6C7275] font-bold text-xs">
                    FULL NAME
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    className={`w-full h-10 border pl-3 rounded-md outline-none ${
                      formik.touched.fullName &&
                      formik.errors.fullName &&
                      "border-red-500"
                    }`}
                    placeholder="Your Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.fullName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[#6C7275] font-bold text-xs">
                    EMAIL ADDRESS
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={`w-full h-10 border pl-3 rounded-md outline-none
                      ${
                        formik.touched.email &&
                        formik.errors.email &&
                        "border-red-500"
                      }
                      `}
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="hidden">
                  <input
                    name="phone"
                    type="tel"
                    className="w-full h-10 border pl-3 rounded-md outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[#6C7275] font-bold text-xs">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className={`w-full border pl-3 rounded-md outline-none ${
                      formik.touched.message &&
                      formik.errors.message &&
                      "border-red-500"
                    }`}
                    placeholder="Your Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#0A5EB0] text-white w-full md:w-fit rounded-lg"
                  style={{ padding: "6px 40px" }}
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="my-10 w-full md:w-[48%] h-[550px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53599.55364148769!2d151.61607222062514!3d-32.8989058445723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7338dc137b0a09%3A0x5017d681632f620!2sWallsend%20NSW%202287%2C%20Australia!5e0!3m2!1sen!2sin!4v1745512461028!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center justify-between w-full px-5 gap-5 my-12">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
