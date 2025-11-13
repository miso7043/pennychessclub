import { mainStyle } from '../../styles/mainStyle';

export default function PhotoGalleries() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.tournament}>Photo Galleries</h1>
      
      <section className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Tournament Photos</h2>
        <p className={mainStyle.text.body}>Photo galleries coming soon...</p>
      </section>
    </div>
  );
}
