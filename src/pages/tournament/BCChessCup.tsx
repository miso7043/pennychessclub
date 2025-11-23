import React from "react";
import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";
import { getRandomBgPath, useMobile } from "../../utils/Util";

const bcChessCupData: TournamentEventDataType = {
  hero: {
    title: "2026 BC CHESS CUP",
    subtitle: "CYCC Qualifier - CFC Regular Rated",
  },
  events: [
    {
      id: "bccc2026",
      title: "2026 BC Chess Cup (CFC Regular Rated)",
      rated: "(CFC Regular Rated)",
      dateLabel: "January 10-11, 2026",
      ctas: [
        { label: "REGISTER NOW!", href: "https://www.zeffy.com/en-CA/ticketing/2026-bc-chess-cup", tone: "blue" },
        { label: "Pre-Registered List", href: "https://docs.google.com/spreadsheets/d/1FW7srJYwh5u6jQM_W_ZmQ2JPYtIoNwzWzQigzM6GTAo/edit?gid=0#gid=0", tone: "purple" },
      ],
      schedule: {
        summary: "01/10-11/2026 (Sat-Sun) 5 Rounds",
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
  eventDetails: {
    details: [
      { label: "Time Control", value: "Round 1-3: G/50+10, Round 4-5: G/90+30" },
      { label: "Pairings", value: "Swiss System" },
    ],
    address: {
      venueName: "Bonsor Recreation Complex Banquet Hall",
      address: "6550 Bonsor Avenue, Burnaby",
      mapUrl: "https://maps.google.com/?q=6550%20Bonsor%20Avenue,%20Burnaby",
    },
  },
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "",
    description: "",
  },
  sectionInfo: [
    "**2026 BCCC Youth (For those who were born on after January 1st, 2008)**",
    "**2026 CYCC Qualifier**",
    "6 Age group sections – separated prizes for Open and Girls categories.",
    "**Under 8 (Born on or after Jan 1st 2018)**",
    "**Under 10 (Born on or after Jan 1st 2016)**",
    "**Under 12 (Born on or after Jan 1st 2014)**",
    "**Under 14 (Born on or after Jan 1st 2012)**",
    "**Under 16 (Born on or after Jan 1st 2010)**",
    "**Under 18 (Born on or after Jan 1st 2008)**",
    "And the **2026 BCCC Champion Section (For All Ages)**"
  ],
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "Regular $90, Early bird $80 before or on Dec 1, 2025" },
      { dotColor: "bg-blue-500", text: "Siblings discount: $10 for 2nd/3rd. PCC students $10 discount" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "1:00 PM January 9, 2026" },
    ],
    title: "Registration Deadline",
    subtitle: "Register by 1:00 PM January 9, 2026",
  },
  refundPolicy: [
    "Before December 9, 2025 (deduct $10)",
    "50% on or after Dec 9 until Jan 8, 2026.",
    "No refund on/after Jan 8, 2026."
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
        { place: "CYCC Qualification", amount: "U8-U18 groups: 50% score or top 3 in open/girls qualify for CYCC 2026" },
        { place: "Cash Prize Payment", amount: "E-transfer within 3-5 business days after tournament" },
        { place: "Subsidy Claim", amount: "Claim after joining CYCC 2026. If 1st/2nd does not attend, cascades to 3rd." },
      ],
    },
    prizes: [
      {
        title: "U8-U18 Open & Girls (CYCC Qualifier)",
        icon: "trophy",
        iconColor: "text-blue-600",
        prizeList: [
          { place: "1st Place (Open)", amount: "Trophy + $200" },
          { place: "2nd Place (Open)", amount: "Trophy + $100" },
          { place: "3rd Place (Open)", amount: "Trophy" },
          { place: "4th Place (Open)", amount: "Trophy" },
          { place: "5th Place (Open)", amount: "Trophy" },
          { place: "1st Place (Girls)", amount: "Trophy + $200" },
          { place: "2nd Place (Girls)", amount: "Trophy + $100" },
          { place: "3rd Place (Girls)", amount: "Trophy" },
          { place: "CYCC Subsidy", amount: "Subsidy to CYCC 2026 (see notes)" },
        ],
      },
      {
        title: "Champion Section (All-age)",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st Place", amount: "Trophy + $700" },
          { place: "2nd Place", amount: "Trophy + $500" },
          { place: "3rd Place", amount: "Trophy + $200" },
          { place: "Top Women", amount: "Trophy + $200" },
        ],
      },
    ],
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

export default function BCChessCup() {
  // 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  return <TournamentEvent data={bcChessCupData} backImgPath={backImgPath} />;
}
