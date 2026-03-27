import Link from "next/link";
import { Cuprum } from "next/font/google";

const cuprum = Cuprum({ subsets: ["latin"], weight: ["400","700"] });

export default function Navbar() {
  const links = [
    { name: "HOME", href: "/" },
    { name: "CATALOG", href: "/catalog" },
    { name: "CONTESTS", href: "/contests" },
    { name: "GYM", href: "/gym" },
    { name: "PROBLEMSET", href: "/problemset" },
    { name: "CONTACT", href: "/contact" },
    { name: "RESUME", href: "/api/resume", newTab: true }, // 👈 add flag
  ];

  return (
    <nav className="h-[40px] mt-4 max-w-[1100px] mx-auto px-2 bg-white border border-gray-400 rounded-sm shadow-sm">
      <div className={`h-full flex items-center ${cuprum.className}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[16px] text-[#000000] px-2 h-full flex items-center hover:bg-gray-100 hover:text-[#7b777b] rounded-md"
            {...(link.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}  // 👈 apply only for resume
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
