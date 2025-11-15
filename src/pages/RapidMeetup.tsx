import TournamentEvent from "../components/TournamentEvent";
import type { TournamentEventDataType } from "../components/TournamentEvent";

// NOTE: Light mode only per request (no dark: classes)
// Tailwind design goals: clean, modern, airy spacing, subtle shadows, rounded-2xl
// Tech: React + TSX single-file component with small, reusable UI primitives


// ---------- PAGE DATA ----------
const rapidMeetupPageData: TournamentEventDataType = {
  hero: {
    title: "PCC Monthly Rapid Tournament & Meetup",
    subtitle: "CFC Quick Rated • Friendly community • Free meetup",
  },
  events: [
    {
      id: "nov",
      title: "PCC NOVEMBER RAPID TOURNAMENT & MEETUP",
      rated: "(CFC QUICK RATED)",
      dateLabel: "November 9, 2025",
      ctas: [
        { label: "Registration", href: "https://www.zeffy.com/en-CA/ticketing/pcc-monthly-rapid-tournament-and-meetup", tone: "blue" as const },
        { label: "Pairings & Results", href: "https://s3.chess-results.com/tnr1291291.aspx?lan=1&SNode=S0", tone: "green" as const },
        { label: "Pre-registered", href: "https://docs.google.com/spreadsheets/d/10Gp3j6tAoXCMTYWpHDLbycR0WMIM_ekv1OCYafI7jKQ/edit?gid=0#gid=0", tone: "purple" as const },
      ],
      schedule: {
        summary: "11/09/2025 (Sunday) 5 Rounds G10+5",
        rounds: ["2:30 PM", "3:10 PM", "3:50 PM", "4:30 PM", "5:10 PM"],
      },
    },
    {
      id: "dec",
      title: "PCC DECEMBER RAPID TOURNAMENT & MEETUP",
      rated: "(CFC QUICK RATED)",
      dateLabel: "December 7, 2025",
      ctas: [
        { label: "Registration", href: "https://www.zeffy.com/en-CA/ticketing/pcc-december-rapid-tournament-and-meetup", tone: "green" as const },
        { label: "Pre-registered", href: "https://docs.google.com/spreadsheets/d/16dA_YNTpz8MMXlLrpqYBoeGCoooK4jFbz0ESISM3TEc/edit?gid=0#gid=0", tone: "purple" as const },
      ],
      schedule: {
        summary: "12/07/2025 (Sunday) 5 Rounds G10+5",
        rounds: ["R1-2:30 PM", "R2-3:10 PM", "R3-3:50 PM", "R4-4:30 PM", "R5-5:10 PM"],
      },
    },
  ],
  banner: {
    title: "MEETUP (Free Entry · Drop-in)",
    time: "5:30 PM – 7:00 PM",
    note: "No registration required",
    description:
      "Play relaxed games, chat about positions, and share ideas with Penny Chess Club members, friends, and coaches.",
  },
  eventDetails: {
    details: [
      { label: "Sections", value: "Premier & U1400 (All CFC Quick Rated)" },
      { label: "Time Control", value: "G/10 + 5" },
      { label: "Pairings", value: "Swiss System" },
      { label: "Parking", value: "All-day free parking" },
    ],
    address: {
      venueName: "Sungiven Foods (Burnaby Big Bend Store)",
      address: "5771 Marine Wy #600, Burnaby, BC V5J 0A6",
      mapUrl: "https://maps.google.com/?q=5771%20Marine%20Wy%20%23600,%20Burnaby,%20BC%20V5J%200A6",
    },
  },
  entryFee: {
    fees: [
      {
        dotColor: "bg-green-500",
        text: "$25 on or before Nov 1 (Nov) · Nov 30 (Dec)",
      },
      {
        dotColor: "bg-orange-500",
        text: "$30 after early bird",
      },
      {
        dotColor: "bg-blue-500",
        text: "Free for GM/IM/WGM/WIM if registered by Oct 5, 2025 (subject to organizer approval). Contact",
        emailText: "pennychessclub@gmail.com",
        email: "pennychessclub@gmail.com",
      },
      {
        dotColor: "bg-red-500",
        text: "No onsite registration",
      },
    ],
  },
  deadlines: {
    deadlines: [
      { label: "November Tournament", deadline: "Before 1:00 PM · Nov 8, 2025" },
      { label: "December Tournament", deadline: "Before 1:00 PM · Dec 6, 2025" },
    ],
    title: "Deadlines",
    subtitle: "Submit registration before these times",
  },
  playUp: {
    title: "Play Up & Unrated Players",
    policy: [
      "You may play up a section with a rating floor up to 200 points above your rating. Add a $10 play-up fee at checkout.",
      "Unrated players may join Premier or U1400 without the play-up fee.",
      "We do not recommend Premier unless you have significant chess experience (e.g., ~1400 chess.com or equivalent).",
    ],
  },
  refundPolicy: [
    "before Nov 1, 2025",
    "50% on/after Nov 1, 2025 until Nov 8, 2025",
    "No refund on/after Nov 8, 2025"
  ]
};

// ---------- PAGE ----------
export default function RapidMeetup() {
  return <TournamentEvent data={rapidMeetupPageData} backImgPath="/imgs/bg/parallax-back-2.webp" />;
}
