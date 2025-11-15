import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";

const bcRapidChampionship2025Data: TournamentEventDataType = {
  hero: {
    title: "2025 BC Rapid Chess Championship",
    subtitle: "CFC Quick Rated",
  },
  events: [
    {
      id: "bcrapid2025",
      title: "2025 BC Rapid Chess Championship",
      rated: "(CFC Quick Rated)",
      dateLabel: "April 6, 2025",
      ctas: [
        { label: "Premier Results", href: "https://chess-results.com/tnr1152542.aspx?lan=1&art=0", tone: "blue" },
        { label: "U1400 Results", href: "https://chess-results.com/tnr1152545.aspx?lan=1&art=0", tone: "green" },
      ],
      schedule: {
        summary: "04/06/2025 (Sunday) 7 Rounds G15+10",
        rounds: [
          "R1-9:30 AM",
          "R2-10:30 AM",
          "R3-11:30 AM",
          "R4-12:30 PM",
          "Lunch Break",
          "R5-2:30 PM",
          "R6-3:30 PM",
          "R7-4:30 PM",
        ],
      },
    },
  ],
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "No onsite registration",
    description: "Free entry for GM/IM/WGM/WIM if entered by Feb 18th 2025, subject to Organizer's approval. Please contact pennychessclub@gmail.com for registration.",
  },
  sectionInfo: [
    "Premier & U1400 (All CFC Quick Rated)",
    "Play up: Allowed up to 200 points above your rating (add $25 play up fee)",
    "Unrated: May play in Premier or U1400 (no play up fee)",
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "G/15 + 10" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Parking", value: "All-day free parking" },
      { label: "Address", value: "Bonsor Recreation Complex Banquet Hall, 6550 Bonsor Avenue, Burnaby" },
    ],
    address: {
      venueName: "Bonsor Recreation Complex Banquet Hall",
      address: "6550 Bonsor Avenue, Burnaby",
      mapUrl: "https://maps.google.com/?q=6550%20Bonsor%20Avenue,%20Burnaby",
    },
  },
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "$60 on or before Feb 18, 2025" },
      { dotColor: "bg-blue-500", text: "$75 on or before noon on April 5, 2025" },
      { dotColor: "bg-orange-500", text: "$25 play up fee (if applicable)" },
      { dotColor: "bg-purple-500", text: "$10 discount for 2nd+ family member" },
      { dotColor: "bg-yellow-500", text: "$10 discount for PCC students" },
      { dotColor: "bg-red-500", text: "No onsite registration" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "Before noon April 5, 2025" },
    ],
    title: "Registration Deadline",
    subtitle: "Register before noon April 5, 2025",
  },
  playUp: { 
    title: "Play Up & Unrated Players",
    policy: [
      "You may play up a section with a rating floor no more than 200 rating points above your rating.",
      "In this case you need to add a play up fee of $25, in addition to the entry fee, at checkout.",
      "Unrated players may play in either the Premier or U1400 Section without paying the play up fee.",
      "However, unrated players are not recommended to play in the Premier Section, unless they have other significant chess experience, such as a rating of 1400 or more on chess.com or other equivalent chess websites.",
    ],
  },
  refundPolicy: [
    "100% refund before March 4, 2025",
    "50% on or after March 4 until April 4, 2025",
    "No refund on/after April 4, 2025."
  ],
  organizInfo: {
    director: "Quang-Long Le",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com",
  },
  prizesInfo: {
    notes: {
      icon: "medal",
      iconColor: "text-amber-600",
      prizes: [
        { place: "Total Prize Fund", amount: "$2,000 (may increase based on registration)" },
        { place: "Trophies", amount: "Top 3 of Premier & U1400 Sections" },
        { place: "Medals", amount: "Best U8/U10/U12/U14/U16 Boy & Girl in each section" },
        { place: "Prize Limit", amount: "A player can only receive maximum one prize." },
      ],
    },
    prizes: [
      {
        title: "Premier Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st Place", amount: "$600" },
          { place: "2nd Place", amount: "$400" },
          { place: "3rd Place", amount: "$200" },
          { place: "Best Woman", amount: "$100" },
        ],
      },
      {
        title: "U1400 Section",
        icon: "trophy",
        iconColor: "text-blue-600",
        prizeList: [
          { place: "1st Place", amount: "$300" },
          { place: "2nd Place", amount: "$200" },
          { place: "3rd Place", amount: "$100" },
          { place: "Best Woman", amount: "$100" },
        ],
      },
    ],
  },
  miscInfo: [
    "CFC membership required. Players must have CFC ID before registration deadline.",
    "All chess equipment provided by organizer.",
    "Parking: Free all day.",
  ],
  links: [
    { label: "Premier Results", url: "https://chess-results.com/tnr1152542.aspx?lan=1&art=0" },
    { label: "U1400 Results", url: "https://chess-results.com/tnr1152545.aspx?lan=1&art=0" },
    { label: "Photo Gallery", url: "https://flic.kr/s/aHBqjC86Um" },
  ],
};

export default function BCRapidChampionship2025() {
  return <TournamentEvent data={bcRapidChampionship2025Data} backImgPath="/imgs/bg/parallax-back-4.webp" />;
}
