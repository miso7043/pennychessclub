import React from "react";

export interface BannerProps {
  title: string;
  time: string;
  note: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, time, note, description }) => (
  <div className="rounded-2xl border-2 border-amber-300/60 bg-gradient-to-r from-amber-50/60 to-yellow-50/60 backdrop-blur-sm p-8 shadow-sm text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-amber-800">{title}</h2>
    <p className="text-lg font-semibold text-amber-700 mt-2">{time}</p>
    <p className="text-gray-700 italic mt-1">{note}</p>
    <p className="text-gray-700 max-w-3xl mx-auto mt-3">{description}</p>
  </div>
);

export default Banner;