export default function Founder() {
  const sectionStyle = "shadow-2xl border border-emerald-300 rounded-4xl pt-12 mb-8 px-6";
  return (
    <div className="relative min-h-screen py-10 px-4">
      <section className={`${sectionStyle} bg-amber-100/80`}>
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-60 h-60 mb-4">
            {/* 이미지 자리: 추후 src 교체 */}
            <img
              src="/imgs/about/PennyHD.avif"
              alt="Penny Pham"
              className="w-60 h-60 object-cover rounded-full z-10"
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none z-0"
              style={{ boxShadow: 'inset -3px -5px 15px 8px #303030af' }}
            />
          </div>
          <h2 className="text-3xl font-bold text-emerald-700 mb-1">Woman International Master</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Penny (Bich-Ngoc) Pham</h3>
          <p className="italic text-gray-600 text-lg md:text-xl">Chess is not just a game. It is art and education.</p>
        </div>
      </section>

      <section className={`${sectionStyle} bg-lime-100/80 pb-8`}>
        <h4 className="text-2xl md:text-3xl text-center font-bold text-emerald-800 mb-8">The embarking journeys</h4>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          Ngoc Pham (Penny) is a chess player and instructor living in New Westminster, BC. She currently holds the title of Woman International Master (WIM) with a FIDE rating of 2240. Before moving to Canada, she has won the Vietnam's Woman Chess Championship multiple times in blitz and rapid formats.
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          She represented Vietnam in a variety of international events including Chess Olympiads (2006, 2012) and Asian Continental Championships (2012, 2019).
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          Besides the career of a professional chess player, she also enjoys teaching chess to children at all levels and organizing chess events since 2013.
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          Many of her students have won medals in national and international youth chess championships. With extensive knowledge and experience in chess and education, she would love to help you enjoy the game and improve your skills at the same time. Currently, Penny is the reigning Woman Chess Champion of British Columbia.
        </p>
      </section>

      <section className={`${sectionStyle} bg-amber-100/80 pb-8`}>
        <h4 className="text-2xl md:text-3xl text-center font-bold text-emerald-800 mb-8">Penny Chess Club - A glimpse into BC's growing interest</h4>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          Penny's passion for chess education continued to follow her here, in British Columbia. Undoubtedly, as evident through Victoria Day, Canada Day or BC Open Tournaments, this fascinating game is growing exponentially.
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-2">
          With Penny Chess Club, she wants to create and build a strong, connected, and driven community of chess players in British Columbia that welcomes all age and level groups. Her vision is preparing players for national and international tournaments, where every player can have a chance to earn their desired goals and purpose in chess.
        </p>
      </section>

      <section className={`${sectionStyle} bg-lime-100/80  pl-4 md:pl-8 pb-8`}>
        <blockquote className="text-xl md:text-2xl  pl-2 md:pl-4 border-l-4 border-emerald-600 italic text-gray-700">
          “Education is patience. You don’t need to have an out-of-this-world mind to be good at coaching. All you need is patience” - Penny Pham.
        </blockquote>
      </section>
    </div>
  );
}
