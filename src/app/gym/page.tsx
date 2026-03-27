// app/gym/page.tsx
"use client";

const projOS = process.env.NEXT_PUBLIC_PROJ_OS || "#";
const projNOTSY = process.env.NEXT_PUBLIC_PROJ_NOTSY || "#";
const projAI = process.env.NEXT_PUBLIC_PROJ_AI || "#";
const projFeedback = process.env.NEXT_PUBLIC_PROJ_FEEDBACK || "#";

import { List } from "lucide-react";


export default function Gym() {
  return (
    <div className="bg-[#E1E1E1] min-h-screen flex flex-col items-center py-1 rounded-sm">
      {/* Heading */}
<span
  className="text-[14px] flex items-center gap-1 self-start "
  style={{
    fontFamily: "Verdana, Arial, sans-serif",
    marginLeft: "10px",
  }}
>
  Trainings
  <img
    src="https://img.icons8.com/ios-filled/50/list.png"
    alt="list icon"
    width={16}
    height={16}
    style={{
      position: "relative",
      top: "1px",
      cursor: "pointer",
      opacity: 0.9,
    }}
  />
</span>


      {/* Table (Codeforces style) */}
      <table
        className="w-[calc(100%-10px)]  mx-[1px] border border-gray-300 border-separate rounded-t-lg text-center shadow-sm bg-white"
        style={{
          fontFamily: "Verdana, Arial, sans-serif",
          borderSpacing: "0",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr className="bg-gray-100 text-black text-[14px]">
            <th className="border border-gray-300 w-[170px] h-[40px] rounded-tl-lg">
              Project Name
            </th>
            <th className="border border-gray-300 w-[98px]">GitHub Link</th>
            <th className="border border-gray-300 w-[64px]">Date Made</th>
            <th className="border border-gray-300 w-[88px]">Live Demo</th>
            <th className="border border-gray-300 w-[169px] rounded-tr-lg">
              Tech Stack & Problem Statement
            </th>
          </tr>
        </thead>

       <tbody className="text-[13px] text-gray-900">

  {/* 1 — Power Feedback System */}
  <tr className="hover:bg-gray-50 transition">
    <td className="border border-gray-300 h-[133px] align-middle font-semibold text-blue-900">
      Power Feedback System ⚡
    </td>
    <td className="border border-gray-300 align-middle">
      <a href={projFeedback} className="text-[#0000cc] underline" target="_blank">
        GitHub
      </a>
    </td>
    <td className="border border-gray-300 align-middle">2025</td>
    <td className="border border-gray-300 align-middle">
      <a
        href="https://www.linkedin.com/posts/activity-7319055580231348225-9myl?utm_source=share&utm_medium=member_desktop"
        className="text-[#0000cc] underline"
        target="_blank"
      >
        Preview
      </a>
    </td>
    <td className="border border-gray-300 align-middle px-2 text-[12.5px] leading-tight">
      <strong>PHP • MySQL • Tailwind</strong> — full-stack electricity grievance portal  
      with <strong>role-based dashboards</strong>, tracking workflows and tested validation flows.
    </td>
  </tr>

  {/* 2 — AI Study Buddy */}
  <tr className="hover:bg-gray-50 transition">
    <td className="border border-gray-300 h-[133px] align-middle font-semibold text-blue-900">
      AI Study Buddy 🤖
    </td>
    <td className="border border-gray-300 align-middle">
      <a href={projAI} className="text-[#0000cc] underline" target="_blank">
        GitHub
      </a>
    </td>
    <td className="border border-gray-300 align-middle">2025</td>
    <td className="border border-gray-300 align-middle">
      <a
        href="https://myai-project.onrender.com/"
        className="text-[#0000cc] underline"
        target="_blank"
      >
        Live
      </a>
    </td>
    <td className="border border-gray-300 align-middle px-2 text-[12.5px] leading-tight">
      <strong>Next.js + Gemini API</strong> — AI chatbot for learning, adaptive quizzes,  
      and optimized prompt-flow pipelines.
    </td>
  </tr>

  {/* 3 — NOTSY — Notes App */}
  <tr className="hover:bg-gray-50 transition">
    <td className="border border-gray-300 h-[133px] align-middle font-semibold text-blue-900">
      NOTSY — Notes App 📝
    </td>
    <td className="border border-gray-300 align-middle">
      <a href={projNOTSY} className="text-[#0000cc] underline" target="_blank">
        GitHub
      </a>
    </td>
    <td className="border border-gray-300 align-middle">2024</td>
    <td className="border border-gray-300 align-middle">
      <a
        href="https://notsyy.netlify.app/"
        className="text-[#0000cc] underline"
        target="_blank"
      >
        Live
      </a>
    </td>
    <td className="border border-gray-300 align-middle px-2 text-[12.5px] leading-tight">
      <strong>MERN Stack</strong> — simple and clean notes app with  
      <strong>MongoDB storage</strong>, Express backend, React UI & secure JWT auth.
    </td>
  </tr>

  {/* 4 — Disk Scheduling Simulator */}
  <tr className="hover:bg-gray-50 transition">
    <td className="border border-gray-300 h-[133px] align-middle font-semibold text-blue-900">
      Disk Scheduling Simulator 💽
    </td>
    <td className="border border-gray-300 align-middle">
      <a href={projOS} className="text-[#0000cc] underline" target="_blank">
        GitHub
      </a>
    </td>
    <td className="border border-gray-300 align-middle">2024</td>
    <td className="border border-gray-300 align-middle">
      <a
        href="https://rai-kriti.github.io/OS/"
        className="text-[#0000cc] underline"
        target="_blank"
      >
        Live
      </a>
    </td>
    <td className="border border-gray-300 align-middle px-2 text-[12.5px] leading-tight">
      <strong>JavaScript • HTML • Tailwind</strong> — interactive simulator  
      for OS algorithms: FCFS, SSTF, SCAN & C-SCAN with animated head movement.
    </td>
  </tr>

</tbody>


      </table>

      {/* Footer text */}
      <p
        className="mt-4 text-gray-700 text-[13px] italic"
        style={{ fontFamily: "Verdana, Arial, sans-serif" }}
      >
        🧠 This gym never closes — new platforms and profiles coming soon!
      </p>
    </div>
  );
}
