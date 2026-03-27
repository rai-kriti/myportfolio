"use client";

import Image from "next/image";
import profileImage from "@/image.png";

// Fetch links from ENV with safe fallback
const linkedin = process.env.NEXT_PUBLIC_LINK_LINKEDIN || "#";
const github = process.env.NEXT_PUBLIC_LINK_GITHUB || "#";
const leetcode = process.env.NEXT_PUBLIC_LINK_LEETCODE || "#";
const gfg = process.env.NEXT_PUBLIC_LINK_GFG || "#";
const codeforces = process.env.NEXT_PUBLIC_LINK_CODEFORCES || "#";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-[300px]">
      
      {/* Header */}
      <div className="bg-white border border-gray-300 border-b-0 rounded-t-md shadow-sm 
                      text-[15px] font-[Verdana,Arial,sans-serif] font-extrabold text-[#3B5998] 
                      p-[0_0_4.5px_7.5px]">
        → rai-kriti
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-300 flex p-2">

        {/* Left Column */}
        <div className="flex-1 text-[11.2px] font-[Verdana,Arial,sans-serif] text-[#0000CC] ">

          <span className="inline-flex items-center gap-1 text-[11.2px] text-[#000000]">
            <img src="/rating.png" className="w-3 h-3" />
            Rating: 402
          </span>

          <span className="inline-flex items-center gap-1 text-[11.2px] text-[#000000]">
            <img src="/star.png" className="w-3 h-3" />
            Contribution: 0
          </span>

          {/* Links */}
          <ul className="list-disc list-inside mt-1">
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline visited:text-[#551A8B]">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline visited:text-[#551A8B]">
                Github
              </a>
            </li>
            <li>
              <a href={leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline visited:text-[#551A8B]">
                Leetcode
              </a>
            </li>
            <li>
              <a href={gfg} target="_blank" rel="noopener noreferrer" className="hover:underline visited:text-[#551A8B]">
                GeeksForGeeks
              </a>
            </li>
            <li>
              <a href={codeforces} target="_blank" rel="noopener noreferrer" className="hover:underline visited:text-[#551A8B]">
                Codeforces
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline visited:text-[#551A8B]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Avatar */}
        <div className="ml-3 flex-shrink-0 text-center">
          <Image
            src={profileImage}
            alt="rai-kriti"
            width={132}
            height={132}
            className="h-[132px] w-[132px] rounded-full border border-gray-300 object-cover"
            priority
          />
          <p className="text-gray-400 text-[11px]">rai-kriti</p>
        </div>

      </div>
    </div>
  );
}
