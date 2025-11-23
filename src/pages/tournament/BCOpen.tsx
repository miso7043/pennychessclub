import React from "react";
import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";
import { getRandomBgPath, useMobile } from "../../utils/Util";

const bcOpen2025Data: TournamentEventDataType = {
  hero: {
    title: "BC OPEN CHESS TOURNAMENT 2025",
    subtitle: "CFC or CFC/Fide rated",
  },
  events: [
    {
      id: "bcopen2025",
      title: "",
      rated: "(CFC or CFC/Fide rated) \n Blitz Tournament Timing: Sunday, February 16th at 7pm \n or as soon as Round 4 finishes G/3+2, 7 rounds. \n One Section Only.",
      dateLabel: "Feb 15-17, 2025",
      ctas: [
        { label: "Premier Results", href: "https://chess-results.com/tnr1119142.aspx?lan=1", tone: "blue" },
        { label: "U1800 Results", href: "https://chess-results.com/tnr1119176.aspx?lan=1", tone: "green" },
        { label: "U1400 Results", href: "https://chess-results.com/tnr1119197.aspx?lan=1", tone: "purple" },
        { label: "U1000 Results", href: "https://chess-results.com/tnr1119207.aspx?lan=1", tone: "blue" },
      ],
      schedule: {
        summary: "02/15-17/2025 (Sat-Mon) 6 Classical Rounds G90+30",
        rounds: [
          "Sat 11:00 AM G/90+30",
          "Sat 4:00 PM G/90+30",
          "Sun 10:00 AM G/90+30",
          "Sun 3:00 PM G/90+30",
          "Mon 10:00 AM G/90+30",
          "Mon 3:00 PM G/90+30",
        ],
      },
    },
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "G/90 + 30 (Classical), G/3 + 2 (Blitz)" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Parking", value: "$9/day/event available" },
      { label: "Address", value: "SFU Central Gym, 8888 University Dr W, Burnaby, BC V5A 1S6" },
    ],
    address: {
      venueName: "SFU Central Gym",
      address: "8888 University Dr W, Burnaby, BC V5A 1S6",
      mapUrl: "https://maps.google.com/?q=8888%20University%20Dr%20W,%20Burnaby,%20BC%20V5A%201S6",
    },
  },
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "",
  },
  sectionInfo: [
    "Premier (CFC & FIDE rated)",
    "U1800, U1400, U1000 (CFC rated)",
    "Play up: Allowed up to 200 points above your rating (add $30 play up fee)",
    "Unrated: May play in U1000/U1400/U1800 (no play up fee)",
    "Unrated players are not recommended to play in the U1800 section unless they have significant chess experience",
    "(e.g. rating 1800+ on chess.com or similar).",
  ],
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "Regular $120, Early bird $100 before or on Jan 1, 2025" },
      { dotColor: "bg-blue-500", text: "Siblings discount: $10 for 2nd/3rd. PCC members $10 discount" },
      { dotColor: "bg-orange-500", text: "Play up fee: $30 (if applicable)" },
      { dotColor: "bg-purple-500", text: "Blitz tournament: $40 (1 section only)" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Classical Registration Deadline", deadline: "Before noon Feb 14, 2025" },
      { label: "Blitz Registration Deadline", deadline: "Feb 15, 2025" },
    ],
    title: "Registration Deadlines",
    subtitle: "Register before deadlines for classical and blitz",
  },
  refundPolicy: [
    "100% refund before Jan 14, 2025",
    "50% on or after Jan 14 until Feb 14, 2025",
    "No refund on/after Feb 14, 2025."
  ],
  organizInfo: {
    // director: "Quang-Long Le",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com",
  },
  prizesInfo: {
    notes: {
      icon: "medal",
      iconColor: "text-amber-600",
      prizes: [
        { place: "Trophies", amount: "Top prizes of Premier, U1800, U1400, U1000 and Top Woman for both classical and blitz" },
      ],
    },
    prizeTableInfo: [
      [
        { section: "Premier", first: 1200, second: 600, third: 400, subtotal: 2200, type: "main" },
        { section: "Top Women", first: 200, second: null, third: null, subtotal: 200, type: "women" },
        { section: "U2000", first: 400, second: 300, third: null, subtotal: 700, type: "main" },
        { section: "Top Women", first: 200, second: null, third: null, subtotal: 200, type: "women" },
        { section: "U1800", first: 700, second: 400, third: 300, subtotal: 1400, type: "main" },
        { section: "Top Women", first: 150, second: null, third: null, subtotal: 150, type: "women" },
        { section: "U1600", first: 350, second: 250, third: null, subtotal: 600, type: "main" },
        { section: "Top Women", first: 100, second: null, third: null, subtotal: 100, type: "women" },
        { section: "U1400", first: 600, second: 300, third: 250, subtotal: 1150, type: "main" },
        { section: "Top Women", first: 100, second: null, third: null, subtotal: 100, type: "women" },
        { section: "U1200", first: 300, second: 200, third: null, subtotal: 500, type: "main" },
        { section: "Top Women", first: 50, second: null, third: null, subtotal: 50, type: "women" },
        { section: "U1000", first: 500, second: 250, third: 200, subtotal: 950, type: "main" },
        { section: "Top Women", first: 50, second: null, third: null, subtotal: 50, type: "women" }
      ],
      [
        { section: "Open Section", first: 300, second: 200, third: 100, subtotal: 600, type: "main" },
        { section: "Top Women", first: 50, second: null, third: null, subtotal: 50, type: "women" }
      ],
    ]
  },
  miscInfo: [
    "CFC membership required. Players must have CFC ID before registration deadline.",
    "All chess equipment provided by organizer.",
  ],
  links: [
    { label: "Premier Results", url: "https://chess-results.com/tnr1119142.aspx?lan=1" },
    { label: "U1800 Results", url: "https://chess-results.com/tnr1119176.aspx?lan=1" },
    { label: "U1400 Results", url: "https://chess-results.com/tnr1119197.aspx?lan=1" },
    { label: "U1000 Results", url: "https://chess-results.com/tnr1119207.aspx?lan=1" },
    { label: "Photos", url: "https://flic.kr/s/aHBqjC2wVw" },
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

export default function BCOpen2025() {
// 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  return <TournamentEvent data={bcOpen2025Data} backImgPath={backImgPath} />;
}
