import React from "react";

interface HomeEventCardProps {
  href: string;
  title: string;
  subtitle?: string;
  date?: string;
  titleSize?: string;
  textSize?: string;
  bgStyle?: React.CSSProperties;
}export function HomeEventCard({ href, title, subtitle, date, titleSize = "text-xl", textSize = "text-lg", bgStyle = { backgroundImage: 'radial-gradient(#142127, #243137)' } }: HomeEventCardProps) {
  return (
    <div
      className="border border-white/30 rounded-lg p-4 transition cursor-pointer 
      relative text-center text-white
      after:absolute after:inset-1 after:rounded-lg after:border-2 after:border-stone-600 after:pointer-events-none after:content-[''] 
      after:transition-colors hover:after:border-emerald-600
      after:shadow-xl hover:after:shadow-2xl"
      style={bgStyle}
    >
      <a href={href}>
        <div className={`font-bold pt-4 ${titleSize}`}>{title}</div>
        {subtitle && <div className={`mt-2 ${textSize}`}>{subtitle}</div>}
        {date && <div className={`pb-4 ${textSize}`}>{date}</div>}
      </a>
    </div>
  );
}
