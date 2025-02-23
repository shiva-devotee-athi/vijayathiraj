import React from "react";
import { motion } from "framer-motion";
import image_0 from "@/assets/images/hoppies/image.jpg";
import image_1 from "@/assets/images/hoppies/image-1.jpg";
import image_2 from "@/assets/images/hoppies/image-2.jpg";
import image_3 from "@/assets/images/hoppies/image-3.jpg";
import image_4 from "@/assets/images/hoppies/image-4.jpg";
import image_5 from "@/assets/images/hoppies/image-5.jpg";
import image_6 from "@/assets/images/hoppies/image-6.jpg";
import image_7 from "@/assets/images/hoppies/image-7.jpg";
import image_8 from "@/assets/images/hoppies/image-8.jpg";
import image_9 from "@/assets/images/hoppies/image-9.jpg";
import image_10 from "@/assets/images/hoppies/image-10.jpg";
import image_11 from "@/assets/images/hoppies/image-11.jpg";

const hoppieImage = [
  {
    title: "naruto",
    image: image_0,
  },
  {
    title: "sasuke",
    image: image_1,
  },
  {
    title: "kakashi",
    image: image_2,
  },
  {
    title: "sakura",
    image: image_3,
  },
  {
    title: "Minato",
    image: image_4,
  },
  {
    title: "jiraiya",
    image: image_5,
  },
  {
    title: "itachi",
    image: image_6,
  },
  {
    title: "konan",
    image: image_7,
  },
  {
    title: "nagato",
    image: image_8,
  },
  {
    title: "yagiko",
    image: image_9,
  },
  {
    title: "shikamaro",
    image: image_10,
  },
  {
    title: "lee",
    image: image_11
  },
];

const ChunkedArrayDisplay = () => {
  const arr = hoppieImage;
  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="grid gap-4">
          {chunk.map(({ title, image }, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  filter: "blur(0px)",
                  height: "auto",
                  translateY: 0,
                  transition: { delay: i * 0.2 },
                }),
                hidden: { opacity: 0, filter: "blur(0px)", translateY: 50 },
              }}
              key={index}
            >
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt={title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Hoppiespage: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-transparent vj-pf-section">
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-black/20 dark:text-white/10">
            Hoppies
          </h1>
          <h2 className="mb-4 text-black dark:text-white">Happiness</h2>
          <p className="text-gray-600 dark:text-white/45 mt-4">
            Here, you can explore the various projects and code repositories
            I've been working on. As a passionate developer, I'm constantly
            striving to learn and create new software solutions. Feel free to
            browse through my repositories and provide feedback or even
            collaborate if you find something interesting.
          </p>
        </div>
        {ChunkedArrayDisplay()}
      </div>
    </section>
  );
};

export default Hoppiespage;
