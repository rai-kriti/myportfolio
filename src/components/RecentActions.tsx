// src/components/RecentActions.tsx
export default function RecentActions() {


  return (
    <div className="w-full max-w-[300px]">
      {/* Header */}
<div className="bg-white border border-gray-300 border-b-0 rounded-t-md shadow-sm 
                text-[15px] font-[Verdana,Arial,sans-serif] font-extrabold text-[#3B5998] 
                p-[0px_0px_4.5px_7.5px]">
  → Recent Actions
</div>

{/* Content */}
<div className="border border-gray-300 rounded-b-md bg-white shadow-sm p-3 text-[11.34px] font-[Verdana,Arial,sans-serif] space-y-1">
  <div className=" text-[#0000CC]"><span className="text-red-600 font-bold">LeetCode</span> → Solved 500+ DSA problems 🚀</div>
  <div className=" text-[#0000CC]"><span className="text-green-600 font-bold">GitHub</span> → Deployed full-stack MERN app 🌐</div>
  <div className=" text-[#0000CC]"><span className="text-orange-500 font-bold">Certificate</span> → AWS Certified Cloud Practitioner 🏆</div>
  <div className=" text-[#0000CC]"><span className="text-purple-600 font-bold">Exam</span> → Cracked Capgemini coding round ✨</div>
  <div className=" text-[#0000CC]"><span className="text-pink-500 font-bold">LeetCode</span> → Reached Knight rating ⚔️</div>
  <div className=" text-[#0000CC]"><span className="text-blue-600 font-bold">GitHub</span> → Open-sourced my portfolio site 💻</div>
  <div className=" text-[#0000CC]"><span className="text-teal-600 font-bold">Certificate</span> → Python for Data Science 🎓</div>
  <div className=" text-[#0000CC]"><span className="text-yellow-500 font-bold">Exam</span> → Ranked top 10 in college hackathon 🔥</div>
</div>

    </div>
  );
}
