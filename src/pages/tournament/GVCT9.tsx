import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";

const gvct9Data: TournamentEventDataType = {
  hero: {
    title: "GREATER VANCOUVER CHESS TOURNAMENT 9",
    subtitle: "CFC Regular Rated",
  },
  events: [
    {
      id: "gvct9",
      title: "",
      rated: "",
      dateLabel: "November 22-23, 2025",
      ctas: [
        { label: "REGIST NOW!", href: "https://www.zeffy.com/en-CA/ticketing/greater-vancouver-chess-tournament--9", tone: "blue" },
        { label: "Pre-Reg List", href: "https://docs.google.com/spreadsheets/d/1MDIb6y31pm9rV4QbBHHcDaaOmtiDHuaw1Y-rJcl_8J8/edit?gid=0#gid=0", tone: "purple" },
      ],
      schedule: {
        summary: "11/22-23/2025 (Sat-Sun) 5 Rounds",
        rounds: [
          "R1-Sat 10:00 AM G/50+10",
          "R2-Sat 1:00 PM G/50+10",
          "R3-Sat 4:00 PM G/50+10",
          "R4-Sun 10:00 AM G/90+30",
          "R5-Sun 3:00 PM G/90+30"
        ],
      },
    },
  ],
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "Transportation: By car: FREE PARKING in Bonsor Recreation Complex. By Skytrain to Metrotown station, then ~3-minute walk.",
  },
  eventDetails: {
    details: [
      { label: "Section", value: "Premier, U1800, U1300, U800 (all CFC rated)" },
      { label: "Time Control", value: "Round 1-3: G/50+10, Round 4-5: G/90+30" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Parking", value: "FREE PARKING in Bonsor Recreation Complex" },
    ],
    address: {
      venueName: "Bonsor Recreation Complex Banquet Hall",
      address: "6550 Bonsor Avenue, Burnaby",
      mapUrl: "https://maps.google.com/?q=6550%20Bonsor%20Avenue,%20Burnaby",
    },
  },
  entryFee: {
    fees: [
      {
        dotColor: "bg-green-500",
        text: "Regular $90, Early bird $70 before or on October 1st, 2025",
      },
      {
        dotColor: "bg-blue-500",
        text: "Siblings discount: $10 for the 2nd/3rd one. PCC current students $10 discount",
      },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "1:00 PM November 21st, 2025" },
    ],
    title: "Registration Deadline",
    subtitle: "Register by 1:00 PM November 21st, 2025",
  },
  playUp: {
    title: "Play Up & Unrated Players",
    policy: [
      "You may play up a section with a rating floor no more than 200 rating points above your rating.",
      "In this case you need to add a play up fee of $30, in addition to the entry fee, at checkout.",
      "Unrated players may play in either the U800, U1300 or U1800 without paying the play up fee.",
      "However, unrated players are not recommended to play in the U1800 section, unless they have other significant chess experience, such as a rating of 1800 or more on chess.com or other equivalent chess websites.",
    ]
  },
  refundPolicy: [
    "before Oct 21, 2025",
    "50% on/after Oct 21, 2025 until Nov 20, 2025",
    "No refund on/after Nov 20, 2025"
  ],
  organizInfo: {
    director: "Penny Pham",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com"
  },
};

export default function GVCT9() {
  return <TournamentEvent data={gvct9Data} backImgPath="/imgs/bg/parallax-back-2.webp" />;
}
