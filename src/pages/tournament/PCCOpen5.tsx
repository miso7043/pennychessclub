import React from "react";
import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";
import { getRandomBgPath, useMobile } from "../../utils/Util";

const pccOpen5Data: TournamentEventDataType = {
  hero: {
    title: "Penny Chess Club Open 5",
    subtitle: "CYCC 2025 Qualifier - CFC Quick Rated",
  },
  events: [
    {
      id: "pccopen5",
      title: "",
      rated: "(CFC Quick Rated)",
      dateLabel: "May 25, 2025",
      ctas: [
        { label: "Pairings & Results", href: "https://chess-results.com/fed.aspx?lan=1&fed=CAN", tone: "blue" },
        { label: "Pre-registered List", href: "https://docs.google.com/spreadsheets/d/1ecPjeh8svONb-pNgfqYboPrUszp1_7XrZuvYjmF8I2s/edit?gid=0#gid=0", tone: "green" },
      ],
      schedule: {
        summary: "05/25/2025 (Sunday) 4 Rounds G15+10",
        rounds: [
          "R1-2:00 PM G/15+10",
          "R2-3:00 PM G/15+10",
          "R3-4:00 PM G/15+10",
          "R4-5:00 PM G/15+10",
        ],
      },
    },
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "G/15 + 10" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Max Capacity", value: "40 players" },
    ],
    address: {
      venueName: "PCC Burnaby",
      address: "200-4789 Kingsway, Burnaby, BC",
      mapUrl: "https://maps.google.com/?q=200-4789%20Kingsway,%20Burnaby,%20BC",
    },
  },
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "No onsite registration",
    description: "",
  },
  sectionInfo: [
    "Open U8, U10, U12, U14, U16, U18. Girls U8, U10, U12, U14, U16, U18.",
    "Under 8 (Born on or after Jan 1st 2017): Open, Girls",
    "Under 10 (Born on or after Jan 1st 2015): Open, Girls",
    "Under 12 (Born on or after Jan 1st 2013): Open, Girls",
    "Under 14 (Born on or after Jan 1st 2011): Open, Girls",
    "Under 16 (Born on or after Jan 1st 2009): Open, Girls",
    "Under 18 (Born on or after Jan 1st 2007): Open, Girls",
  ],
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "$50" },
      { dotColor: "bg-blue-500", text: "$10 discount for PCC current student with code 'PCC10' at checkout" },
      { dotColor: "bg-red-500", text: "No onsite registration" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "Before 1:00 PM May 24, 2025 or max 40 players" },
    ],
    title: "Registration Deadline",
    subtitle: "Register before 1:00 PM May 24, 2025 or max capacity",
  },
  refundPolicy: [
    "$10 processing fee applies to all refunds.",
    "No refund after 1:00 PM May 23, 2025."
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
        { place: "", amount: "This tournament is a qualifier for CYCC 2025." },
        { place: "CYCC 2025 Qualifier", amount: "Score 50% or top 3 in your age group/section to qualify for CYCC 2025 in Surrey BC" },
        { place: "Medals", amount: "Top 3 by section" },
      ],
    },
    prizes: [],
  },
  miscInfo: [
    "CFC membership required. Players must have CFC ID before registration deadline.",
    "All chess equipment provided by organizer.",
  ],
  links: [
    { label: "Pairings & Results", url: "https://chess-results.com/fed.aspx?lan=1&fed=CAN" },
    { label: "Pre-registered List", url: "https://docs.google.com/spreadsheets/d/1ecPjeh8svONb-pNgfqYboPrUszp1_7XrZuvYjmF8I2s/edit?gid=0#gid=0" },
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

export default function PCCOpen5() {
  // 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  return <TournamentEvent data={pccOpen5Data} backImgPath={backImgPath} />;
}
