"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

// Todo: Make sure all the contact data is right before deploying

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section id="contact" ref={ref} className="scroll-mt-28">
      <SectionHeading> Contact Me </SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:frostbitezebra@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form>
        
      </form>
    </motion.section>
  );
};
export default Contact;
