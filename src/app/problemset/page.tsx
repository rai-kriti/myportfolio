import Image from "next/image";

export default function ProblemSet() {
  const platforms = [
    {
      id: 1,
      name: "LeetCode",
      link: "https://leetcode.com/rai-kriti",
      description: "Codes daily for problem solving",
      solved: 520,
    },
    {
      id: 2,
      name: "Codeforces",
      link: "https://codeforces.com/profile/rai-kriti",
      description: "Competes weekly in rated contests",
      solved: 410,
    },
    {
      id: 3,
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/raikriti/",
      description: "Practices DSA and topic-wise problems",
      solved: 380,
    },
    {
      id: 4,
      name: "Codolio",
      link: "https://codolio.com/profile/rai-kriti",
      description: "Showcases projects and portfolio badges",
      solved: 120,
    },
    {
      id: 5,
      name: "HackerRank",
      link: "https://www.hackerrank.com/rai_kriti",
      description: "Improves logic through challenges",
      solved: 260,
    },
  ];

  return (
    <div className="bg-[#E1E1E1] min-h-screen flex flex-col items-center py-2 rounded-sm px-2 sm:px-4">
      {/* Header */}
      <span
        className="text-[14px] flex items-center gap-1 my-1 self-start mt-1"
        style={{
          fontFamily: "Verdana, Arial, sans-serif",
          marginLeft: "6px",
        }}
      >
        Platforms
        <img
          src="https://img.icons8.com/ios-filled/50/list.png"
          alt="list icon"
          width={16}
          height={16}
          style={{
            position: "relative",
            cursor: "pointer",
            opacity: 0.9,
          }}
        />
      </span>

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full min-w-[500px] sm:min-w-[700px] md:min-w-[850px] lg:min-w-[950px] mx-auto border border-gray-300 rounded-t-lg text-center bg-white shadow-sm"
          style={{
            fontFamily: "Verdana, Arial, sans-serif",
            borderSpacing: "0",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr className="bg-gray-100 text-black text-[13px] sm:text-[14px]">
              <th className="border border-gray-300 w-[50px] h-[40px] rounded-tl-lg">
                #
              </th>
              <th className="border border-gray-300 w-[350px]">
                Platform
              </th>
              <th className="border border-gray-300 w-[56px]"></th>
              <th className="border border-gray-300 w-[62px]">
                <Image
                  src="/lightning.png"
                  alt="Lightning"
                  width={16}
                  height={16}
                  className="inline"
                />
              </th>
              <th className="border border-gray-300 w-[66px] rounded-tr-lg">
                <Image
                  src="/ok.png"
                  alt="OK"
                  width={16}
                  height={16}
                  className="inline"
                />
              </th>
            </tr>
          </thead>

          <tbody className="text-[12.5px] sm:text-[13px] text-gray-800">
            {platforms.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"
                } hover:bg-gray-50 transition`}
              >
                {/* Serial No */}
                <td className="border border-gray-300 h-[50px] align-middle">
                  {item.id}
                </td>

                {/* Platform Name & Description */}
                <td className="border border-gray-300 align-middle text-left px-3">
                  <div
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2"
                    style={{ wordBreak: "break-word" }}
                  >
                    <a
                      href={item.link}
                      className="text-[#0000cc] underline font-semibold truncate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                    <span
                      className="text-[#888888] text-[11.5px] sm:text-[12px] italic sm:text-right"
                      style={{
                        fontFamily: "Verdana, Arial, sans-serif",
                      }}
                    >
                      {item.description}
                    </span>
                  </div>
                </td>

                {/* Submit icon */}
                <td className="border border-gray-300 align-middle">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/submit.png"
                      alt="Submit"
                      width={16}
                      height={16}
                      className="inline cursor-pointer opacity-80 hover:opacity-100"
                    />
                  </a>
                </td>

                {/* Lightning (empty) */}
                <td className="border border-gray-300 align-middle"></td>

                {/* Solved Count */}
                <td className="border border-gray-300 align-middle">
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/user1.png"
                      alt="User Icon"
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                    <span>{item.solved}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <p
        className="mt-4 text-gray-700 text-[12px] sm:text-[13px] italic text-center"
        style={{ fontFamily: "Verdana, Arial, sans-serif" }}
      >
        💡 Problem solving is my favorite debugging tool.
      </p>
    </div>
  );
}
