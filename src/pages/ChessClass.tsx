import { mainStyle } from '../styles/mainStyle';

export default function ChessClass() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.accent}>Chess Class</h1>
      
      <section id="foundation-level" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Foundation Level</h2>
        <div className={mainStyle.card}>
          <h3 className={mainStyle.h3}>Brave Knight</h3>
          <p className={mainStyle.text.muted}>Beginner level chess class</p>
        </div>
        <div className={mainStyle.card}>
          <h3 className={mainStyle.h3}>Wise Bishop</h3>
          <p className={mainStyle.text.muted}>Beginner level chess class</p>
        </div>
      </section>

      <section id="intermediate-level" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Intermediate Level</h2>
        <div className={mainStyle.card}>
          <h3 className={mainStyle.h3}>Confident Rook</h3>
          <p className={mainStyle.text.muted}>Intermediate level chess class</p>
        </div>
        <div className={mainStyle.card}>
          <h3 className={mainStyle.h3}>Determined Queen/King</h3>
          <p className={mainStyle.text.muted}>Intermediate level chess class</p>
        </div>
      </section>

      <section id="advanced-level" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Advanced Level</h2>
        <div className={mainStyle.card}>
          <h3 className={mainStyle.h3}>The Professionals</h3>
          <p className={mainStyle.text.muted}>Advanced level chess class</p>
        </div>
      </section>
    </div>
  );
}
