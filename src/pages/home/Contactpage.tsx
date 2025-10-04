import React, { useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomToast } from "@/components/toast/CustomToast";
import { toast } from "react-toastify";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const slideUpAndFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contactpage: React.FC = () => {
  const dialNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send("Gmail", "template_bqqf5zo", data, {
        publicKey: "7imVzaREIb8AOD83P",
      });

      toast((props) => (
        <CustomToast
          {...props}
          toastProps={{
            ...props.toastProps,
            className: "bg-transparent",
            style: { background: "transparent" },
          }}
          type="success"
          title="Message Sent!"
          description="Your message has been delivered."
        />
      ));

      reset();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast((props) => (
          <CustomToast
            {...props}
            type="error"
            title="Failed to Send"
            description="Please try again later."
          />
        ));
        return;
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-bottom-section contact"
    >
      <div className="container !pb-4 lg:pb-0">
        <div className="heading-section mb-12 text-center">
          <motion.h1
            className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Contact")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Contact Me")}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-white/45 mt-4"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t(
              "Your scroll, your jutsu, my inbox. Let's form an alliance and conquer the unknown, together!"
            )}
          </motion.p>
        </div>

        {/* Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 col-span-12 gap-8">
            <div className="bg-white dark:bg-[#1d1e22] dark:text-gray-400 px-2 py-4 sm:px-8 sm:py-8 rounded-lg shadow-lg w-full info">
              <motion.div
                className=" flex items-center vj-pf-contact-details"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <LuMapPin className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h2 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  {t("Location")}:
                </h2>
              </motion.div>
              <motion.p
                className="text-gray-700 dark:text-gray-400"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t("Native")}: Srivilliputtur, Virudhunagar | {t("Current")}: Chennai
              </motion.p>

              <motion.div
                className="flex items-center vj-pf-contact-details"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <BsEnvelope className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h3 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  {t("Email")}:
                </h3>
              </motion.div>
              <motion.p
                className="text-gray-700 dark:text-gray-400"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                vijayathiraj99@gmail.com
              </motion.p>

              <motion.div
                className="flex items-center cursor-pointer vj-pf-contact-details"
                onClick={() => dialNumber("918870762077")}
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <IoPhonePortraitOutline className="w-8 h-8 text-gray-800 dark:text-amber-500 contact-icon" />
                <h4 className="text-lg font-bold text-amber-600 dark:text-amber-500">
                  {t("Call")}:
                </h4>
              </motion.div>
              <motion.p
                className="text-gray-700 dark:text-gray-400 cursor-pointer hover:text-blue-600 transition"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                +91 8870762077
              </motion.p>

              {/* Google Maps Embed */}
              <iframe
                title="Contact Address Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.4357405000003!2d77.62873034853568!3d9.519893899188508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dde538106b27%3A0xfb987ddf4df7167d!2sGaurava%20Naidu%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1661324000630!5m2!1sen!2sin"
                className="w-full h-72 mt-4 rounded-lg shadow-lg border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <motion.div
            className="lg:col-span-7 col-span-12 gap-8"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full bg-white dark:bg-[#1d1e22] px-2 py-4 sm:px-8 sm:py-8 shadow-lg rounded-lg php-email-forms"
            >
              <div className="flex">
                <h3 className="text-lg lg:text-2xl text-gray-800 dark:text-white">
                  {t("Reach Me")}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212] border-0 border-b-2 appearance-none dark:text-white peer focus:outline-none focus:ring-0
                            ${
                              errors.name
                                ? "border-red-500 dark:border-red-600 focus:border-red-500 dark:focus:border-red-600"
                                : "border-gray-300 dark:border-gray-600 focus:border-amber-600 dark:focus:border-amber-500"
                            }
                      `}
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    {t("Name")}
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    {...register("email")}
                    className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212] border-0 border-b-2 appearance-none dark:text-white peer focus:outline-none focus:ring-0
                            ${
                              errors.name
                                ? "border-red-500 dark:border-red-600 focus:border-red-500 dark:focus:border-red-600"
                                : "border-gray-300 dark:border-gray-600 focus:border-amber-600 dark:focus:border-amber-500"
                            }
                      `}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    {t("Email")}
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-[#121212] border-0 border-b-2 appearance-none dark:text-white peer focus:outline-none focus:ring-0
                            ${
                              errors.name
                                ? "border-red-500 dark:border-red-600 focus:border-red-500 dark:focus:border-red-600"
                                : "border-gray-300 dark:border-gray-600 focus:border-amber-600 dark:focus:border-amber-500"
                            }
                      `}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  {t("Subject")}
                </label>
              </div>

              <div>
                <label
                  className="mb-3 block text-gray-700 font-semibold dark:text-gray-100"
                  htmlFor="message"
                >
                  {t("Message")}
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="p-2 w-full rounded-md bg-gray-100 text-black dark:bg-[#121212]  dark:text-white"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              <ul className="space-y-1 list-disc list-inside text-xs text-red-500">
                {errors.name && <li>{errors.name.message}</li>}
                {errors.email && <li>{errors.email.message}</li>}
                {errors.subject && <li>{errors.subject.message}</li>}
                {errors.message && <li>{errors.message.message}</li>}
              </ul>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!isDirty || !isValid || loading}
                  className={`w-full px-4 py-2 rounded-md transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-amber-700 hover:bg-amber-800 text-white"
                  }`}
                >
                  {loading ? t("Sending...") : t("Send Message")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
