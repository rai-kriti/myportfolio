"use client";
import { useState } from "react";

export default function VoteBar() {
  const [likes, setLikes] = useState(1);

  return (
    <div className="border-2 border-b-blue-800 rounded-sm mr-4 bg-blue-50 flex justify-between items-center px-3 py-2 text-[11]px">
      <div className="flex items-center gap-3">
        <button onClick={() => setLikes(likes + 1)} className="flex items-center gap-1">
          <img src="/voteup-gray.png" width={14} height={14} />
          <span className="text-green-600 font-bold">+{likes}</span>
        </button>
       
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <img src="/user.png" width={16} height={16} />
          <span className="text-[#551a8b] font-medium ">Kriti Rai</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/calender.png" width={16} height={16} />
          <span className="text-gray-600">Today</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/comments.png" width={16} height={16} />
          <span className="text-gray-600">0</span>
        </div>
      </div>
    </div>
  );
}
