import { mainStyle } from '../styles/mainStyle';

export default function GroupClass() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.accent}>Group Class</h1>
      
      <section id="class-overview" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Class Overview</h2>
        <p className={mainStyle.text.body}>
          Our group classes provide an interactive and collaborative learning environment where students can improve their chess skills together.
        </p>
      </section>

      <section id="class-levels" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Class Levels</h2>
        <div className={mainStyle.grid.cols2}>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Beginner Group</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Ages 6-12</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Learn the basics of chess, piece movements, and simple tactics</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Intermediate Group</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Ages 8-16</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Develop strategic thinking and tournament preparation</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Advanced Group</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Ages 10+</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Advanced tactics, opening theory, and competitive play</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Adult Group</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Ages 18+</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Chess for adults of all skill levels</p>
          </div>
        </div>
      </section>

      <section id="schedule-fees" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Schedule & Fees</h2>
        <p className={`${mainStyle.text.body} mb-4`}>Classes run weekly with flexible scheduling options.</p>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>Weekly sessions: 1.5 hours per class</li>
          <li className={mainStyle.list.item}>Small group sizes (max 8 students)</li>
          <li className={mainStyle.list.item}>Multiple locations across Greater Vancouver</li>
          <li className={mainStyle.list.item}>Contact us for current pricing and availability</li>
        </ul>
      </section>
    </div>
  );
}
