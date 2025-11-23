import React, { useState } from "react";

import { getRandomBgPath, useMobile } from "../../utils/Util";
import type { TournamentRuleProps } from "../../components/tournmentEvent/TournamentRules";
import TournamentRules from "../../components/tournmentEvent/TournamentRules";
import { TournamentSection } from "../../components/TournamentEvent";

const rulesInfo: TournamentRuleProps[] = [
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
    title: "VI. Electronic Device Rules",
    content: [
      "All electronic devices (for example: phones, tablets, laptops, smart watches…) are not permitted to be used while players are playing except for special needs with TD’s approval.",
      "Electronic devices that can communicate with other people or devices, or operate softwares should be kept in a bag or a case. They must be turned off completely. They must remain at the playing table if the game is in progress. ",
      "Spectators are asked to keep their phone in silent mode.",
      "Violators can be asked to leave the room. Serious cases might lead to an anti-cheating investigation."
    ]
  },
  { title: "VII. Others", content: { description: "We follow FIDE rules; If there is any argument between players, or player and arbiter, the TD will make the final decision based on FIDE guidelines." } },
]

// ---------- PAGE ----------
export default function Tournament() {
  // 모바일 여부 감지
  const isMobile = useMobile();

  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  // 배경 이미지 로딩 상태만 관리
  const [bgLoaded, setBgLoaded] = useState(false);
  React.useEffect(() => {
    setBgLoaded(false);
    const img = new window.Image();
    img.src = backImgPath;
    img.onload = () => setBgLoaded(true);
  }, [backImgPath]);


  return (
    <div className="relative min-h-screen text-gray-900">
      <div className="relative bg-gradient-to-b from-white/70 via-gray90 to-gray-100/50">
        {/* HERO */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* FIXED BACKGROUND */}
          <div
            className="fixed top-0 left-0 w-screen h-screen -z-10 transition-opacity duration-500"
            style={{
              minHeight: '100vh',
              width: '100vw',
              backgroundImage: `url(${backImgPath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              opacity: bgLoaded ? 1 : 0,
            }}
          />

          <div className="rounded-2xl border-2 border-amber-300/60 bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-sm p-8 shadow-sm text-center mb-12">
            <div className="text-3xl md:text-4xl font-bold text-amber-800">GREATER VANCOUVER CHESS TOURNAMENTS</div>
            <div className="text-lg md:text-xl font-bold text-left mt-8">
              Greater Vancouver Chess Tournament is a CFC-rated, classical tournament with typical time controls and prizes as follow:
            </div>

            <ul className="list-disc list-inside space-y-1 text-gray-700 text-left mt-2 py-2">
              <li className="py-2 text-lg md:text-xl">Rounds 1, 2 and 3: each player has 50 minutes with 10 second increment per move. Rounds 4 and 5: 90 minutes with 30 second increment per move. </li>
              <li className="py-2 text-lg md:text-xl">Prizes: total fund $4500-$5000 guaranteed and trophies for best boys/girls to encourage young players.</li>
              <li className="py-2 text-lg md:text-xl">This is a playground for players of all levels, from beginners to masters, with different sections based on CFC rating. There is no age limit. Kid friendly playing conditions.</li>
            </ul>
          </div>

          {/* <div className="rounded-2xl border-2 border-amber-300/60  backdrop-blur-sm shadow-sm text-center mb-12"> */}
          <div className="rounded-2xl border-2 border-sky-300/60 bg-gradient-to-b from-white/90 to-white/60 text-center  p-8 ">
            <div className="text-3xl md:text-4xl font-bold text-amber-800">WEEKLY SUNDAY CHESS TOURNAMENT</div>
            <div className="text-lg md:text-xl text-left mt-8">
              Every Sunday at Penny Chess Club Burnaby Location, we organize rapid chess tournaments with time control of 10 minutes with 5 second increment per move. It is rated for the CFC quick rating. The prizes for top 3 are $60, $40 and $20. This is a playground for all chess lovers who would like to practice rapid chess on a weekly basis. There is no age limit. Kid friendly environment.
            </div>
          </div>

          {/* RULES */}
          <TournamentSection title="Tournament Rules & Policies" className="mt-12">
            <TournamentRules showFooter={false} rules={rulesInfo} />
          </TournamentSection>
        </main>
      </div>
    </div>
  );
}
