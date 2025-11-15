import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";

const gvct8Data: TournamentEventDataType = {
  hero: {
    title: "Greater Vancouver Chess Tournament 8",
    subtitle: "CFC Regular Rated",
  },
  events: [
    {
      id: "gvct8",
      title: "GVCT 8 (June 7th-8th, 2025)",
      rated: "(CFC Regular Rated)",
      dateLabel: "June 7-8, 2025",
      ctas: [
        { label: "Premier Results", href: "https://chess-results.com/tnr1194456.aspx?lan=1", tone: "blue" },
        { label: "U1800 Results", href: "https://chess-results.com/tnr1194460.aspx?lan=1", tone: "green" },
        { label: "U1300 Results", href: "https://chess-results.com/tnr1194463.aspx?lan=1", tone: "purple" },
        { label: "U800 Results", href: "https://chess-results.com/tnr1194467.aspx?lan=1", tone: "blue" },
      ],
      schedule: {
        summary: "06/07-08/2025 (Sat-Sun) 5 Rounds",
        rounds: [
          "R1-Sat 10:00 AM G/50+10",
          "R2-Sat 1:00 PM G/50+10",
          "R3-Sat 4:00 PM G/50+10",
          "R4-Sun 10:00 AM G/90+30",
          "R5-Sun 3:00 PM G/90+30",
        ],
      },
    },
  ],
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "",
  },
  sectionInfo: [
    "Premier, U1800, U1300, U800 (all CFC rated)",
    "Play up: Allowed up to 200 points above your rating (add $30 play up fee)",
    "Unrated: May play in U800/U1300/U1800 (no play up fee)",
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "Round 1-3: G/50+10, Round 4-5: G/90+30" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Address", value: "Bonsor Recreation Complex Banquet Hall, 6550 Bonsor Avenue, Burnaby" },
      { label: "Transportation", value: "Free parking, 3-min walk from Metrotown Skytrain" },
    ],
    address: {
      venueName: "Bonsor Recreation Complex Banquet Hall",
      address: "6550 Bonsor Avenue, Burnaby",
      mapUrl: "https://maps.google.com/?q=6550%20Bonsor%20Avenue,%20Burnaby",
    },
  },
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "Regular $100, Early bird $90 before or on May 1, 2025" },
      { dotColor: "bg-blue-500", text: "Siblings discount: $10 for 2nd/3rd. PCC students $10 discount" },
      { dotColor: "bg-orange-500", text: "Play up fee: $30 (if applicable)" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "1:00 PM June 6, 2025" },
    ],
    title: "Registration Deadline",
    subtitle: "Register by 1:00 PM June 6, 2025",
  },
  playUp: { 
    title: "Play Up & Unrated Players",
    policy: [
      "You may play up a section with a rating floor no more than 200 rating points above your rating.",
      "In this case you need to add a play up fee of $30, in addition to the entry fee, at checkout.",
      "Unrated players may play in either the U800, U1300 or U1800 without paying the play up fee.",
      "However, unrated players are not recommended to play in the U1800 section, unless they have other significant chess experience, such as a rating of 1800 or more on chess.com or other equivalent chess websites.",
    ],
  },
  refundPolicy: [
    "Refund with $10 processing fee before May 6, 2025",
    "50% on or after May 6 until June 5, 2025",
    "No refund on/after June 5, 2025."
  ],
  organizInfo: {
    director: "Penny Pham",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com",
  },
  prizesInfo: {
    notes: {
      icon: "medal",
      iconColor: "text-amber-600",
      prizes: [
        { place: "Section Split", amount: "If >50 players in a section, may split and adjust prizes." },
        { place: "Trophies", amount: "Best U8/U10/U12/U14/U16 Boy & Girl in all sections" },
      ],
    },
    prizes: [
      {
        title: "Premier Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st Place", amount: "$1200" },
          { place: "2nd Place", amount: "$700" },
          { place: "3rd Place", amount: "$450" },
        ],
      },
      {
        title: "U1800 Section",
        icon: "trophy",
        iconColor: "text-blue-600",
        prizeList: [
          { place: "1st Place", amount: "$700" },
          { place: "2nd Place", amount: "$350" },
          { place: "3rd Place", amount: "$250" },
        ],
      },
      {
        title: "U1300 Section",
        icon: "trophy",
        iconColor: "text-purple-600",
        prizeList: [
          { place: "1st Place", amount: "$450" },
          { place: "2nd Place", amount: "$250" },
          { place: "3rd Place", amount: "$150" },
        ],
      },
      {
        title: "U800 Section",
        icon: "trophy",
        iconColor: "text-green-600",
        prizeList: [
          { place: "1st Place", amount: "$250" },
          { place: "2nd Place", amount: "$150" },
          { place: "3rd Place", amount: "$100" },
        ],
      },
    ],
  },
  miscInfo: [
    "CFC membership required. Players must have CFC ID before registration deadline.",
    "All chess equipment provided by organizer.",
    "Payment: Online only.",
  ],
  links: [
    { label: "Premier Results", url: "https://chess-results.com/tnr1194456.aspx?lan=1" },
    { label: "U1800 Results", url: "https://chess-results.com/tnr1194460.aspx?lan=1" },
    { label: "U1300 Results", url: "https://chess-results.com/tnr1194463.aspx?lan=1" },
    { label: "U800 Results", url: "https://chess-results.com/tnr1194467.aspx?lan=1" },
    { label: "Photo Gallery", url: "https://flic.kr/s/aHBqjCh7Gh" },
  ],
};

export default function GVCT8() {
  return <TournamentEvent data={gvct8Data} backImgPath="/imgs/bg/parallax-back-1.webp" />;
}
