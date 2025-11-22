import { mainStyle } from '../../styles/mainStyle';
import { useMobile } from "../../utils/Util";

export default function TeachingMethod() {
  const sectionStyle = "shadow-2xl border border-emerald-300 rounded-4xl pt-12 mb-8 px-6";
  const isMobile = useMobile();

  return (
    <div className={mainStyle.pageContainer}>
      <div
        className={`${mainStyle.h2} text-center text-yellow-100 text-4xl md:text-6xl py-3 md:py-6`}
        style={{ WebkitTextStroke: isMobile ? '1px black' : '2px black' }}
      >
Teaching Method
      </div>

      {/* SEL 섹션 */}
      <section className={`${sectionStyle} bg-amber-100/80 pb-8 grid gap-6 md:gap-12 md:grid-cols-2 items-center`}>
        <div>
        <h2 className={mainStyle.h2}>Fostering Social-Emotional Learning (SEL) Through Chess Training</h2>
        <ul className={`${mainStyle.list.default} text-lg md:text-xl`}>
          <li className={`${mainStyle.list.item}`}>Use a simple “chess” language to help students develop self-awareness, self-management, social awareness, responsible decision making, and relationship skills</li>
          <li className={`${mainStyle.list.item}`}>Establish positive thinking and encourage good behavior in the class, regardless of game results.</li>
          <li className={`${mainStyle.list.item}`}>Learn via collaboration in groups to improve discussion and negotiation skills with their peers.</li>
          <li className={`${mainStyle.list.item}`}>Grow a more mature mindset through challenges and mistakes.</li>
          <li className={`${mainStyle.list.item}`}>Encourage students to express their thoughts, feelings, and questions during the class.</li>
          <li className={`${mainStyle.list.item}`}>Choose books over computers: As traditional as it might be, we strongly recommend reading books both at home and at school. Reading helps students focus more on their chess games as well as academic studies in a long run.</li>
        </ul>
        </div>
        <div className="flex flex-col items-center my-6">
          <img src="/imgs/about/classroom.avif" alt="Classroom at Penny Chess Club" className="rounded-2xl shadow-xl w-full max-w-md" />
          <span className="text-sm text-gray-500 mt-2">Classroom at Penny Chess Club</span>
        </div>
      </section>

      {/* 중요한 스킬 섹션 */}
      <section className={`${sectionStyle} bg-lime-100/80  pb-8`}>
        <h2 className={mainStyle.h2}>Important Skills in Chess to Develop Critical Thinking and Patience</h2>
        <ul className={`${mainStyle.list.default} text-lg md:text-xl`}>
          <li className={`${mainStyle.list.item}`}><b>Visualization</b>: through small exercises and puzzles, students will be able to learn the chess board by heart, as well as thematic positions. This skill is extremely useful for developing tactical skills in the future.</li>
          <li className={`${mainStyle.list.item}`}><b>Tactics</b>: Daily small exercises help students gradually improve tactical skills, so that they will not miss such opportunities to win games. Learning checkmate patterns and tactical themes is an essential step towards the next level.</li>
          <li className={`${mainStyle.list.item}`}><b>Game study and evaluation</b>: students will learn via thorough analysis of the games played by chess masters to realize their weaknesses and learn how to overcome them.</li>
          <li className={`${mainStyle.list.item}`}><b>Endgames study</b>: Important to study at any levels. The more you know about chess, the harder you might find endgames are. We focus on teaching endgames from the very beginning levels.</li>
          <li className={`${mainStyle.list.item}`}><b>Openings</b>: in-depth studies, tailored for each student to prepare for tournaments.</li>
          <li className={`${mainStyle.list.item}`}><b>Strategy study</b>: We engage positional playing style in chess to introduce students to the beauty of a good strategic game. Good planning and execution at each stage of the game will help them successfully navigate through complex games and emerge victorious.</li>
        </ul>
      </section>

      {/* 클래스 종류 섹션 */}
      <section className={`${sectionStyle} bg-amber-100/80 pb-8`}>
        <h2 className='text-gray-800 text-3xl font-semibold mt-0 mb-4 text-center'>The Choice Is Yours</h2>
        <p className="text-gray-700 text-xl md:text-2xl mb-8 text-center">We provide two different streams for you and your kids to follow:</p>
        <div className={`${mainStyle.grid.cols2} text-lg md:text-xl`}>
          <div className='bg-amber-100 p-4 pt-6 rounded shadow-xl'>
            <h3 className='text-gray-700 text-center mb-4 text-xl md:text-2xl font-medium mt-0 mb-2'>Regular Class</h3>
            <p className={mainStyle.text.body}>
              The curriculum is prepared by Woman International Master Bich-Ngoc (Penny) Pham from beginner to advanced levels. Your chess skills will be developed while having so much fun by playing and relaxing with your classmates. There will not be homework but playing more at home will be always recommended. It usually takes from 24-36 hours to complete a course and advance to the next level. You can see more details in our group lesson introduction.
            </p>
          </div>
          <div className='bg-amber-100 p-4 pt-6 rounded shadow-xl'>
            <h3 className='text-gray-700 text-center mb-4 text-xl md:text-2xl font-medium mt-0 mb-2'>Pro Class</h3>
            <p className={mainStyle.text.body}>
              Those classes are designed for players who are more passionate about chess, and typically plan to join chess tournaments. We can tell if the students are very interested in chess if they typically spend hours to play chess, reading chess books or listening to online chess contents. In these classes, there will be more work to be done, weekly homework will be provided and tailored to students’ availability. We aim to assemble a strong and knowledgeable chess team to compete in big tournaments together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
