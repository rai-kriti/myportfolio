// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Header() {
  return (
    <header className=" max-w-[1200px] mx-auto px-6 flex justify-between items-center   border-gray-300 bg-white  h-[65px]">
      {/* Left side: Logo */}
      <div className="flex items-center h-full">
        <Link href="/" className="flex items-center h-full mt-4">
          <Image
            src="/kflogo.png"
            alt="KODEFORCES Logo"
            width={278}
            height={65}
            priority
          />
        </Link>
      </div>

      {/* Right side: 2 rows stacked, aligned by separator */}
      <div className="flex items-center h-full">
        <div className="flex flex-col justify-center h-full">
          {/* Top row */}
          <div className="flex items-center justify-center text-[14px] leading-none">
            <Link
              href="mailto:raikriti628@gmail.com"
              style={{
                color: "#0000CC",
                fontFamily: "Verdana, Arial, sans-serif",
              }}
              className="flex items-center"
            >
              <Mail size={14} />
            </Link>

            {/* Separator */}
            <span className="mx-2 text-black">|</span>

            <Image
              src="/indianflag.png"
              alt="Indian Flag"
              width={22}
              height={14}
              className="rounded-sm border"
            />
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-center text-[14px] leading-none mt-1">
            <Link
              href="/"
              className="text-[#0000CC] text-[14px] font-[Verdana,Arial,sans-serif] hover:underline visited:text-[#6c0a83]">

              rai-kriti
            </Link>

            {/* Separator */}
            <span className=" mx-0.5 text-black">|</span>

            <Link
  href="/api/resume"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#0000CC] text-[14px] font-[Verdana,Arial,sans-serif] hover:underline visited:text-[#6c0a83]"
>
  resume
</Link>


          </div>
        </div>
      </div>
    </header>
  );
}
