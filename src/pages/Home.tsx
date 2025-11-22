import React from "react";
import { CampTable } from "../components/CampTable";
import { Modal } from "../components/Modal";
import { mainStyle } from '../styles/mainStyle';
import { HomeEventCard } from '../components/HomeEventCard';
import { menuData } from '../constance/menuInfo';
import LocationsMap from "../components/LocationsMap";
import { getRandomBgPath, useMobile } from "../utils/Util";

export default function Home() {
  const isMobile = useMobile();
  const [backImgPath] = React.useState(() => getRandomBgPath(isMobile));
  const [campModalOpen, setCampModalOpen] = React.useState(false);
  const [chessClassScheduleOpen, setChessClassScheduleOpen] = React.useState(false);

  const summerCampInfo = [{
    // CYCC Preparation Camp
    title: "1. CYCC Preparation Camp (10 days)",
    tableTitle: ["Location", "Time", "Level", "Dates"],
    tableData: [
      [true, "Burnaby", "10:00 AM - 12:00 PM", "Rating below 1000", "Jun 28 - Jul 7"],
      [false, '', "1:00 PM - 3:00 PM", "Rating 1000 - 1500", "Jun 28 - Jul 7"],
      [false, '', "3:00 PM - 5:00 PM", "Rating 1500+", "Jun 28 - Jul 7"],
    ]
  },
  {
    // Summer Camp (Mon - Fri)
    title: "2. Summer Camp (Mon - Fri)",
    tableTitle: ["Location", "Time", "Level", "Dates"],
    tableData: [
      [true, "Van East", "10:00 AM - 12:00 PM", "Foundation", "Jun 30 - Aug 22"],
      [false, '', "1:00 PM - 3:00 PM", "Intermediate", "Jul 8 - Aug 22"],
      [false, '', "3:15 PM - 5:15 PM", "Advanced", "Jul 8 - Aug 22"],
      [true, "Burnaby", "9:30 AM - 11:30 AM", "Foundation", "Jun 30 - Aug 22"],
      [false, '', "9:30 AM - 11:30 AM", "Intermediate", "Jul 8 - Aug 22"],
      [true, "Coquitlam", "10:00 AM - 12:00 AM", "Foundation", "Jun 30 - Jul 26"],
      [false, '', "1:00 PM - 3:00 PM", "Intermediate", "Jun 30 - Jul 26"],
    ]
  }];

  const chessClassSchedule = [
    {
      title: "1. Burnaby Chess Class Schedule",
      tableTitle: ["Level", "Day", "Time", "Coach"],
      tableData: [
        [true, "Beginner", "Thursday", "3:30PM - 5:00PM", "Jethro Morera"],
        [false, "Beginner", "Saturday", "3:10PM - 4:40PM", "Dastan Arpak"],
        [false, "Beginner", "Sunday", "11:00AM - 12:30PM", "Dastan Arpak"],
        [true, "Foundation", "Monday", "3:45PM - 5:15PM", "WIM/FT Penny Pham"],
        [false, "Foundation", "Wednesday", "3:45PM - 5:15PM", "Janek Kaznowski"],
        [false, "Foundation", "Saturday", "1:30PM - 3:00PM", "Dastan Arpak"],
        [true, "Pre-Intermediate", "Tuesday", "3:30PM - 5:30PM", "Janek Kaznowski"],
        [false, "Pre-Intermediate", "Saturday", "11:10AM - 1:10PM", "Dastan Arpak"],
        [true, "Intermediate", "Tuesday", "5:40PM - 7:40PM", "Janek Kaznowski"],
        [false, "Intermediate", "Wednesday", "5:30PM - 7:30PM", "Janek Kaznowski"],
        [false, "Intermediate", "Thursday", "5:10PM - 7:10PM", "Jethro Morera"],
        [false, "Intermediate", "Saturday", "9:00AM - 11:00AM", "Dastan Arpak"],
        [false, "Intermediate", "Sunday", "1:00PM - 3:00PM", "Dastan Arpak"],
        [true, "Pre-advanced", "Monday", "5:30PM - 7:30PM", "WIM/FT Penny Pham"],
        [false, "Pre-advanced", "Friday", "3:30PM - 5:30PM", "IM Thanh Nguyen"],
        [false, "Pre-advanced", "Saturday", "9:00AM - 11:00AM", "IM Thanh Nguyen"],
        [true, "Advanced", "Friday", "5:40PM - 7:40PM", "IM Thanh Nguyen"],
        [false, "Advanced", "Saturday", "11:10AM - 1:10PM", "IM Thanh Nguyen"],
        [true, "Private", "Monday", "3:30PM - 5:00PM", "IM Thanh Nguyen"],
        [false, "Private", "Monday", "5:10PM - 7:10PM", "IM Thanh Nguyen"],
      ]
    },
    {
      title: "2. Vancouver East (EMA Van East)",
      tableTitle: ["Level", "Day", "Time", "Coach"],
      tableData: [
        [true, "Fun Chess", "Tuesday", "5:15PM - 6:15PM", "Joey Xu"],
        [false, "Pre-Foundation", "Tuesday", "4:00PM - 5:00PM", "Joey Xu"],
        [false, "Pre-Foundation +", "Thursday", "5:30PM - 6:30PM", "Janek Kaznowski"],
        [true, "Beginner", "Saturday", "10:45AM - 12:15PM", "Janek Kaznowski"],
        [false, "Foundation", "Tuesday", "3:45PM - 5:15PM", "WIM/FT Penny Pham"],
        [false, "Foundation", "Thursday", "3:45PM - 5:15PM", "Janek Kaznowski"],
        [false, "Foundation", "Saturday", "9:00AM - 10:30AM", "Janek Kaznowski"],
        [true, "Pre-Intermediate", "Saturday", "10:00AM - 12:00PM", "WIM/FT Penny Pham"],
        [false, "Pre-Intermediate", "Tuesday", "3:45PM - 5:45PM", "IM Thanh Nguyen"],
        [true, "Intermediate", "Tuesday", "6:00PM - 8:00PM", "IM Thanh Nguyen"],
        [false, "Intermediate", "Saturday", "2:45PM - 4:45PM", "WIM/FT Penny Pham"],
        [true, "Pre-advanced", "Wednesday", "3:45PM - 5:45PM", "Online \n WIM/FT Penny Pham"],
        [false, "Pre-advanced", "Sunday", "2:00PM - 4:00PM", "WIM/FT Penny Pham"],
        [false, "Pre-advanced", "Saturday", "12:30PM - 2:30PM", "WIM/FT Penny Pham"],
        [false, "Pre-advanced", "Wednesday", "3:45PM - 5:45PM", "IM Thanh Nguyen"],
        [true, "Advanced", "Tuesday", "5:30PM - 7:30PM", "WIM/FT Penny Pham"],
        [false, "Advanced", "Sunday", "10:00AM - 1:00PM", "WIM/FT Penny Pham"],
        [true, "Master Training 1", "Wednesday", "6:00PM - 8:00PM", "Online \n WIM/FT Penny Pham"],
        [false, "Master Training 1", "Saturday", "5:00PM - 7:00PM", "IM Thanh Nguyen"],
        [true, "Master Training 2", "Sunday", "10:00AM - 1:00PM", "IM Long Le"],
        [true, "Private", "Wednesday", "6:00PM - 8:00PM", "IM Thanh Nguyen"],
        [false, "Private", "Saturday", "2:30PM - 4:30PM", "IM Thanh Nguyen"],
      ]
    },
    {
      title: "3. Coquitlam",
      tableTitle: ["Level", "Day", "Time", "Coach"],
      tableData: [
        [true, "Beginner", "Sunday", "2:00PM - 3:30PM", "Janek Kaznowski"],
        [true, "Foundation", "Sunday", "9:30AM - 11:00AM", "Janek Kaznowski"],
        [true, "Pre-Intermediate", "Monday", "3:30PM - 5:30PM", "Alex Zou"],
        [false, "Intermediate", "Monday", "5:40PM - 7:40PM", "Alex Zou"],
        [false, "Intermediate", "Sunday", "10:00AM - 12:00PM", "IM Thanh Nguyen"],
        [true, "Pre-advanced", "Sunday", "1:00PM - 3:00PM", "IM Thanh Nguyen"],
        [true, "Advanced", "Sunday", "3:15PM - 5:15PM", "IM Thanh Nguyen"],
      ]
    },
    {
      title: "4. Surrey",
      tableTitle: ["Level", "Day", "Time", "Coach"],
      tableData: [
        [true, "Beginner", "Saturday", "1:30PM - 3:00PM", "Aadit Arya"],
        [true, "Foundation", "Saturday", "3:15PM - 4:45PM", "Aadit Arya"],
        [true, "Pre-Intermediate", "Thursday", "3:30PM - 5:30PM", "IM Thanh Nguyen"],
        [true, "Intermediate", "Thursday", "5:40PM - 7:40PM", "IM Thanh Nguyen"],
      ]
    },
    {
      title: "5. West Vancouver",
      tableTitle: ["Level", "Day", "Time", "Coach"],
      tableData: [
        [true, "Beginner", "Wednesday", "3:30PM - 5:00PM", "Nijat Ibrahimov"],
        [true, "Intermediate", "Wednesday", "6:40PM - 7:10PM", "Nijat Ibrahimov"],
        [true, "Pre-Intermediate", "Wednesday", "5:05PM - 6:35PM", "Nijat Ibrahimov"],
      ]
    },
    {
      title: "6. WIM/FT Penny Pham",
      tableTitle: ["Date", "Level", "Time", "Location", "Coach"],
      tableData: [
        [true, "Monday", "Foundation", "3:45PM - 5:15PM", "Burnaby", "WIM/FT Penny Pham"],
        [false, "Monday", "Pre-advanced", "5:30PM - 7:30PM", "Burnaby", "WIM/FT Penny Pham"],
        [true, "Tuesday", "Foundation", "3:45PM - 5:15PM", "EMA Van East", "WIM/FT Penny Pham"],
        [false, "Tuesday", "Advanced", "5:30PM - 7:30PM", "EMA Van East", "WIM/FT Penny Pham"],
        [true, "Wednesday", "Master Training 1", "6:00PM - 8:00PM", "Online", "WIM/FT Penny Pham"],
        [false, "Wednesday", "Pre-advanced", "3:45PM - 5:45PM", "Online", "WIM/FT Penny Pham"],
        [true, "Thursday", "Private", "3:45PM - 5:45PM", "Online", "WIM/FT Penny Pham"],
        [false, "Saturday", "Intermediate", "2:45PM - 4:45PM", "EMA Van East", "WIM/FT Penny Pham"],
        [true, "Saturday", "Pre-advanced", "12:30PM - 2:30PM", "EMA Van East", "WIM/FT Penny Pham"],
        [false, "Saturday", "Pre-Intermediate", "10:00AM - 12:00PM", "EMA Van East", "WIM/FT Penny Pham"],
        [true, "Sunday", "Advanced", "10:00AM - 1:00PM", "EMA Van East", "WIM/FT Penny Pham"],
        [false, "Sunday", "Pre-advanced", "2:00PM - 4:00PM", "EMA Van East", "WIM/FT Penny Pham"],
      ]
    },
  ];

  const locations = [
    {
      name: "Burnaby",
      address: "4789 Kingsway, Unit 200",
      lat: 49.232471,
      lng: -123.003623,
    },
    {
      name: "West Van",
      address: "210-1760 Marine Dr.",
      lat: 49.325430,
      lng: -123.155690,
    },
    {
      name: "Coquitlam",
      address: "206-3030 Lincoln Ave",
      lat: 49.288670,
      lng: -122.793210,
    },
    {
      name: "Vancouver East",
      address: "201 - 3316 Kingsway",
      lat: 49.233370,
      lng: -123.048370,
    },
    {
      name: "Surrey",
      address: "201-14888 104 Ave, Surrey",
      lat: 49.191330,
      lng: -122.812210,
    },
    {
      name: "Langley",
      address: "200-20378 88 Ave, Langley",
      lat: 49.164370,
      lng: -122.664370,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* FIXED BACKGROUND */}

      {/* CONTENT OVERLAY */}
      <div className={`${mainStyle.pageContainer} mt-3 md: mt-1`}>
        <section id="upcoming-events" className={`${mainStyle.section} relative overflow-hidden p-0 w-full`}>
          <div className="my-auto">
            <div className="absolute inset-0 w-full h-full -z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backImgPath})` }}></div>
            <div className="relative bg-black/80 px-0 py-17 px-3 m-0 md:px-16 md:m-15 ">
              <h2
                className={`${mainStyle.h2} text-center text-yellow-100 text-4xl md:text-6xl py-3 md:py-6`}
                style={{ WebkitTextStroke: isMobile ? '1px black' : '2px black' }}
              >
                UPCOMING EVENTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HomeEventCard
                  href={menuData.main.tournament.submenu.bcChessCup.to}
                  title={menuData.main.tournament.submenu.bcChessCup.name}
                  subtitle="CYCC Qualifier"
                  date="January 10 - 11 2026"
                />
                <HomeEventCard
                  href={menuData.main.tournament.submenu.monthlyRapid.to}
                  title={menuData.main.tournament.submenu.monthlyRapid.name}
                  subtitle=" "
                  date="November 9th & December 07th"
                />
                <HomeEventCard
                  href={menuData.main.tournament.submenu.gvct9.to}
                  title="GREATER VANCOUVER CHESS TOURNAMENT 9"
                  date="November 22nd - 23rd"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="upcoming-events" className={`${mainStyle.section}`}>
          <h2
            className={`${mainStyle.h2} text-center text-yellow-100 text-4xl md:text-6xl py-3 md:py-6`}
            style={{ WebkitTextStroke: isMobile ? '1px black' : '2px black' }}
          >
            Classes Schedule & Camps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div>
              <button
                className="w-full min-h-[7rem] border rounded-lg my-4 pt-6 py-3 cursor-pointer border-white/0 
                relative text-2xl md:text-3xl text-center text-white font-bold 
                after:absolute after:inset-1 after:rounded-lg after:border-2 after:border-stone-600 after:pointer-events-none 
                after:content-[''] after:transition-colors hover:after:border-emerald-600 after:shadow-xl hover:after:shadow-2xl"
                style={{ backgroundImage: 'radial-gradient(#142127, #243137)' }}
                onClick={() => setCampModalOpen(true)}
              >
                Summer Camp 2025
              </button>
              <Modal open={campModalOpen} onClose={() => setCampModalOpen(false)} title="Summer Camp 2025">
                <div className="w-full flex flex-col gap-8">
                  {summerCampInfo.map((campInfo, index) => (
                    <CampTable
                      key={index}
                      title={campInfo.title}
                      tableTitles={campInfo.tableTitle}
                      rows={campInfo.tableData}
                    />
                  ))}
                </div>
              </Modal>
            </div>

            <div >
              <button
                className="w-full min-h-[7rem] border rounded-lg my-4 pt-6 py-3 cursor-pointer border-white/0 
                relative text-2xl md:text-3xl text-center text-white font-bold 
                after:absolute after:inset-1 after:rounded-lg after:border-2 after:border-stone-600 after:pointer-events-none 
                after:content-[''] after:transition-colors hover:after:border-emerald-600 after:shadow-xl hover:after:shadow-2xl"
                style={{ backgroundImage: 'radial-gradient(#142127, #243137)' }}
                onClick={() => setChessClassScheduleOpen(true)}
              >
                SEP 2025 - JAN 2026<br />CHESS CLASS SCHEDULE
              </button>
              <Modal open={chessClassScheduleOpen} onClose={() => setChessClassScheduleOpen(false)} title="Summer Camp 2025">
                <div className="w-full flex flex-col gap-8">
                  {chessClassSchedule.map((campInfo, index) => (
                    <CampTable
                      key={index}
                      title={campInfo.title}
                      tableTitles={campInfo.tableTitle}
                      rows={campInfo.tableData}
                    />
                  ))}
                </div>
              </Modal>
            </div>
          </div>
        </section>

        {/* ABOUT US Parallax Section */}
        <section id="about-us" className={mainStyle.section + " relative overflow-hidden p-0 w-full"}>
          <div className="absolute inset-0 w-full h-full -z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/imgs/bg/Max_Edric.avif')" }}></div>
          <div className="relative bg-black/80 py-17 px-3 m-0 md:px-16 md:m-15 rounded-xl mx-auto">
            <h2 className={mainStyle.h2 + " text-yellow-100 text-4xl md:text-5xl mb-6 text-center"}>ABOUT US</h2>
            <p className="text-white font-bold text-2xl md:text-3xl text-center font-semibold mb-4">Welcome to Penny Chess Club!</p>
            <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
              Penny Chess Club is a prestigious chess playground for everyone who shares a love for this royal game. Newly founded in the Spring of 2022 by Woman International Master Penny Pham, we want to create a tightened community of chess players in British Columbia, Canada from all levels and age groups, especially kids from the age of 4-12.
            </p>
          </div>
        </section>

        {/* OUR GOALS Section (no parallax) */}
        {/* <section id="our-goals" className={mainStyle.section + " bg-black/90 relative overflow-hidden p-0"}> */}
        <section id="our-goals" className={mainStyle.section + " relative overflow-hidden p-0 w-full"}>
          <div className="absolute inset-0 w-full h-full -z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/imgs/bg/Lecturing.avif')" }}></div>
          <div className="relative bg-black/80 py-17 px-3 m-0 md:px-16 md:m-15 rounded-xl mx-auto">
            <h2 className={mainStyle.h2 + " text-yellow-100 text-4xl md:text-5xl mb-6 text-center"}>OUR GOALS</h2>
            <ul className="text-white font-bold text-xl md:text-2xl leading-relaxed list-disc list-inside mb-6">
              <li>To help each person develop not only their chess skills but also strength of mind to conquer the world.</li>
              <li>To help kids explore their passion in the most intellectual game.</li>
              <li>Recognize and train potential talents to compete in national and international tournaments.</li>
              <li>Create a safe and fun environment for local players.</li>
              <li>Expand the chess community in BC to be bigger and stronger.</li>
            </ul>
            <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
              At our Sunday weekly practice session, our players will receive curated self-study plans: solving puzzles from selected resources and analyzing past games, and 1-on-1 mentorship on strategies. We will also host internal friendly tournaments, and CFC-rated internal tournaments
            </p>
          </div>
        </section>

        <section id="locations" className={`${mainStyle.section} bg-black/80 `}>
          <h2 className={mainStyle.h2 + " text-yellow-100 text-4xl md:text-5xl py-6 mb-6 text-center drop-shadow"}>Our Locations</h2>
          <div className="w-full max-w-5xl mx-auto">
            <LocationsMap googleMapsApiKey="AIzaSyBpvpyDDsvHa-tkAe6iPt1zIyfAk5AeKYk" 
                          locations={locations} />
            <div className="mt-8 mb-6 p-4 bg-slate-600 rounded-xl shadow">
              <h3 className="text-3xl text-center font-bold mb-2 text-white">Contact</h3>
              <div className="text-center text-lg md:text-xl text-white mb-1">4789 Kingsway, Unit 200, Burnaby, BC V5H 0A3</div>
              <div className="text-center text-lg md:text-xl text-white mb-1">
                <a href="mailto:pennychessclub@gmail.com" className="underline hover:text-emerald-700">pennychessclub@gmail.com</a>
              </div>
              <div className="text-center text-lg md:text-xl text-white">
                {isMobile ? (
                  <a href="tel:+16045236666" className="underline hover:text-emerald-700">+1 604 523 6666</a>
                ) : (
                  "+1 604 523 6666"
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
