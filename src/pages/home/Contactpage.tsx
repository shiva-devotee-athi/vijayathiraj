import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

const Contactpage: React.FC = () => {
  const dialNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };
  return (
    <section
      id="contact-section"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section contact"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-[#575757] dark:text-[#A6A6A6]">
            Contact
          </h1>
          <h2 className="mb-4 text-black dark:text-white relative z-1">Contact Me</h2>
          <p className="text-gray-600 dark:text-white/45 mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 col-span-12 gap-8">
            <div className="bg-white dark:bg-[#1d1e22] dark:text-gray-400 px-2 py-4 sm:px-8 sm:py-8 rounded-lg shadow-lg w-full info">
              <div className=" flex items-center vj-pf-contact-details">
                <LuMapPin className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h2 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  Location:
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                10A/39 Perumalpatti, Srivilliputtur, India
              </p>

              <div className="flex items-center vj-pf-contact-details">
                <BsEnvelope className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h3 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  Email:
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                vijayathiraj99@gmail.com
              </p>

              <div
                className="flex items-center cursor-pointer vj-pf-contact-details"
                onClick={() => dialNumber("918870762077")}
              >
                <IoPhonePortraitOutline className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h4 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  Call:
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-400 cursor-pointer hover:text-blue-600 transition">
                +91 8870762077
              </p>

              {/* Google Maps Embed */}
              <iframe
                title="Contact Address Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.4357405000003!2d77.62873034853568!3d9.519893899188508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dde538106b27%3A0xfb987ddf4df7167d!2sGaurava%20Naidu%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1661324000630!5m2!1sen!2sin"
                className="w-full h-72 mt-4 rounded-lg shadow-lg border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 gap-8">
            <form
              id="contact-form"
              className="w-full h-full bg-white dark:bg-[#1d1e22] px-2 py-4 sm:px-8 sm:py-8 shadow-lg rounded-lg php-email-forms"
            >
              <div className="flex">
                <h3 className="text-lg lg:text-2xl text-gray-800 dark:text-white">
                  Reach Me
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212]  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212]  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Subject
                </label>
              </div>

              <div>
                <label
                  className="mb-3 block text-gray-700 font-semibold dark:text-gray-100"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="p-2 w-full rounded-md bg-gray-100 text-black dark:bg-[#121212]  dark:text-white"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              <div className="">
                <div className="text-gray-500 hidden">Loading</div>
                <div className="text-red-500 hidden">Error sending message</div>
                <div className="text-green-500 hidden">
                  Your message has been sent. Thank you!
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
