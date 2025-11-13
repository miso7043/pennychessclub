import { mainStyle } from '../styles/mainStyle';

export default function Tournament() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.tournament}>Tournament & Event</h1>
      
      <section id="weekly-sunday-rapid" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Weekly Sunday Rapid</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>CFC Quick Rated</li>
          <li className={mainStyle.list.item}>Time Control: 10+5</li>
          <li className={mainStyle.list.item}>Prizes</li>
        </ul>
      </section>

      <section id="major-tournaments" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Major Tournaments</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>BC OPEN</li>
          <li className={mainStyle.list.item}>GVCT</li>
          <li className={mainStyle.list.item}>BC Rapid Championship</li>
          <li className={mainStyle.list.item}>EMA Chess Classical</li>
          <li className={mainStyle.list.item}>PCC OPEN Series</li>
        </ul>
      </section>
    </div>
  );
}
