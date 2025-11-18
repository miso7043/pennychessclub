import React from "react";

interface HomeEventCardProps {
  href: string;
  title: string;
  subtitle?: string;
  date?: string;
  titleSize?: string;
  textSize?: string;
  bgStyle?: React.CSSProperties;
}export function HomeEventCard({ href, title, subtitle, date, titleSize = "text-xl", textSize = "text-base", bgStyle = { backgroundImage: 'radial-gradient(white 50%, ivory 40%)' } }: HomeEventCardProps) {
  return (
    <div
      className="border border-white/30 rounded-lg p-4 transition cursor-pointer 
      relative text-center shadow-sm hover:shadow-2xl 
      after:absolute after:inset-2 after:rounded-lg after:border-2 after:border-yellow-300 after:pointer-events-none after:content-[''] 
      after:transition-colors hover:after:border-yellow-600"
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
