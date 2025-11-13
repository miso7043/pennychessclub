import { mainStyle } from '../styles/mainStyle';

export default function Founder() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.founder}>Meet The Founder</h1>
      
      <section id="wim-penny-pham" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>WIM Penny Pham</h2>
        <p className={mainStyle.text.body}>Women's International Master</p>
      </section>

      <section id="background" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Background</h2>
        <p className={mainStyle.text.body}>Biography and background</p>
      </section>

      <section id="experience" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Experience</h2>
        <p className={mainStyle.text.body}>Chess experience and achievements</p>
      </section>
    </div>
  );
}
