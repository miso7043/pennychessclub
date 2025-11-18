import React from "react";
import { mainStyle } from '../styles/mainStyle';
import { HomeEventCard } from '../components/HomeEventCard';
import { menuData } from '../constance/menuInfo';
import { getRandomBgPath, useMobile } from "../utils/Util";

export default function Home() {
  const isMobile = useMobile();
  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));

  return (
    <div className="relative min-h-screen">
      {/* FIXED BACKGROUND */}
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-10 transition-opacity duration-500 bg-cover bg-center bg-no-repeat"
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: `url(${backImgPath})`,
        }}
      />

      {/* CONTENT OVERLAY */}
      <div className={mainStyle.pageContainer}>
        <section id="upcoming-events" className={`${mainStyle.section} bg-white/20`}>
          <h2 className={`${mainStyle.h2} text-center text-white text-5xl py-6`}>UPCOMING EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HomeEventCard
              href={menuData.main.tournament.submenu.bcChessCup.to}
              title={menuData.main.tournament.submenu.bcChessCup.name}
              subtitle="CYCC Qualifier"
              date="January 10 - January 11 2026"
              titleSize="text-xl"
              textSize="text-lg"
            />
            <HomeEventCard
              href={menuData.main.tournament.submenu.monthlyRapid.to}
              title={menuData.main.tournament.submenu.monthlyRapid.name}
              date="November 9th & December 07th"
              titleSize="text-xl"
              textSize="text-lg"
            />
            <HomeEventCard
              href={menuData.main.tournament.submenu.gvct9.to}
              title="GREATER VANCOUVER CHESS TOURNAMENT 9"
              date="November 22nd - November 23rd"
              titleSize="text-xl"
              textSize="text-lg"
            />
          </div>
        </section>

        <section id="about-us" className={mainStyle.section}>
          <h2 className={mainStyle.h2}>About Us</h2>
          <p className={mainStyle.text.body}>Welcome to Penny Chess Club</p>
        </section>

        <section id="our-goals" className={mainStyle.section}>
          <h2 className={mainStyle.h2}>Our Goals</h2>
          <p className={mainStyle.text.body}>Our mission and goals</p>
        </section>

        <section id="chess-products" className={mainStyle.section}>
          <h2 className={mainStyle.h2}>Chess Products</h2>
          <p className={mainStyle.text.body}>Quality chess products</p>
        </section>

        <section id="locations" className={mainStyle.section}>
          <h2 className={mainStyle.h2}>Locations</h2>
          <ul className={mainStyle.list.default}>
            <li className={mainStyle.list.item}>Burnaby</li>
            <li className={mainStyle.list.item}>West Van</li>
            <li className={mainStyle.list.item}>Coquitlam</li>
            <li className={mainStyle.list.item}>Vancouver East</li>
            <li className={mainStyle.list.item}>Surrey</li>
            <li className={mainStyle.list.item}>Langley</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
