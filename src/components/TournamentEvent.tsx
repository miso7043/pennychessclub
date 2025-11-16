import React, { useRef, useState } from "react";
import Banner from "./tournmentEvent/Banner";
import type { BannerProps } from "./tournmentEvent/Banner";
import TournamentRules from "./tournmentEvent/TournamentRules";
import TournamentMiscellaneous from "./tournmentEvent/TournamentMiscellaneous";
import TournamentPrizes from "./tournmentEvent/TournamentPrizes";
import type { TournamentPrizesInterface } from "./tournmentEvent/TournamentPrizes";
import TournamentDeadlines from "./tournmentEvent/TournamentDeadlines";
import type { TournamentDeadlinesProps } from "./tournmentEvent/TournamentDeadlines";
import TournamentEntryFee from "./tournmentEvent/TournamentEntryFee";
import type { EntryFeeItem } from "./tournmentEvent/TournamentEntryFee";
import TournamentEventDetails from "./tournmentEvent/TournamentEventDetails";
import type { EventDetail, EventAddress } from "./tournmentEvent/TournamentEventDetails";
import EventBox from "./tournmentEvent/EventBox";
import type { EventBoxProps } from "./tournmentEvent/EventBox";
import Organiz_Info from "./tournmentEvent/Organiz_Info";
import type { OrganizInfoProps } from "./tournmentEvent/Organiz_Info";
import { getGridCols } from "../utils/gridUtils";
import { renderBoldText } from "../utils/Util";

// NOTE: Light mode only per request (no dark: classes)
// Tailwind design goals: clean, modern, airy spacing, subtle shadows, rounded-2xl
// Tech: React + TSX single-file component with small, reusable UI primitives

// ---------- UI PRIMITIVES ----------
const Section: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>> = ({
  title,
  subtitle,
  className,
  children,
}) => (
  <section className={`bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/60 p-6 md:p-8 ${className || ""}`}>
    {title && (
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </header>
    )}
    {children}
  </section>
);


// 방법 2: URL에서 이미지 메타데이터만 읽기 (더 빠름)
const getImageDimensionsFromBlob = async (src: string): Promise<{ width: number; height: number }> => {
  const response = await fetch(src);
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  return {
    width: bitmap.width,
    height: bitmap.height
  };
};


// ---------- 타입 ----------
export type TournamentEventDataType = {
  hero: {
    title: string;
    subtitle: string;
  };
  events: EventBoxProps[];
  organizInfo?: OrganizInfoProps;
  banner: BannerProps;
  sectionInfo?: Array<string>;
  eventDetails: {
    details: EventDetail[];
    address: EventAddress;
  };
  entryFee: {
    fees: EntryFeeItem[];
  };
  residencePolicy?: Array<string>;
  deadlines: TournamentDeadlinesProps;
  playUp: {
    title: string;
    policy?: Array<string>;
  };
  refundPolicy: Array<string>;
  prizesInfo?: TournamentPrizesInterface;
  // 새로운 형식의 데이터 구조 (기존 컴포넌트와 무관)
  miscInfo?: Array<string>;
  links?: Array<{ label: string; url: string }>;
};

export interface TournamentEventProps {
  backImgPath?: string;
  data: TournamentEventDataType;
}

