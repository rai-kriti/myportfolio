// src/components/TopContributor.tsx
export default function TopContributor() {
  const langData = [
    { text: "C++", rating: 2000, color: "#FF0000" }, // Master (red)
    { text: "Java", rating: 1850, color: "#FF8C00" }, // Orange
    { text: "HTML", rating: 1700, color: "#0000CC" }, // Blue
    { text: "Tailwind CSS", rating: 1650, color: "#38BDF8" }, // Tailwind blue
    { text: "Next.js", rating: 1600, color: "#000000" }, // Black
    { text: "JavaScript", rating: 1580, color: "#F7DF1E" }, // JS Yellow
    { text: "Node.js", rating: 1550, color: "#3C873A" }, // Green
    { text: "MongoDB", rating: 1525, color: "#4DB33D" }, // Mongo Green
    { text: "Express.js", rating: 1500, color: "#808080" }, // Gray
  ];

  return (
    <div className="w-full max-w-[300px]">
      {/* Header */}
      <div className="bg-white border border-gray-300 border-b-0 rounded-t-md shadow-sm 
                      text-[15px] font-[Verdana,Arial,sans-serif] font-extrabold text-[#3B5998] 
                      p-[0px_0px_4.5px_7.5px]">
        → Top Contributor
      </div>

      {/* Table */}
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-50">
            <th
              className="border border-gray-300 font-[Verdana,Arial,sans-serif] text-black text-[14px]"
              style={{ padding: "7px 4px 4px 4px", width: "24px" }}
            >
              #
            </th>
            <th
              className="border border-gray-300 font-[Verdana,Arial,sans-serif] text-black text-[14px]"
              style={{ padding: "7px 4px 4px 4px" }}
            >
              Language
            </th>
            <th
              className="border border-gray-300 font-[Verdana,Arial,sans-serif] text-black text-[14px]"
              style={{ padding: "7px 4px 4px 4px", width: "60px" }}
            >
              Rating
            </th>
          </tr>
        </thead>

        <tbody>
          {langData.map((item, idx) => (
            <tr
              key={idx}
              className="odd:bg-white even:bg-gray-50 font-[Verdana,Arial,sans-serif] text-[12.6px] font-bold"
            >
              <td className="border border-gray-300 px-2 py-1">{idx + 1}</td>
              <td className="border border-gray-300 px-2 py-1">
                <span style={{ color: item.color }}>{item.text}</span>
              </td>
              <td className="border border-gray-300 px-2 py-1">{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
