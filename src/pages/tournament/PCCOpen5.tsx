import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";

const pccOpen5Data: TournamentEventDataType = {
  hero: {
    title: "Penny Chess Club Open 5",
    subtitle: "CYCC 2025 Qualifier - CFC Quick Rated",
  },
  events: [
    {
      id: "pccopen5",
      title: "PCC OPEN 5 (May 25th, 2025)",
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
  playUp: { title: "Play Up & Unrated Players" },
  refundPolicy: [
    "$10 processing fee applies to all refunds.",
    "No refund after 1:00 PM May 23, 2025."
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
};

export default function PCCOpen5() {
  return <TournamentEvent data={pccOpen5Data} backImgPath="/imgs/bg/parallax-back-5.webp" />;
}
