import React from "react";
import type { EventAddress } from "./TournamentEventDetails";
import { MapPin } from "lucide-react";

export interface OrganizInfoProps {
  organizer: string;
  contact: string;
  address: EventAddress;
}

const Organiz_Info: React.FC<OrganizInfoProps> = ({ organizer, contact, address }) => (

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-amber-100/40 border border-zinc-500/40 rounded-xl p-3">
    <div className="border border-gray-300 px-4 py-3 rounded-lg  bg-white/30">
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

    {address && (
      <div className="border border-gray-300 px-6 py-3 rounded-lg bg-white/30">
        <p className="mt-1 font-semibold text-gray-900">Event Address</p>
        <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <p className="text-gray-800 font-medium">{address.venueName}</p>
            <p className="text-gray-700">{address.address}</p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={address.mapUrl}
          >
            <MapPin className="size-4" /> Open Map
          </a>
        </div>
      </div>
    )}
  </div>
);

export default Organiz_Info;