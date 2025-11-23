import React, { useState } from "react";
import { mainStyle } from '../../styles/mainStyle';
import { useMobile } from "../../utils/Util";
import FixedBackground from '../../components/common/FixedBackground';

const coaches = [
  {
    name: "WIM Penny (Bich-Ngoc) Pham",
    title: "Head Coach",
    subtitle: "Woman International Master since 2010",
    details: [
      "Fide Peak Rating: 2238, CFC Peak Rating: 2294",
      "Silver Medal Asian Continental Woman Championship",
      "Winner of several national championships in Vietnam",
      "The first female Fide Trainer in Canada",
    ],
    img: "imgs/about/PennyHD.avif",
  },
  {
    name: "Dr. Quang Long Le",
    title: "Invited Coach",
    subtitle: "International Master",
    details: [
      "New Westminster resident, is currently working as a research scientist in a Vancouver start-up.",
      "He earned the International Master title in 2009 and PhD in Chemistry in 2018.",
      "He enjoys the arts of a beautiful chess game, both tactically and strategically, regardless of the result.",
      "He aims to get the GM title before retirement.",
      "He is our frequent special guest for topic sessions and internal tournaments.",
    ],
    img: "imgs/about/LONG.avif",
  },
  {
    name: "Alan",
    title: "Coach",
    subtitle: "USCF National Master with rating of 2284",
    details: [
      "Semi-finalist in Phillipine Chess Championship for World Chess Plympiad",
      "3X Gold Medalist of NCAA Chess Tournament in Philippines",
      "Numerous awards as Chess Coach of the Year",
      "Notable students include GM Darwin Laylo of the Philippines and former child prodigy Solomon Bautista - who at 9 years old defeated highly respected and famous Russian Chess Coach/Trainer GM Eduard Guffeld",
    ],
    img: "imgs/about/Alan.avif",
  },
  {
    name: "Arpak",
    title: "Coach",
    subtitle: "Candidate Master with highest FIDE rating of 2298",
    details: [
      "4 times Iraq Youth Champions",
      "Representing Iraq National Team for many tournaments",
      "Canadian Senior Championship 2nd place in 2018",
      "BC Senior Champion of 2018, 2019 and 2022",
      "Representing BC team against Washington in 2019 & 2022",
      "Actively participating in tournaments with very strong performances",
      "Over 20-year coaching experiences with many students winning different levels including National Champions.",
    ],
    img: "imgs/about/Arpak.avif",
  },
  {
    name: "IM Thanh Nguyen",
    title: "Coach",
    subtitle: "IM Title in 2019",
    details: [
      "He spent 6 years in Budapest, Hungary, played more than 300 games to archive 3 IM norms",
      "Peak fide rating at 2401",
      "10 years coaching experiences",
    ],
    img: "imgs/about/Thanh.avif",
  },
  {
    name: "Juan",
    title: "Coach",
    subtitle: "",
    details: [
      "Has been passionate about chess since he was a child",
      "Spent most of his professional career working with youth of different backgrounds abilities",
      "Prides himself in being good at explaining difficult concepts and breaking them down so everyone in the class can understand",
      "Very energetic and patient to inspire children to achieve their full potential",
    ],
    img: "imgs/about/Juan.avif",
  },
  {
    name: "Harman",
    title: "Coach",
    subtitle: "",
    details: [
      "An aspiring 1800 rated chess player, hoping to one day reach an IM title.",
      "Strong believer of chess as a great tool to train the mind for the discipline",
      "Have a sincere love of teaching the game of chess to all ages",
      "Apply appropriate and suitable teaching styles based on students",
      "Currently obtaining his Master in Counselling but will continue with his chess dream after his masters is completed.",
    ],
    img: "imgs/about/Harman.avif",
  },
  {
    name: "Matthew So",
    title: "Coach",
    subtitle: "USCF-rated player rated 1785, and CFC provisionally-rated 1917.",
    details: [
      "Rated over 2100 Rapid, and 2000 Blitz on chess.com.",
      "Played chess since the age of 8 years old.",
      "Has extensive experience teaching children skills including Chess, Lego Robotics, and Swimming.",
      "Recently completed the Bachelor of Business Administration at the British Columbia Institute of Technology.",
    ],
    img: "imgs/about/Matthew.avif",
  },
  {
    name: "Diba",
    title: "Coach",
    subtitle: "",
    details: [
      "Started playing chess at the age of 8 she believes her chess journey has not only been fun and full of adventure but has also played a crucial role in shaping her personality and developing valuable life skills.",
      "With a chess.com rating of 2100 and a CFC rating of 1700.",
      "Awarded numerous provincial and national prizes in Iran.",
      "Ranked second in the Standard section, and first in the Blitz section of the Iranian U18 Women’s Chess Championship in 2020.",
      "Received the U1800 Top Girl prize in the BC Junior Chess Championship 2022",
    ],
    img: "imgs/about/Diba_edited.avif",
  },
  {
    name: "Joydeep",
    title: "Coach",
    subtitle: "",
    details: [
      "A passionate chess player with experience teaching chess in China, Canada, and India.",
      "Have a peak Chess.com rating of 2208, and a peak lichess rating of 2237",
      "2022 BC Open U1500 champion",
      "I encourage students to play with initiative, have fun learning, and relate the principles of chess to their daily lives.",
      "Currently developing my skills in chess by participating in tournaments, analyzing games, and mastering blindfold chess",
    ],
    img: "imgs/about/Joydeep.avif",
  },
  {
    name: "George",
    title: "Coach",
    subtitle: "",
    details: [
      "Recognized as a top 100 standard chess player in Nigeria, Africa.",
      "1x gold medalist from WAUG ( West African University Games ) in 2018",
      "Rated over 2200 on Lichess with a standard FIDE rating of 1889",
      "Experience of teaching kids and adults chess",
    ],
    img: "imgs/about/George.avif",
  },
];

