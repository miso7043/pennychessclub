import React, { useState } from "react";
import { mainStyle } from '../styles/mainStyle';
import FixedBackground from '../components/common/FixedBackground';

export default function ChessClass() {

  const backImgPath = "/imgs/bg/Lecturing.avif";
  // 배경 이미지 로딩 상태만 관리
  const [bgLoaded, setBgLoaded] = useState(false);
  React.useEffect(() => {
    setBgLoaded(false);
    const img = new window.Image();
    img.src = backImgPath;
    img.onload = () => setBgLoaded(true);
  }, [backImgPath]);

  return (
    <div className={mainStyle.pageContainer}>
      <FixedBackground backImgPath={backImgPath} bgLoaded={bgLoaded} />

      <h1
        className={`${mainStyle.h2} text-center text-stone-800 text-4xl md:text-6xl py-3 md:py-6`}
        style={{ WebkitTextStroke: '1px white' }}>GROUP LESSONS</h1>
      <div className="mb-6 text-3xl md:text-4xl text-center mb-15">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfM7Ywr_0SoHvn13I_appCEtyXi62wHjwbkouGCN5YvCVrcbw/viewform?usp=pp_url"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 md:px-12 py-3 md:py-4 text-white rounded-full font-bold shadow-xl
          hover:from-amber-700 hover:to-indigo-700
          bg-gradient-to-b from-amber-500 to-indigo-500"
        >
          Join us
        </a>
      </div>

      {/* Beginner Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Beginner Level</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-lime-100 rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold text-lime-700 mb-2">Keen Pawn I</h3>
            <p>Students learn about chess board, pieces, and rules to play a game. They know how to checkmate in simple positions to finish a game. Throughout this course, the students should also learn to be respectful in a competitive sports game</p>
            <p className="mt-2 text-sm">Duration: 3 months (usually for kids under 6 years old)</p>
          </div>
          <div className="bg-lime-100 rounded-2xl p-4 shadow">
            <h3 className="text-xl font-bold text-lime-700 mb-2">Keen Pawn II</h3>
            <p>Students gain awareness of drawn positions and able to finish a game. They learn how to checkmate with a Queen or Rook, and simple checkmate patterns in more complex positions. Throughout the course, the students should also learn to think independently and creatively.</p>
            <p className="mt-2 text-sm">Duration: 3 months</p>
          </div>
        </div>
      </section>

      {/* Foundation Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Foundation Level</h2>
        <div className="bg-pink-200 rounded-2xl p-4 shadow">
          <h3 className="text-xl font-bold text-pink-700 mb-2">Brave Knight</h3>
          <p>Students can calculate 2-3 moves in advance, and avoid hanging pieces. Upon completion of this level, they can join chess tournaments at school. The course is designed to help the students learn how to identify and analytically solve a problem.</p>
          <p className="mt-2 text-sm">Duration: 6 months</p>
        </div>
      </section>

      {/* Pre-Intermediate Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Pre-Intermediate Level</h2>
        <div className="bg-orange-300 rounded-2xl p-4 shadow">
          <h3 className="text-xl font-bold text-orange-700 mb-2">Wise Bishop</h3>
          <p>Students enhance calculation skills, play more accurately in term of tactics and will be introduced certain openings and endgame practices.</p>
          <p className="mt-2 text-sm">Duration: 6 months</p>
        </div>
      </section>

      {/* Intermediate Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Intermediate Level</h2>
        <div className="bg-rose-400 rounded-2xl p-4 shadow">
          <h3 className="text-xl font-bold text-white mb-2">Confident Rook</h3>
          <p>Students can evaluate positions by realizing strengths and weaknesses. They can build plans during the games, using tactics to obtain good positions. They gain fundamental knowledge in simple endgames. The course is designed to help students learn how to think analytically, how to set targets and work to complete them.</p>
          <p className="mt-2 text-sm">Duration: 6 months</p>
        </div>
      </section>

      {/* Pre-Advanced Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Pre-Advanced Level</h2>
        <div className="bg-purple-600 rounded-2xl p-4 shadow text-natural-500">
          <h3 className="text-xl font-bold text-white mb-2">Determined Queen/King</h3>
          <p>The course is designed to complete players' openings repertoire as a competitive level. It emphasizes in postional thinking in middlegame and more endgame practices.</p>
        </div>
      </section>

      {/* Advanced Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Advanced Level</h2>
        <div className="bg-indigo-800 rounded-2xl p-4 shadow text-indigo-200">
          <h3 className="text-xl font-bold text-indigo-100 mb-2">The Royals</h3>
          <p>Students become familiar with chess tactics and strategies in all stages of the game: opening, middlegame and endgame.</p>
          <p className="mt-2 text-sm">Duration: 12 months</p>
        </div>
      </section>

      {/* Master Level */}
      <section className="rounded-3xl mb-8 p-6 bg-gradient-to-b from-white/50 to-white/30">
        <h2 className="text-2xl font-bold text-black mb-4">Master Level</h2>
        <div className="bg-slate-800 rounded-2xl p-4 shadow text-slate-300">
          <h3 className="text-xl font-bold text-slate-100 mb-2">The Professionals</h3>
          <p>The course is designed to help students achieve best results in tournaments. Tailored to each student categorized by rating.</p>
          <p className="mt-2 text-sm">Duration: Depends</p>
        </div>
      </section>

    </div>
  );
}
