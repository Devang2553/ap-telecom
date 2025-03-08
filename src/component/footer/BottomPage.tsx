import { useState } from "react";
import { toast } from "react-toastify";
import "./footer.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const QuoteForm = () => {
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

  return (
    <div className="bg-white ">
      {/* Form Section */}

      <div className="max-w-7xl mx-auto px-4 py-10 bottom-40 mt-20">
        <h2 className="text-center text-2xl font-bold text-black mb-4">
          TO REQUEST A QUOTE PLEASE FILL OUT THE FORM
        </h2>
        {/* <p className="text-center text-gray-600 mb-8">
          At Muhiris, we believe in the power of community and creativity
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Form */}
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <h2 className="text-[#6C7275]  font-bold text-xs">FULL NAME</h2>
            <input
              name="fullName"
              type="text"
              placeholder="Your Name"
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  formik.touched.fullName &&
                  formik.errors.fullName &&
                  "border-red-500"
                }
                `}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Email</h2>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  formik.touched.email &&
                  formik.errors.email &&
                  "border-red-500"
                }
                `}
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Your number</h2>

            <input
              type="text"
              placeholder="Your number"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  formik.touched.phone &&
                  formik.errors.phone &&
                  "border-red-500"
                }
                `}
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Your message</h2>

            <textarea
              placeholder="Your message"
              name="message"
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  formik.touched.message &&
                  formik.errors.message &&
                  "border-red-500"
                }
                `}
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6645226574974!2d151.6645692!3d-32.890986999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733fad4c34f7c7%3A0xeb9d7d9b17623cbc!2sUnit%2016%2F27%20Minmi%20Rd%2C%20Wallsend%20NSW%202287%2C%20Australia!5e1!3m2!1sen!2sin!4v1741290417369!5m2!1sen!2sin"
              width="100%"
              height="500"
              allowFullScreen={false}
              loading="lazy"
              className="border rounded-lg"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default QuoteForm;