const DEFAULT_BG_PATH = '/imgs/bg/parallax-back-1.webp';
export default function TournamentEvent({ backImgPath = DEFAULT_BG_PATH, data }: TournamentEventProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imgDims, setImgDims] = useState<{ width: number; height: number } | null>(null);

  // 새로운 패럴랙스 로직
  const [imageTranslate, setImageTranslate] = useState(0);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  // 모바일 환경 감지
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 데스크탑 패럴랙스
  // 이미지 높이 계산: 최초 렌더링 및 화면 크기 변경 시만
  React.useEffect(() => {
    if (!imgDims || !imageRef.current) return;
    const renderedWidth = imageRef.current.getBoundingClientRect().width;
    const originalWidth = imgDims.width;
    const originalHeight = imgDims.height;
    const scale = renderedWidth / originalWidth;
    let newScaledHeight = originalHeight * scale;
    if (window.innerHeight > window.innerWidth) {
      newScaledHeight = window.innerHeight * 1.2;
    }
    setScaledHeight(newScaledHeight);
  }, [imgDims, isMobile]);

  React.useEffect(() => {
    let animationFrameId: number | null = null;

    const updateParallax = (scrollProgress: number, maxTranslate: number) => {
      setImageTranslate(-(1 - scrollProgress) * maxTranslate);
    };

    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      // 컨테이너가 화면에 진입했을 때부터 완전히 벗어날 때까지의 스크롤 진행도 계산
      const scrollStart = -containerTop;
      const scrollRange = containerHeight - viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollRange));

      // 이미지 크기 비동기 로딩 처리
      if (!imgDims) {
        // imgDims 값이 없으면 한번만 실행하고 멈추자.
        getImageDimensionsFromBlob(backImgPath).then(dim => {
          setImgDims(dim);
        });
        return;
      }

      // 이미지의 높이와 화면 높이의 차이만큼 이동
      const image = imageRef.current;
      if (!image || !scaledHeight) return;

      // 이미지가 화면 하단에서 정확히 멈추도록 계산
      const maxTranslate = scaledHeight - viewportHeight;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        updateParallax(scrollProgress, maxTranslate);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 위치 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, imgDims, scaledHeight, backImgPath]);

  const [bgLoaded, setBgLoaded] = useState(false);

  React.useEffect(() => {
    setBgLoaded(false);
    const img = new window.Image();
    img.src = backImgPath;
    img.onload = () => setBgLoaded(true);
  }, [backImgPath]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-gray-900">
      {/* PARALLAX BACKGROUND */}
      <div
        ref={imageRef}
        className="parallax-bg fixed top-0 left-0 w-screen -z-10 transition-opacity duration-500"
        style={{
          height: scaledHeight ? `${scaledHeight}px` : 'auto',
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: `url(${backImgPath})`,
          backgroundSize: isMobile ? 'cover' : '100vw auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transform: `translateY(${imageTranslate}px)`,
          opacity: bgLoaded ? 1 : 0,
        }}
      />

      {/* CONTENT OVERLAY */}
      <div className="relative bg-gradient-to-b from-white/70 via-gray-50/90 to-gray-50/50">
        {/* HERO */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-lg text-gray-800">{data.hero.subtitle}</p>
          </div>

          {/* ORGANIZER INFO */}
          {data.organizInfo && (
            <Organiz_Info
              director={data.organizInfo.director}
              organizer={data.organizInfo.organizer}
              contact={data.organizInfo.contact}
            />
          )}

          {/* FEATURED DATES */}
          <div id="register" className={`grid ${getGridCols(data.events.length)} gap-6 mb-12`}>
            {data.events.map((ev) => (
              <div key={ev.id} className="rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <EventBox
                  id={ev.id}
                  dateLabel={ev.dateLabel}
                  title={ev.title}
                  rated={ev.rated}
                  ctas={ev.ctas}
                  schedule={ev.schedule}
                />
              </div>
            ))}
          </div>

          {/* MEETUP BANNER */}
          <Banner
            {...data.banner}
          />

          {/* ORGANIZER INFO */}
          {data.sectionInfo && (
            <div className=" mb-12">
              <Section title="Section Information">
                <ul className="space-y-2 text-gray-700">
                  {data.sectionInfo.map((line: string, idx: number) => (
                    <li key={idx}>{renderBoldText(line)}</li>
                  ))}
                </ul>
              </Section>
            </div>
          )}


          {/* DETAILS */}
          <div className={`grid ${getGridCols(2)} gap-8 mb-12`}>
            <Section title={data.playUp.title}>
              <TournamentEventDetails
                details={data.eventDetails.details}
                address={data.eventDetails.address}
              />
            </Section>

            <div>
              <Section title="Entry Fee">
                <TournamentEntryFee
                  fees={data.entryFee.fees}
                />
              </Section>

              {data.residencePolicy && (
                <div className="mt-8">
                  <Section title="Residence Policy">
                    <ul className="space-y-2 text-gray-700">
                      {data.residencePolicy.map((line: string, idx: number) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </Section>
                </div>
              )}
            </div>
          </div>

          {/* DEADLINES */}
          <Section title={data.deadlines.title} subtitle={data.deadlines.subtitle}>
            <TournamentDeadlines
              deadlines={data.deadlines.deadlines}
              title=""
              subtitle=""
            />
          </Section>

          {/* PRIZES */}
          <Section title="Prizes / Medals" className="mt-12">
            {data.prizesInfo ? (
              <TournamentPrizes
                prizes={data.prizesInfo.prizes}
                notes={data.prizesInfo.notes}
                prizeTableInfo={data.prizesInfo.prizeTableInfo}
              />
            ) : (
              <TournamentPrizes />
            )}
          </Section>

          {/* PLAY UP & UNRATED */}
          <div className={`grid ${getGridCols(data.playUp.policy ? 2 : 1)} gap-8 mt-12 mb-12`}>
            {data.playUp.policy && (
              <Section title={data.playUp.title}>
                <div className="space-y-2 text-gray-700">
                  {data.playUp.policy.map((line: string, idx: number) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </Section>
            )}
            <Section title="Refund Policy">
              <ul className="space-y-2 text-gray-700">
                {data.refundPolicy.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </Section>
          </div>

          {/* MISC */}
          <Section title="Miscellaneous">
            <TournamentMiscellaneous />
          </Section>

          {/* RULES */}
          <Section title="Tournament Rules & Policies" className="mt-12">
            <TournamentRules showFooter={false} />
          </Section>
        </main>
      </div>
    </div>
  );
}
