import React from "react";
import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";
import { getRandomBgPath, useMobile } from "../../utils/Util";

const bcJuniorChampionshipData: TournamentEventDataType = {
  hero: {
    title: "BC Junior Chess Championship 2025",
    subtitle: "CFC Regular Rated | Provincial Junior Championship",
  },
  events: [
    {
      id: "bcjc2025",
      title: "BC Junior Chess Championship 2025",
      rated: "(CFC Regular Rated)",
      dateLabel: "November 15-16, 2025",
      ctas: [
        { label: "Booster Section Results", href: "https://s3.chess-results.com/tnr1261396.aspx?lan=1&SNode=S0", tone: "blue" },
        { label: "Reserve Section Results", href: "https://s2.chess-results.com/tnr1261377.aspx?lan=1&SNode=S0", tone: "amber" },
        { label: "Champion Section Results", href: "https://s2.chess-results.com/tnr1261363.aspx?lan=1&SNode=S0", tone: "green" },
        { label: "Photo Gallery", href: "https://flic.kr/s/aHBqjCvzUE", tone: "purple" },
      ],
      schedule: {
        summary: "09/27 - 28/2025 (5 rounds) (Sat-Sun) 5 Rounds",
        rounds: [
          "R1-Sat 10:00 AM G/60+10",
          "R2-Sat 2:00 PM G/60+10",
          "R3-Sat 5:00 PM G/60+10",
          "R4-Sun 10:00 AM G/90+30",
          "R5-Sun 3:00 PM G/90+30",
        ],
      },
    },
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "Booster/Reserve: G/60+10, Champion: G/90+30" },
      { label: "Pairings", value: "Swiss System" },
    ],
    address: {
      venueName: "Vancouver Chess Centre",
      address: "201-3979 Kingsway, Burnaby",
      mapUrl: "https://maps.google.com/?q=201-3979%20Kingsway,%20Burnaby",
    },
  },
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "",
  },
  sectionInfo: [
    "**Booster Section** (U1200, unrated, or new players)",
    "**Reserve Section** (U1600, open to all under 1600)",
    "**Champion Section** (Open to all, top BC junior title)",
    "Separate prizes and trophies for each section.",
  ],
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "Regular $80, Early bird $70 before Nov 1, 2025" },
      { dotColor: "bg-blue-500", text: "Siblings discount: $10 for 2nd/3rd. PCC students $10 discount" },
    ],
  },
  residencePolicy: [
    "All winners in this tournament must reside in B.C. and:",
    "•  have resided in B.C. for a total of at least six months in the 12 months prior to the start of the tournament; or",
    "•  have resided in B.C. for the three months prior to the start of the tournament."
  ],
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "1:00 PM November 14, 2025" },
    ],
    title: "Registration Deadline",
    subtitle: "Register by 1:00 PM November 14, 2025",
  },
  refundPolicy: [
    "Before November 1, 2025 (deduct $10)",
    "50% on or after Nov 1 until Nov 13, 2025.",
    "No refund on/after Nov 13, 2025."
  ],
  organizInfo: {
    // director: "Penny Pham",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com",
  },
  prizesInfo: {
    notes: {
      icon: "medal",
      iconColor: "text-amber-600",
      prizes: [
        { place: "The name(s) of the Champion(s), no tie-break, will be engraved on the perpetual BC Junior Championship plaque.", amount: "" },
      ],
    },
    prizes: [
      {
        title: "Champion Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "Prizes", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $1500 - travel subsidy (including $1000 sponsored by BCCF only eligible to the Junior Champion) \n Qualification to play in the 2026 BC Closed" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $500 - travel subsidy" },
          { place: "3rd Place", amount: "Trophy" },
          { place: "Top Girl", amount: "Trophy \n CJCC Package $500 - travel subsidy" },
          { place: "", amount: "\n" },

          { place: "​U1800", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $500 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $400 - travel subsidy" },
          { place: "3rd Place", amount: "Trophy" },
          { place: "Top Girl", amount: "Trophy \n CJCC Package $500 - travel subsidy" },
          { place: "", amount: "\n" },

          { place: "​U1500", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $400 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $300 - travel subsidy" },
          { place: "3rd Place", amount: "Trophy" },
          { place: "Top Girl", amount: "Trophy \n CJCC Package $400 - travel subsidy" },
          { place: "", amount: "\n" },
        ],
      },
      {
        title: "Reserve Section",
        icon: "trophy",
        iconColor: "text-purple-600",
        prizeList: [
          { place: "Prizes", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $400 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $300 - travel subsidy" },
          { place: "3rd Place", amount: "Trophy" },
          { place: "Top Girl", amount: "Trophy \n CJCC Package $400 - travel subsidy" },
          { place: "", amount: "\n" },

          { place: "​U1000", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $$350 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $$250 - travel subsidy" },
          { place: "3rd Place", amount: "Trophy" },
          { place: "Top Girl", amount: "Trophy \n CJCC Package $$350 - travel subsidy" },
          { place: "", amount: "\n" },
        ],
      },
      {
        title: "Booster Section",
        icon: "trophy",
        iconColor: "text-blue-600",
        prizeList: [
          { place: "Booster", amount: "Computer tie-breaks apply. CJCC prizes require attending CJCC and follow CJCC rules." },
          { place: "1st Place", amount: "Trophy \n CJCC Package $350 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy \n CJCC Package $250 - travel subsidy" },
          { place: "", amount: "\n" },

          { place: "Prizes", amount: "Computer tie-break on ties" },
          { place: "Top 3-5", amount: "Trophy" },
          { place: "Top 5 U500", amount: "Trophy" },
          { place: "Top 5 Unrated", amount: "Trophy" },
          { place: "", amount: "\n" },

          { place: "Girls", amount: "Computer tie-break on ties" },
          { place: "1st Place", amount: "Trophy \n CJCC Package $350 - travel subsidy" },
          { place: "2nd Place", amount: "Trophy" },
          { place: "Top 2 U500", amount: "Trophy" },
          { place: "Top 2 Unrated", amount: "Trophy" },
        ],
      },
    ],
  },
  miscInfo: [
    "CFC membership required for all sections.",
    "Boards and clocks provided.",
    "Snacks and drinks available on site.",
  ],
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

export default function BCJuniorChampionship() {
  // 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  return <TournamentEvent data={bcJuniorChampionshipData} backImgPath={backImgPath} />;
}
