import React, { useEffect } from "react";
import TournamentRules from "../components/TournamentRules";
import RefundPolicy from "../components/RefundPolicy";
import PlayUpPolicy from "../components/PlayUpPolicy";
import TournamentMiscellaneous from "../components/TournamentMiscellaneous";
import TournamentPrizes from "../components/TournamentPrizes";
import TournamentDeadlines from "../components/TournamentDeadlines";
import TournamentEntryFee from "../components/TournamentEntryFee";
import TournamentEventDetails from "../components/TournamentEventDetails";
import EventBox from "../components/EventBox";
import { getGridCols } from "../utils/gridUtils";

// NOTE: Light mode only per request (no dark: classes)
// Tailwind design goals: clean, modern, airy spacing, subtle shadows, rounded-2xl
// Tech: React + TSX single-file component with small, reusable UI primitives

// ---------- UI PRIMITIVES ----------
const Section: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>> = ({
  title,
  subtitle,
  className,
  children,
}) => (
  <section className={`bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/60 p-6 md:p-8 ${className || ""}`}>
    {title && (
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </header>
    )}
    {children}
  </section>
);

// ---------- DATA ----------
const events = [
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
      rounds: ["2:30 PM", "3:10 PM", "3:50 PM", "4:30 PM", "5:10 PM"],
    },
  },
];

// ---------- PAGE ----------
export default function RapidMeetup() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrolled / maxScroll;
      
      // 이미지 높이는 화면의 150%, 스크롤하면 50% 만큼 위로 이동
      // 시작: translateY(0) - 이미지 상단이 화면 상단과 일치
      // 끝: translateY(-50vh) - 이미지 하단이 화면 하단과 일치
      const moveY = -(scrollPercent * 50);
      
      const bgElement = document.querySelector('.parallax-bg') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translateY(${moveY}vh)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900">
      {/* PARALLAX BACKGROUND */}
      <div 
        className="parallax-bg fixed top-0 left-0 w-full -z-10"
        style={{
          height: '150vh',
          backgroundImage: 'url(/imgs/bg/hand-playing-chess.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* CONTENT OVERLAY */}
      <div className="relative bg-gradient-to-b from-white/50 via-gray-50/50 to-gray-50/50">
        {/* HERO */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            PCC Monthly Rapid Tournament & Meetup
          </h1>
          <p className="mt-3 text-lg text-gray-600">CFC Quick Rated • Friendly community • Free meetup</p>
        </div>

        {/* FEATURED DATES */}
        <div id="register" className={`grid ${getGridCols(events.length)} gap-6 mb-12`}>
          {events.map((ev) => (
            <div key={ev.id} className="rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
              <EventBox
                eventId={ev.id}
                dateLabel={ev.dateLabel}
                title={ev.title}
                rated={ev.rated}
                ctas={ev.ctas}
                schedule={ev.schedule}
              />
            </div>
          ))}
        </div>

        {/* MEETUP BANNER */}
        <div className="rounded-2xl border-2 border-amber-300/60 bg-gradient-to-r from-amber-50/60 to-yellow-50/60 backdrop-blur-sm p-8 shadow-sm text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-800">MEETUP (Free Entry · Drop-in)</h2>
          <p className="text-lg font-semibold text-amber-700 mt-2">5:30 PM – 7:00 PM</p>
          <p className="text-gray-700 italic mt-1">No registration required</p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-3">
            Play relaxed games, chat about positions, and share ideas with Penny Chess Club members, friends, and coaches.
          </p>
        </div>

        {/* DETAILS */}
        <div className={`grid ${getGridCols(2)} gap-8 mb-12`}>
          <Section title="Event Details">
            <TournamentEventDetails
              details={[
                { label: "Sections", value: "Premier & U1400 (All CFC Quick Rated)" },
                { label: "Time Control", value: "G/10 + 5" },
                { label: "Pairings", value: "Swiss System" },
                { label: "Parking", value: "All-day free parking" },
              ]}
              address={{
                venueName: "Sungiven Foods (Burnaby Big Bend Store)",
                address: "5771 Marine Wy #600, Burnaby, BC V5J 0A6",
                mapUrl: "https://maps.google.com/?q=5771%20Marine%20Wy%20%23600,%20Burnaby,%20BC%20V5J%200A6",
              }}
            />
          </Section>

          <Section title="Entry Fee">
            <TournamentEntryFee
              fees={[
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
              ]}
            />
          </Section>
        </div>

        {/* DEADLINES */}
        <Section title="Deadlines" subtitle="Submit registration before these times">
          <TournamentDeadlines
            deadlines={[
              { label: "November Tournament", deadline: "Before 1:00 PM · Nov 8, 2025" },
              { label: "December Tournament", deadline: "Before 1:00 PM · Dec 6, 2025" },
            ]}
            title=""
            subtitle=""
          />
        </Section>

        {/* PRIZES */}
        <Section title="Prizes / Medals" className="mt-12">
          <TournamentPrizes />
        </Section>

        {/* PLAY UP & UNRATED */}
        <div className={`grid ${getGridCols(2)} gap-8 mt-12 mb-12`}>
          <Section title="Play Up & Unrated Players">
            <PlayUpPolicy />
          </Section>
          <Section title="Refund Policy">
            <RefundPolicy firstDeadline="Nov 1, 2025" secondDeadline="Nov 8, 2025" />
          </Section>
        </div>

        {/* MISC */}
        <Section title="Miscellaneous">
          <TournamentMiscellaneous />
        </Section>

        {/* RULES */}
        <Section title="Tournament Rules & Policies" className="mt-12">
          <TournamentRules showFooter={false} />
        </Section>
      </main>
      </div>
      </div>
  );
}
