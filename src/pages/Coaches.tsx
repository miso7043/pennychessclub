import { mainStyle } from '../styles/mainStyle';

export default function Coaches() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.accent}>Our Coaches</h1>
      
      <section id="head-coach" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Head Coach - WIM Penny Pham</h2>
        <p className={mainStyle.text.body}>
          Women's International Master with extensive teaching and competitive experience.
        </p>
      </section>

      <section id="coaching-team" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Our Coaching Team</h2>
        <div className={mainStyle.grid.cols3}>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Coach Name 1</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Title/Specialty</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Brief description of experience and expertise</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Coach Name 2</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Title/Specialty</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Brief description of experience and expertise</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Coach Name 3</h3>
            <p className={`${mainStyle.text.muted} mb-2`}>Title/Specialty</p>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted}`}>Brief description of experience and expertise</p>
          </div>
        </div>
      </section>

      <section id="qualifications" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Coach Qualifications</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>FIDE-rated players and titled coaches</li>
          <li className={mainStyle.list.item}>Extensive teaching experience</li>
          <li className={mainStyle.list.item}>Tournament directing certifications</li>
          <li className={mainStyle.list.item}>Background-checked and child-safe certified</li>
        </ul>
      </section>
    </div>
  );
}
