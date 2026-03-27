"use client";

import { useState } from "react";
import PayAttention from "@/components/PayAttention";
import ProfileCard from "@/components/ProfileCard";
import TopRated from "@/components/TopRated";
import TopContributors from "@/components/TopContributors";
import VoteBar from "@/components/VoteBar";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gray-50">
      <div className="mx-auto flex max-w-[1100px] flex-row justify-between px-2">
        <div className="mr-0 w-full space-y-4 md:mr-6 md:w-2/3">
          <div className="mb-2 flex items-center justify-between md:hidden">
            <p
              className="text-lg font-medium text-[#3b5998]"
              style={{ fontFamily: "Verdana, Arial, sans-serif" }}
            >
              My Personal Portfolio Launch Announcement
            </p>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-md bg-gray-200 p-2 transition hover:bg-gray-300"
            >
              <Menu size={20} />
            </button>
          </div>

          <p
            className="hidden font-medium text-[#3b5998] md:block"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            My Portfolio Launch Announcement
          </p>

          <p
            className="text-[14px]"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            By <span className="font-bold text-red-500">KRITI RAI</span>, March 2026
            <img
              src="/indianflag.png"
              alt="Indian Flag"
              width={22}
              height={14}
              className="mx-2 inline"
            />
          </p>

          <div
            className="space-y-4 border-l-4 border-gray-300 pl-2 text-[14px] text-gray-700"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            <section className="rounded-xl border border-gray-200 bg-white p-4 pl-5 shadow-sm border-l-2 border-l-[#f1d200]">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-[#3b5998]">About Me</p>

                <p>
                  I&apos;m a curious girl building tech with purpose, and I believe
                  technology should not just function, but create a real difference.
                </p>

                <p>
                  My journey started as an eager 4th-grade child stepping into a computer
                  lab for the first time, full of curiosity. That curiosity stayed, and
                  today it has led me to pursue my dream branch, B.Tech in Computer
                  Science Engineering at Lovely Professional University. I am now moving
                  towards becoming a Full Stack Engineer, focused on building scalable
                  systems that actually matter.
                </p>

                <p>
                  When I&apos;m not building systems, you&apos;ll usually find me reading
                  Hindi literature or questioning systems through my writing. Whether
                  through words or code, I choose to create impact in whatever I build.
                </p>
              </div>
            </section>

            <p className="pt-2 text-[#4f6fbf]">
              <strong>Portfolio Launch Announcement</strong>
            </p>

            <p>Hello, everyone!</p>

            <p>
              I am pleased to announce the launch of my personal portfolio website. This
              will serve as the central hub for my projects, experiments, and updates.
              Think of it as my own little corner on the web where I share what I build,
              learn, break, and sometimes fix.
            </p>

            <p>
              In 2025, my portfolio will go through many iterations as I continue adding
              more content. This first release marks the beginning of the journey. It is
              open for everyone to explore, scroll through, and maybe even get inspired.
            </p>

            <p>
              <strong>Guide to this world:</strong>
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Catalogues</strong>: My certificates and achievements. Proof that
                behind the jokes there is hard work.
              </li>
              <li>
                <strong>Gym</strong>: All my projects live here. This is where ideas lift
                weights.
              </li>
              <li>
                <strong>Problem Set</strong>: My DSA world, contest logs, and logic
                puzzles that keep my brain warm.
              </li>
              <li>
                <strong>Contests</strong>: The arenas I stepped into. Sometimes I win,
                sometimes I learn.
              </li>
              <li>
                <strong>Resume and Contact</strong>: For collaborations, opportunities, or
                a simple hello.
              </li>
            </ul>

            <p>
              This website is more than a portfolio. It is a timeline of how I grow,
              fail, fight, learn, and level up. Every section is a chapter, and every
              project is a version of me.
            </p>

            <p>
              This is Version 1, honest everywhere and improving constantly, just like the
              person behind it.
            </p>

            <VoteBar />
          </div>
        </div>

        <div className="hidden flex-col space-y-4 md:flex" style={{ width: "300px" }}>
          <PayAttention />
          <ProfileCard />
          <TopRated />
          <TopContributors />
        </div>

        <div
          className={`fixed top-0 right-0 z-50 h-full w-64 overflow-y-auto bg-white p-4 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#3b5998]">Quick Links</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <PayAttention />
            <ProfileCard />
            <TopRated />
            <TopContributors />
          </div>
        </div>

        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
          />
        )}
      </div>
    </div>
  );
}
