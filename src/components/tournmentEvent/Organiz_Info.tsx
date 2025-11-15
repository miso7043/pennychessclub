import React from "react";

export interface OrganizInfoProps {
  director: string;
  organizer: string;
  contact: string;
}

const Organiz_Info: React.FC<OrganizInfoProps> = ({ director, organizer, contact }) => (
  <div className="mb-8 bg-amber-100/40 border border-zinc-500/40 rounded-xl p-6">
    <div className="grid grid-cols-[1fr_1.5fr] gap-x-6 text-sm md:text-lg font-bold text-gray-700">
      <div className="text-right">
        <span className="block">Tournament Director:</span>
      </div>
      <div className="text-left">
        <span className="block">{director}</span>
      </div>
    </div>
    <div className="grid grid-cols-[1fr_1.5fr] gap-x-6 text-sm md:text-lg font-bold text-gray-700">
      <div className="text-right">
        <span className="block">Organizer:</span>
      </div>
      <div className="text-left">
        <span className="block">{organizer}</span>
      </div>
    </div>
    <div className="grid grid-cols-[1fr_1.5fr] gap-x-6 text-sm md:text-lg font-bold text-gray-700">
      <div className="text-right">
        <span className="block">Contact us at</span>
      </div>
      <div className="text-left">
        <span className="block"><a href={`mailto:${contact}`} className="text-primary underline">{contact}</a></span>
      </div>
    </div>
    {/* 이후 데이터가 있다면 아래에 text-left로 배치 */}
  </div>
);

export default Organiz_Info;