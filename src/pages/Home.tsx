import { mainStyle } from '../styles/mainStyle';
import { menuData } from '../constance/menuInfo';
import { GlassBox } from '../components/common/GlassBox/GlassBox';

function EventCard({ href, title, subtitle, date }: { href: string; title: string; subtitle?: string; date?: string }) {
  return (
    <GlassBox size="large" rounded>
      <a href={href}>
        <div className="font-bold text-lg">{title}</div>
        {subtitle && <div className="text-sm">{subtitle}</div>}
        {date && <div className="text-sm">{date}</div>}
      </a>
    </GlassBox>
  );
}

export default function Home() {
  const bgImg = `/imgs/bg/parallax-back-4.webp`;

  return (
    <div className={mainStyle.pageContainer} style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      
      <section id="upcoming-events" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>UPCOMING EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            href={menuData.main.tournament.submenu.bcChessCup.to}
            title={menuData.main.tournament.submenu.bcChessCup.name}
            subtitle="CYCC Qualifier"
            date="January 10 - January 11 2026"
          />
          <EventCard
            href={menuData.main.tournament.submenu.monthlyRapid.to}
            title={menuData.main.tournament.submenu.monthlyRapid.name}
            date="November 9th & December 07th"
          />
          <EventCard
            href={menuData.main.tournament.submenu.gvct9.to}
            title="GREATER VANCOUVER CHESS TOURNAMENT 9"
            date="November 22nd - November 23rd"
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
  );
}
