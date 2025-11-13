import { mainStyle } from '../styles/mainStyle';

export default function About() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>About Us</h1>
      
      <section id="our-mission" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Our Mission</h2>
        <p className={mainStyle.text.body}>
          Penny Chess Club is dedicated to providing high-quality chess education and fostering a love for the game in players of all ages and skill levels.
        </p>
      </section>

      <section id="our-vision" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Our Vision</h2>
        <p className={mainStyle.text.body}>
          We strive to create a welcoming and supportive chess community in Greater Vancouver and beyond.
        </p>
      </section>

      <section id="why-choose-us" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Why Choose Us</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>Expert instruction from experienced coaches</li>
          <li className={mainStyle.list.item}>Comprehensive curriculum for all skill levels</li>
          <li className={mainStyle.list.item}>Regular tournaments and competitive opportunities</li>
          <li className={mainStyle.list.item}>Supportive and friendly learning environment</li>
        </ul>
      </section>
    </div>
  );
}
