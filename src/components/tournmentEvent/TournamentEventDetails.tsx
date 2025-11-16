import { MapPin } from "lucide-react";

export interface EventDetail {
  /** Detail label (e.g., "Sections", "Time Control") */
  label: string;
  /** Detail value/description */
  value: string;
}

export interface EventAddress {
  /** Venue name */
  venueName: string;
  /** Full address */
  address: string;
  /** Google Maps search query URL */
  mapUrl: string;
}

interface TournamentEventDetailsProps {
  /** Array of event details */
  details: EventDetail[];
  /** Optional address information */
  address?: EventAddress;
  /** Grid columns for details (default: 2 columns) */
  gridCols?: string;
}

export default function TournamentEventDetails({
  details,
  address,
  gridCols = "grid-cols-1 sm:grid-cols-2",
}: TournamentEventDetailsProps) {
  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {details.map((detail, idx) => (
          <div key={idx}>
            <p className="font-semibold text-gray-900">{detail.label}</p>
            <p className="text-gray-700">{detail.value}</p>
          </div>
        ))}
      </div>
      {address && (
        <div className="mt-6 rounded-xl bg-blue-50 p-4">
          <p className="font-semibold text-gray-900">Event Address</p>
          <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
    </>
  );
}
