"use client";

const catalogData = [
  {
    category: "Academic",
    items: [
      { 
        title: "NPTEL IIT Kharagpur - Cloud Computing", 
        link: process.env.NEXT_PUBLIC_CERT_CLOUD_COMPUTING 
      },
      { 
        title: "LPU Academic Achiever", 
        link: process.env.NEXT_PUBLIC_CERT_LPU_ACADEMIC 
      },
      {
        title: "Summer Training",
        link:  "https://www.cipherschools.com/certificate/preview?id=687f497d7efd6d50907047c6"
      },
      { 
        title: "Computer Communication - University of Colorado", 
        link: process.env.NEXT_PUBLIC_CERT_COMPUTER_COMM 
      },
    ],
  },
  {
    category: "Competitions",
    items: [
      { 
        title: "Poetry Competition", 
        link: process.env.NEXT_PUBLIC_CERT_POETRY 
      },
    ],
  },
  {
    category: "Volunteer Work",
    items: [
      { 
        title: "NITI Aayog Volunteer", 
        link: process.env.NEXT_PUBLIC_CERT_NITI 
      },
      { 
        title: "NGO Volunteer Letter", 
        link: process.env.NEXT_PUBLIC_CERT_NGO 
      },
    ],
  },
];

export default function Catalog() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 
        className="text-[15px] mb-3 font-bold" 
        style={{ color: "#3b5998", fontFamily: "Verdana, Arial, sans-serif" }}
      >
        Catalog
      </h1>

      <div className="space-y-6">
        {catalogData.map((section) => (
          <div key={section.category}>

            <div className="flex items-center gap-2 p-2">
              <i className="far fa-folder-open text-gray-500 text-lg" />
              <span className="font-semibold text-lg">{section.category}</span>
            </div>

            <div className="pl-6 space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <i className="far fa-file-alt text-black text-lg" />
                  <span className="text-[#3b5998] font-medium">{item.title}</span>
                </a>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
