import { mainStyle } from '../styles/mainStyle';

export default function Shop() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>Shop</h1>
      
      <section id="products" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Chess Products</h2>
        <p className={`${mainStyle.text.body} mb-6`}>
          Browse our selection of quality chess equipment and merchandise.
        </p>
        
        <div className={mainStyle.grid.cols3}>
          <div className={mainStyle.card}>
            <div className={`${mainStyle.image.aspectSquare} bg-gray-200 rounded mb-4 flex items-center justify-center`}>
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className={mainStyle.h3}>Chess Set</h3>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted} mb-2`}>Tournament quality chess set</p>
            <p className="text-primary font-bold text-lg">$XX.XX</p>
          </div>
          
          <div className={mainStyle.card}>
            <div className={`${mainStyle.image.aspectSquare} bg-gray-200 rounded mb-4 flex items-center justify-center`}>
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className={mainStyle.h3}>Chess Clock</h3>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted} mb-2`}>Digital chess clock</p>
            <p className="text-primary font-bold text-lg">$XX.XX</p>
          </div>
          
          <div className={mainStyle.card}>
            <div className={`${mainStyle.image.aspectSquare} bg-gray-200 rounded mb-4 flex items-center justify-center`}>
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className={mainStyle.h3}>Chess Book</h3>
            <p className={`${mainStyle.text.small} ${mainStyle.text.muted} mb-2`}>Learning materials</p>
            <p className="text-primary font-bold text-lg">$XX.XX</p>
          </div>
        </div>
      </section>

      <section id="coming-soon" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Coming Soon</h2>
        <p className={mainStyle.text.body}>
          Our online shop is currently under development. Please contact us directly for product inquiries and purchases.
        </p>
        <p className={`${mainStyle.text.body} mt-4`}>
          Email: <a href="mailto:pennychessclub@gmail.com" className={mainStyle.link.primary}>pennychessclub@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
