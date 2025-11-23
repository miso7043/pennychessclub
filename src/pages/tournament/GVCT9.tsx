import React from "react";
import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";
import { getRandomBgPath, useMobile } from "../../utils/Util";

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
        { label: "REGISTER NOW!", href: "https://www.zeffy.com/en-CA/ticketing/greater-vancouver-chess-tournament--9", tone: "blue" },
        { label: "Pre-Registered List", href: "https://docs.google.com/spreadsheets/d/1MDIb6y31pm9rV4QbBHHcDaaOmtiDHuaw1Y-rJcl_8J8/edit?gid=0#gid=0", tone: "purple" },
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
    policy: [
      "You may play up a section with a rating floor no more than 200 rating points above your rating.",
      "In this case you need to add a play up fee of $30, in addition to the entry fee, at checkout.",
      "Unrated players may play in either the U800, U1300 or U1800 without paying the play up fee.",
      "However, unrated players are not recommended to play in the U1800 section, unless they have other significant chess experience, such as a rating of 1800 or more on chess.com or other equivalent chess websites.",
    ]
  },
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "Transportation: By car: FREE PARKING in Bonsor Recreation Complex. By Skytrain to Metrotown station, then ~3-minute walk.",
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
  refundPolicy: [
    "before Oct 21, 2025",
    "50% on/after Oct 21, 2025 until Nov 20, 2025",
    "No refund on/after Nov 20, 2025"
  ],
  organizInfo: {
    // director: "Penny Pham",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com"
  },
  rulesInfo: [
    {
      title: "I. Anti-cheating rules",
      content: (
        {
          description: "We will follow anti-cheating rules guidelines by FIDE. See details below:",
          link: "https://www.fide.com/FIDE/handbook/Anti%20Cheating%20Guidelines.pdf"
        }
      ),
    },
    { title: "II. Food", content: { description: "You are allowed to bring snacks and non-alcoholic drinks to the playing venue, (e.g., fruits, chocolate, soft drinks, coffee, milk)" } },
    {
      title: "III. CFC membership",
      content: (
        {
          description: "A valid CFC ID is required. If you need a new ID, register here:",
          link: "https://www.chess.ca/en/players/membership-join/"
        }
      ),
    },
    { title: "IV. Refusal Entry", content: { description: "We reserve the right to refuse your entry." } },
    { title: "V. Refund", content: { description: "Generally, we do not offer refunds. Requests will be assessed case by case." } },
    {
      title: "VI. Byes",
      content: [
        "If you request bye(s), please confirm with us prior to the deadline of registration.",
        "Bye requests for the next round received during the tournament may only be accepted before the pairings of the next round are published, either on the internet or at the playing venue. We will not accept any bye requests received afterwards.",
        "If your bye is allocated by the computer pairings (ie. not your request), you will have 1 point.",
        "If your bye is requested by you for round 1, 2 or 3, you will have 0.5 points per game",
        "If your bye is requested by you for round 4 or 5 you will have 0 point.",
        "You cannot request byes for more than 2 rounds.",
        "Tournament Director (TD) reserves the right to refuse your bye requests"
      ]
    },
    {
      title: "VII. 10 minutes tolerance",
      content: [
        "10 minutes after round start, absent players forfeit (0 point).",
        "Players who cannot attend any round are encouraged to inform the TD or Arbiters before the start of the round.",
        "Players who are absent for 2 games without any notice to the TD or Arbiters will be removed from the tournament."
      ]
    },
    {
      title: "VIII. Tie-break rules",
      content: [
        "Direct encounter",
        "Greater number of victories",
        "Buchholz"
      ]
    },
    {
      title: "IX. Electric devices rules",
      content: [
        "No device use while playing unless approved by TD.",
        "Devices must be off and stored; remain at table if game in progress.",
        "Spectators: keep phones silent.",
        "Violations may lead to removal or investigation."
      ]
    },
    { title: "X. Others", content: { description: "We follow FIDE rules; TD's decision is final." } },
  ]
};

export default function GVCT9() {
// 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  return <TournamentEvent data={gvct9Data} backImgPath={backImgPath} />;
}
