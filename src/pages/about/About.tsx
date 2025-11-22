export default function About() {
  const sectionStyle = "shadow-2xl border border-emerald-300 rounded-4xl pt-12 mb-8 px-6";
  return (
    <div className="relative min-h-screen py-10 px-4">
      {/* 상단 소개 섹션 */}
      <section className={`${sectionStyle} bg-amber-100/80`}>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-4 drop-shadow">WELCOME TO PENNY CHESS CLUB!</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 text-center mb-2">Elite Chess Community</h2>
        <p className="text-lg md:text-xl text-gray-800 my-4 md:my-8 px-4 md:px-8">
          Penny Chess Club is a prestigious chess playground for everyone who shares a love for this royal game. Newly founded in the Spring of 2022 by Woman International Master Penny Pham, we want to create a tightened community of chess players in British Columbia, Canada from all levels and age groups, especially kids from the age of 4-12.
        </p>
      </section>

      {/* Parallax Our Goals Section */}
      <section className="relative overflow-hidden p-0 w-full my-12 md:my-20">
        <div className="absolute inset-0 w-full h-full -z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/imgs/about/bg.webp')" }}></div>
        <div className="relative bg-black/70 rounded-4xl mx-auto py-12 my-12 md:my-20 px-4 md:px-16 mx-12 md:mx-20">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-100 text-center mb-8 drop-shadow" style={{ WebkitTextStroke: '2px black' }}>Our Goals</h2>
          <ul className="text-white text-lg md:text-2xl font-semibold leading-relaxed list-disc list-inside mb-6">
            <li>To help each person develop not only their chess skills but also strength of mind to conquer the world.</li>
            <li>To help kids explore their passion in the most intellectual game.</li>
            <li>Create a safe and fun environment for local players.</li>
            <li>Expand the chess community in BC to be bigger and stronger.</li>
          </ul>
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
            At our Sunday weekly session, our players will receive curated self-study plans: solving puzzles from selected resources and analyzing past games, and 1-on-1 mentorship on strategies. We will also host internal friendly tournaments, and CFC-rated internal tournaments
          </p>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className={`${sectionStyle} bg-amber-100/80 flex flex-col items-center py-12`}>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8 text-center drop-shadow">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center">
          {/* 팀원 카드 반복 (배열 map) */}
          {[
            {
              img: "/imgs/about/PennyHD.avif",
              alt: "Penny (Bich-Ngoc) Pham",
              name: "Penny (Bich-Ngoc) Pham",
              role: "Founder & Head Coach",
            },
            {
              img: "/imgs/about/LONG.avif",
              alt: "Dr. Quang Long Le",
              name: "Dr. Quang Long Le",
              role: "International Master - Coach",
            },
            {
              img: "/imgs/about/Alan.avif",
              alt: "Alan",
              name: "Alan",
              role: "Coach",
            },
            {
              img: "/imgs/about/Arpak.avif",
              alt: "Arpak",
              name: "Arpak",
              role: "Coach",
            },
            {
              img: "/imgs/about/Sherwin.avif",
              alt: "Sherwin",
              name: "Sherwin",
              role: "Coach",
            },
            {
              img: "/imgs/about/Juan.avif",
              alt: "Juan",
              name: "Juan",
              role: "Coach",
            },
          ].map((member) => (
            <div className="flex flex-col items-center" key={member.name}>
              <div className="relative mb-3">
                <img src={member.img} alt={member.alt} className="w-40 h-40 object-cover rounded-full shadow-xl" />
              </div>
              <div className="text-xl font-bold text-emerald-700 text-center">{member.name}</div>
              <div className="text-base text-gray-700 text-center">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}