export default function Coaches() {
  const isMobile = useMobile();

  const sectionStyle = "shadow-2xl border border-emerald-300 rounded-4xl pt-12 mb-8 px-6";
  const bgColors = ["bg-amber-100/80", "bg-lime-100/80"];

  const backImgPath = "/imgs/bg/back-3.webp";
    // 배경 이미지 로딩 상태만 관리
    const [bgLoaded, setBgLoaded] = useState(false);
    React.useEffect(() => {
      setBgLoaded(false);
      const img = new window.Image();
      img.src = backImgPath;
      img.onload = () => setBgLoaded(true);
    }, [backImgPath]);

  return (
    <div className="relative min-h-screen py-10 px-4">
      <FixedBackground backImgPath={backImgPath} bgLoaded={bgLoaded} />

      <h2
        className={`${mainStyle.h2} text-center text-yellow-100 text-4xl md:text-6xl py-3 md:py-6`}
        style={{ WebkitTextStroke: isMobile ? '1px black' : '2px black' }}
      >
        Our Coaches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coaches.map((coach, idx) => (
          <section key={coach.name} className={`${sectionStyle} ${bgColors[idx % 2]} flex flex-col items-center`}>
            <div className="relative w-60 h-60 mb-4">
              <img
                src={coach.img}
                alt={coach.name}
                className="w-60 h-60 object-cover rounded-full z-10"
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-0"
                style={{ boxShadow: 'inset -3px -5px 15px 8px #303030af' }}
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1 text-center drop-shadow">{coach.title}</h3>
            <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1 text-center">{coach.name}</div>
            {coach.subtitle && <div className="text-base md:text-lg text-gray-600 mb-2 text-center">{coach.subtitle}</div>}
            <ul className="text-base md:text-lg text-gray-700 list-disc list-inside mb-2 text-left max-w-xs pb-4">
              {coach.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Apply Today 섹션 추가 */}
      <section className={`${sectionStyle} bg-emerald-50 flex flex-col items-center mt-12 mb-4`}>
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-3 text-center">Apply Today</h3>
        <p className="text-xl md:text-2xl text-gray-800 mb-2 px-4 md:px-8">
          We are always eager to meet experienced coach and high level chess player. If you would like to join our team, please do not hesitate to reach out to us at
          <a href="mailto:pennychessclub@gmail.com" className="underline text-emerald-700 mx-1">pennychessclub@gmail.com</a>.
        </p>
        <p className="text-xl md:text-2xl text-gray-800 mb-12 px-4 md:px-8">
          We look forward to collaborating with you!
        </p>
      </section>
    </div>
  );
}
