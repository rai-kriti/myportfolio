"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import contestHeatmapImage from "./image.png";

type RatingPoint = {
  shortDate: string;
  rating: number;
};

const ratingData: RatingPoint[] = [
  { shortDate: "2020\n10th", rating: 90.15 },
  { shortDate: "2022\n12th", rating: 93 },
  { shortDate: "Dec 2023\n1st Sem", rating: 95 },
  { shortDate: "May 2024\n2nd Sem", rating: 92 },
  { shortDate: "Dec 2024\n3rd Sem", rating: 87.6 },
  { shortDate: "May 2025\n4th Sem", rating: 95.8 },
];

const ratingBands = [
  { from: 85, to: 90, color: "rgba(255, 255, 255, 0.0)" },
  { from: 90, to: 94, color: "rgba(110, 245, 106, 0.75)" },
  { from: 94, to: 97, color: "rgba(88, 224, 212, 0.8)" },
  { from: 97, to: 99, color: "rgba(177, 136, 242, 0.82)" },
  { from: 99, to: 100, color: "rgba(240, 108, 226, 0.82)" },
];


const statCards = [
  { value: "4", label: "terms completed" },
  { value: "9.24", label: "average TGPA" },
  { value: "32", label: "subjects completed" },
  { value: "11", label: "O grades earned" },
  { value: "16", label: "A+ grades earned" },
  { value: "5", label: "A grades earned" },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded border border-[#cfcfcf] bg-white px-2 py-1 text-xs text-[#6f6f6f] shadow-sm">
      <p>{label}</p>
      <p className="text-[#f0cc00]">score: {payload[0].value}</p>
    </div>
  );
}

export default function ContestsPage() {
  const [ratingFilter, setRatingFilter] = useState("Only rated");

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-3 py-5 text-[#707070] sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <section className="relative rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.3)] sm:px-5">
          <div className="mb-3 flex justify-end">
            <select
              value={ratingFilter}
              onChange={(event) => setRatingFilter(event.target.value)}
              className="h-7 rounded border border-[#8a8a8a] bg-white px-2 text-sm text-[#2c2c2c] outline-none"
            >
              <option>Only rated</option>
            </select>
          </div>

          <p className="mb-2 text-sm text-[#9b9b9b]">
            Click on the graph to enable the zoom feature.
          </p>

          <div className="h-[320px] w-full sm:h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={ratingData}
                margin={{ top: 0, right: 0, left: -22, bottom: 20 }}
              >
                {ratingBands.map((band) => (
                  <ReferenceArea
                    key={`${band.from}-${band.to}`}
                    y1={band.from}
                    y2={band.to}
                    fill={band.color}
                    ifOverflow="extendDomain"
                  />
                ))}

                <CartesianGrid stroke="#cfcfcf" vertical horizontal={false} />

                <XAxis
                  dataKey="shortDate"
                  tick={{ fill: "#5f5f5f", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "#646464", strokeWidth: 2 }}
                  interval={0}
                />

                <YAxis
                  type="number"
                  domain={[85, 100]}
                  ticks={[85, 87, 89, 91, 93, 95, 97, 99]}
                  tick={{ fill: "#5c5c5c", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "#646464", strokeWidth: 2 }}
                />

                <Tooltip content={<CustomTooltip />} />

                <Line
                  type="linear"
                  dataKey="rating"
                  stroke="#f1d200"
                  strokeWidth={2}
                  dot={(props) => {
                    const isLastPoint = props.index === ratingData.length - 1;

                    return (
                      <circle
                        cx={props.cx}
                        cy={props.cy}
                        r={isLastPoint ? 4 : 3}
                        fill="#ffffff"
                        stroke={isLastPoint ? "#ff1d14" : "#f1d200"}
                        strokeWidth={2}
                      />
                    );
                  }}
                  activeDot={{ r: 4, fill: "#ffffff", stroke: "#ff1d14", strokeWidth: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="pointer-events-none absolute right-8 top-[48px] z-10">
            <div className="flex items-center gap-1 border border-[#ffe45a] bg-white/95 px-1.5 py-0.5 text-sm text-[#656565] shadow-[0_1px_0_rgba(255,255,255,0.7)]">
              <span className="inline-block h-2.5 w-2.5 border border-[#f1d200] bg-white" />
              <span>rai kriti</span>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#d8d8d8] bg-white px-4 py-4 sm:px-5">
          <div className="mb-5 flex flex-col gap-3 text-sm text-[#7f7f7f] md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-base text-[#4e4e4e]">Leetcode Submissions</p>
              <p className="mt-1 text-sm text-[#9a9a9a]">
                image reference for the heatmap of leetcode submissions, showcasing the consistency and dedication in problem-solving over time.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d8d8d8] bg-[#f8f8f8]">
            <Image
              src={contestHeatmapImage}
              alt="Contest heatmap reference"
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-7 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((card) => (
              <div key={card.label}>
                <p className="text-[24px] leading-none text-[#111111]">{card.value}</p>
                <p className="mt-1 text-[15px] text-[#ababab]">{card.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
