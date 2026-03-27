// src/components/PayAttention.tsx
export default function PayAttention() {
  return (
    <div className="w-full max-w-[300px]">
      {/* Header: Pay Attention */}
      <div
        className="bg-white border border-gray-300 border-b-0 rounded-t-md shadow-sm text-[15px] font-[Verdana,Arial,sans-serif] font-extrabold text-[#3B5998]  p-[0px_0px_4.5px_7.5px]"
      >
        → Pay Attention
      </div>
      <div className="bg-white border border-gray-300 text-center">
        <span className="text-[15px] font-[Verdana,Arial,sans-serif] font-extrabold text-[#3B5998] text-center
        ">Portfolio launch</span>
        <div className="text-[14px] font-[Verdana,Arial,sans-serif] text-[#0000CC]  p-[0px_10px_10px_10px]">
        <p className="underline">
        Kriti Rai’s CS Engineer Journey Showcase</p>
         <p>
          <a href="#" className="text-purple-700 underline">
            Check Now »
          </a>
        </p>
        </div>

      </div>

      
    </div>
  );
}
