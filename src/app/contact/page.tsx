// app/contact/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-[#E1E1E1] min-h-screen flex flex-col items-center justify-center py-10">
      {/* Header */}
      <h1
        className="text-[20px] font-bold text-[#3B5998] mb-6 tracking-wide"
        style={{ fontFamily: "Verdana, Arial, sans-serif" }}
      >
        Let’s Get In Touch 💬
      </h1>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-gray-300 rounded-xl shadow-md p-10 flex flex-col items-center justify-center gap-8 w-[380px]"
      >
        {/* Mail */}
        <motion.a
          href="mailto:raikriti628@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 text-[#0000cc] hover:text-[#551a8b] transition"
        >
          <i className="fa-solid fa-envelope text-[40px]"></i>
          <span
            className="text-[14px] font-medium"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            Send me an Email
          </span>
        </motion.a>

        {/* Divider */}
        <div className="w-10 h-[1px] bg-gray-300"></div>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/rai-kriti/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 text-[#0000cc] hover:text-[#551a8b] transition"
        >
          <i className="fa-brands fa-linkedin text-[40px]"></i>
          <span
            className="text-[14px] font-medium"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            Visit my LinkedIn
          </span>
        </motion.a>
      </motion.div>

      {/* Footer note */}
      <motion.p
        className="mt-6 text-gray-700 text-[13px] italic text-center"
        style={{ fontFamily: "Verdana, Arial, sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        🚀 Whether it&apos;s code, chai, or collaboration — I&apos;m just one message away!

      </motion.p>
    </div>
  );
}
