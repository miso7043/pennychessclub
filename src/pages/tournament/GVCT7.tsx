import TournamentEvent from "../../components/TournamentEvent";
import type { TournamentEventDataType } from "../../components/TournamentEvent";

const gvct7Data: TournamentEventDataType = {
  hero: {
    title: "Greater Vancouver Chess Tournament 7 (CFC rated)",
    subtitle: "January 11-12, 2025 | Bonsor Recreation Complex",
  },
  events: [
    {
      id: "gvct7",
      title: "GVCT7 (Jan 11-12, 2025)",
      rated: "CFC rated | 5 rounds | Premier, U1800, U1300, U800",
      dateLabel: "Jan 11-12, 2025",
      ctas: [
        { label: "Premier", href: "https://chess-results.com/tnr1097830.aspx?lan=1", tone: "blue" },
        { label: "U1800", href: "https://chess-results.com/tnr1097831.aspx?lan=1", tone: "green" },
        { label: "U1300", href: "https://chess-results.com/tnr1097833.aspx?lan=1", tone: "purple" },
        { label: "U800", href: "https://chess-results.com/tnr1097837.aspx?lan=1", tone: "amber" },
        { label: "Photos", href: "https://flic.kr/s/aHBqjBXLR1", tone: "blue" },
      ],
      schedule: {
        summary: "01/11-12/2025 (Sat-Sun) 5 Rounds",
        rounds: [
          "Sat 10:00 AM G/50+10",
          "Sat 1:00 PM G/50+10",
          "Sat 4:00 PM G/50+10",
          "Sun 10:00 AM G/90+30",
          "Sun 3:00 PM G/90+30",
        ],
      },
    },
  ],
  banner: {
    title: "Payment: Online only",
    time: "",
    note: "Live Games Available",
    description: "Registration Deadline: 1:00 pm January 10th, 2025",
  },
  sectionInfo: [
    "Premier, U1800, U1300, U800 (all CFC rated)",
    "Play up: Allowed up to 200 points above your rating (add $30 play up fee)",
    "Unrated: May play in U800/U1300/U1800 (no play up fee)",
    "Unrated players are not recommended to play in the U1800 section unless they have significant chess experience (e.g. rating 1800+ on chess.com or similar)",
  ],
  eventDetails: {
    details: [
      { label: "Time Control", value: "Round 1-3: G/50+10, Round 4-5: G/90+30" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Parking", value: "Free parking in Bonsor Recreation Complex" },
      { label: "Transportation", value: "By car: Free parking. By Skytrain: Metrotown station, ~3 min walk." },
      { label: "Address", value: "Bonsor Recreation Complex Banquet Hall, 6550 Bonsor Avenue, Burnaby" },
    ],
    address: {
      venueName: "Bonsor Recreation Complex Banquet Hall",
      address: "6550 Bonsor Avenue, Burnaby",
      mapUrl: "https://maps.google.com/?q=6550+Bonsor+Avenue,+Burnaby",
    },
  },
  entryFee: {
    fees: [
      { dotColor: "bg-green-500", text: "Regular $90, Early bird $80 before or on Dec 1, 2024" },
      { dotColor: "bg-blue-500", text: "Siblings discount: $10 for 2nd/3rd. PCC current students $10 discount" },
      { dotColor: "bg-orange-500", text: "Play up fee: $30 (if applicable)" },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "Registration Deadline", deadline: "1:00 pm January 10th, 2025" },
    ],
    title: "Registration Deadline",
    subtitle: "Register before 1:00 pm January 10th, 2025",
  },
  playUp: {
    title: "Play Up & Unrated Players",
    policy: [
      "You may play up a section with a rating floor no more than 200 points above your rating (add $30 play up fee)",
      "Unrated players may play in U800/U1300/U1800 without play up fee.",
      "Unrated players are not recommended to play in U1800 unless they have significant chess experience (e.g. 1800+ chess.com)",
    ],
  },
  refundPolicy: [
    "100% refund before Dec 10, 2024",
    "50% on or after Dec 10, 2024 until Jan 9, 2025",
    "No refund on or after Jan 9, 2025.",
  ],
  organizInfo: {
    director: "Penny Pham",
    organizer: "Greater Vancouver Chess Society and Penny Chess Club",
    contact: "pennychessclub@gmail.com",
  },
  prizesInfo: {
    prizes: [
      {
        title: "Premier Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st", amount: "$1200" },
          { place: "2nd", amount: "$700" },
          { place: "3rd", amount: "$450" },
        ],
      },
      {
        title: "U1800 Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st", amount: "$700" },
          { place: "2nd", amount: "$350" },
          { place: "3rd", amount: "$250" },
        ],
      },
      {
        title: "U1300 Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st", amount: "$450" },
          { place: "2nd", amount: "$250" },
          { place: "3rd", amount: "$150" },
        ],
      },
      {
        title: "U800 Section",
        icon: "trophy",
        iconColor: "text-yellow-600",
        prizeList: [
          { place: "1st", amount: "$250" },
          { place: "2nd", amount: "$150" },
          { place: "3rd", amount: "$100" },
        ],
      },
    ],
    notes: {
      icon: "medal",
      iconColor: "text-amber-600",
      prizes: [
        { place: "Trophies", amount: "Best U8/U10/U12/U14/U16 Boy & Girl" },
      ],
    },
  },
  miscInfo: [
    "CFC membership required. Players must have CFC ID before registration deadline.",
    "If you need to create a new CFC ID, please go to chess.ca and follow their instructions.",
    "All chess equipment provided by organizer.",
  ],
  links: [
    { label: "Premier", url: "https://chess-results.com/tnr1097830.aspx?lan=1" },
    { label: "U1800", url: "https://chess-results.com/tnr1097831.aspx?lan=1" },
    { label: "U1300", url: "https://chess-results.com/tnr1097833.aspx?lan=1" },
    { label: "U800", url: "https://chess-results.com/tnr1097837.aspx?lan=1" },
    { label: "Photos", url: "https://flic.kr/s/aHBqjBXLR1" },
  ],
};

export default function GVCT7() {
  return <TournamentEvent data={gvct7Data} backImgPath="/imgs/bg/parallax-back-2.webp" />;
}
