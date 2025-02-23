import { motion } from "framer-motion";

export const FadeInUp = ({ children }: { children: React.ReactElement }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 250 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeFromRight = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { translateX: 0 },
        hidden: { translateX: 350 },
      }}
    >
      {children}
    </motion.div>
  );
};
