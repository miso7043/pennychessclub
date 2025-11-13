import { mainStyle } from '../styles/mainStyle';

export default function TeachingMethod() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.secondary}>Our Teaching and Training Method</h1>
      
      <section id="methodology" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Our Methodology</h2>
        <p className={mainStyle.text.body}>
          Our teaching approach combines traditional chess principles with modern training techniques to maximize student growth and enjoyment.
        </p>
      </section>

      <section id="curriculum" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Curriculum Structure</h2>
        <div className={mainStyle.grid.cols2}>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Beginner Level</h3>
            <p className={mainStyle.text.muted}>Fundamentals, piece movement, basic tactics</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Intermediate Level</h3>
            <p className={mainStyle.text.muted}>Opening principles, strategic planning, endgames</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Advanced Level</h3>
            <p className={mainStyle.text.muted}>Deep analysis, tournament preparation, advanced concepts</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Competition Training</h3>
            <p className={mainStyle.text.muted}>Tournament tactics, time management, psychology</p>
          </div>
        </div>
      </section>

      <section id="training-tools" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Training Tools</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>Interactive lessons with digital boards</li>
          <li className={mainStyle.list.item}>Online practice platforms</li>
          <li className={mainStyle.list.item}>Game analysis and review sessions</li>
          <li className={mainStyle.list.item}>Puzzle solving and tactical training</li>
        </ul>
      </section>
    </div>
  );
}
