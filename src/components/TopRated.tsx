"use client";

// Read all env variables ONCE at the top
const linkedin = process.env.NEXT_PUBLIC_LINK_LINKEDIN ;
const codolio = process.env.NEXT_PUBLIC_LINK_CODOLIO || "#";
const leetcode = process.env.NEXT_PUBLIC_LINK_LEETCODE || "#";
const geeksforgeeks = process.env.NEXT_PUBLIC_LINK_GFG || "#";
const codeforces = process.env.NEXT_PUBLIC_LINK_CODEFORCES || "#";
const github = process.env.NEXT_PUBLIC_LINK_GITHUB || "#";

const projNOTSY = process.env.NEXT_PUBLIC_PROJ_NOTSY || "#";
const projOS = process.env.NEXT_PUBLIC_PROJ_OS || "#";
const projAI = process.env.NEXT_PUBLIC_PROJ_AI || "#";
const projFeedback = process.env.NEXT_PUBLIC_PROJ_FEEDBACK || "#";

export default function TopRated() {
  const linksData = [
    { text: "LinkedIn", rating: 1800, link: linkedin },
    { text: "LeetCode", rating: 1725, link: leetcode },
    { text: "Codolio", rating: 1650, link: codolio },
    { text: "Codeforces", rating: 1900, link: codeforces },
    { text: "GitHub", rating: 1600, link: github },

    { text: "Power Feedback System", rating: 1580, link: projFeedback },
    { text: "AI Study Buddy", rating: 1550, link: projAI },
    { text: "NOTSY443", rating: 1520, link: projNOTSY },
    { text: "OS Shell Project", rating: 1500, link: projOS },
  ];

  return (
    <div className="w-full max-w-[300px]">
      <div className="bg-white border border-gray-300 border-b-0 rounded-t-md shadow-sm 
                      text-[15px] font-extrabold text-[#3B5998] p-[0_0_4.5px_7.5px]">
        → Top Rated
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-50">
            <th className="border border-gray-300 text-[14px]">#</th>
            <th className="border border-gray-300 text-[14px]">Link</th>
            <th className="border border-gray-300 text-[14px]">Rating</th>
          </tr>
        </thead>

        <tbody>
          {linksData.map((item, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50 text-[12.6px] font-bold">
              <td className="border border-gray-300 px-2 py-1">{idx + 1}</td>
              <td className="border border-gray-300 px-2 py-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff0000] hover:underline"
                >
                  {item.text}
                </a>
              </td>
              <td className="border border-gray-300 px-2 py-1">{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
