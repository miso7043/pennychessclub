import { mainStyle } from '../styles/mainStyle';

export default function Home() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>Home - Penny Chess Club</h1>
      
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
