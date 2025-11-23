import React, { useState } from "react";
import FixedBackground from "./common/FixedBackground";
import Banner from "./tournmentEvent/Banner";
import type { BannerProps } from "./tournmentEvent/Banner";
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
import { getGridCols } from "../utils/gridUtils";
import { renderBoldText } from "../utils/Util";
import Organiz_Info from "./tournmentEvent/Organiz_Info";
import type { TournamentRuleProps } from "./tournmentEvent/TournamentRules";
import TournamentRules from "./tournmentEvent/TournamentRules";


// NOTE: Light mode only per request (no dark: classes)
// Tailwind design goals: clean, modern, airy spacing, subtle shadows, rounded-2xl
// Tech: React + TSX single-file component with small, reusable UI primitives

// ---------- UI PRIMITIVES ----------
export const TournamentSection: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>> = ({
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

// ---------- 타입 ----------
export type TournamentEventDataType = {
  hero: {
    title: string;
    subtitle: string;
  };
  events?: EventBoxProps[];
  organizInfo?: {
    organizer: string;
    contact: string;
  };
  banner: BannerProps;
  sectionInfo?: Array<string>;
  eventDetails: {
    details: EventDetail[];
    address: EventAddress;
    policy?: Array<string>;
  };
  entryFee?: {
    fees: EntryFeeItem[];
  };
  residencePolicy?: Array<string>;
  deadlines?: TournamentDeadlinesProps;
  refundPolicy?: Array<string>;
  prizesInfo?: TournamentPrizesInterface;
  // 새로운 형식의 데이터 구조 (기존 컴포넌트와 무관)
  miscInfo?: Array<string>;
  links?: Array<{ label: string; url: string }>;
  rulesInfo?: TournamentRuleProps[];
};

export interface TournamentEventProps {
  backImgPath?: string;
  data: TournamentEventDataType;
}

const DEFAULT_BG_PATH = '/imgs/bg/parallax-back-1.webp';
export default function TournamentEvent({ backImgPath = DEFAULT_BG_PATH, data }: TournamentEventProps) {


  // 배경 이미지 로딩 상태만 관리
  const [bgLoaded, setBgLoaded] = useState(false);
  React.useEffect(() => {
    setBgLoaded(false);
    const img = new window.Image();
    img.src = backImgPath;
    img.onload = () => setBgLoaded(true);
  }, [backImgPath]);

  return (
    <div className="relative min-h-screen text-gray-900">
      {/* FIXED BACKGROUND */}
      <FixedBackground backImgPath={backImgPath} bgLoaded={bgLoaded} />

      {/* CONTENT OVERLAY */}
      <div className="relative bg-gradient-to-b from-white/70 via-gray-100/90 to-gray-100/50">
        {/* HERO */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-lg text-gray-800">{data.hero.subtitle}</p>
          </div>

          {/* Organiz INFO */}
          {data.organizInfo && (
            <Organiz_Info
              // director={data.organizInfo.director}
              organizer={data.organizInfo.organizer}
              contact={data.organizInfo.contact}
              address={data.eventDetails.address}
            />
          )}

          {/* FEATURED DATES */}
          <div id="register" className={`grid ${getGridCols(data.events?.length || 0)} gap-6 mb-12`}>
            {data.events?.map((ev) => (
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
              <TournamentSection title="Section Information">
                <ul className="space-y-2 text-gray-700">
                  {data.sectionInfo.map((line: string, idx: number) => (
                    <li key={idx}>{renderBoldText(line)}</li>
                  ))}
                </ul>
              </TournamentSection>
            </div>
          )}

          {/* DETAILS */}
          <div className={`grid ${getGridCols(2)} gap-8 mb-12`}>
            <div>
              <TournamentSection title="Play Up & Unrated Players">
                <TournamentEventDetails
                  details={data.eventDetails.details}
                // address={data.eventDetails.address}
                />
              </TournamentSection>

              {data.eventDetails.policy && (
                <TournamentSection title="" className="mt-8">
                  <div className="space-y-2 text-gray-700">
                    {data.eventDetails.policy.map((line: string, idx: number) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </TournamentSection>
              )}

              {/* Residence Policy */}
              {data.residencePolicy && (
                <div className="mt-8">
                  <TournamentSection title="Residence Policy">
                    <ul className="space-y-2 text-gray-700">
                      {data.residencePolicy.map((line: string, idx: number) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </TournamentSection>
                </div>
              )}
            </div>

            {/* Entry Fee */}
            <div>
              {data.entryFee && (<TournamentSection title="Entry Fee">
                <TournamentEntryFee
                  fees={data.entryFee.fees}
                />
              </TournamentSection>)}

              {/* REFUND POLICY */}
              {/* 위 데이터가 있으면 Refund Policy를 오른쪽에 표시 */}
              {data.refundPolicy && (
                <TournamentSection title="Refund Policy" className="mt-8">
                  <ul className="space-y-2 text-gray-700">
                    {data.refundPolicy.map((line: string, idx: number) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </TournamentSection>
              )}
            </div>
          </div>

          {/* DEADLINES */}
          {data.deadlines && (
            <TournamentSection title={data.deadlines.title} subtitle={data.deadlines.subtitle}>
              <TournamentDeadlines
                deadlines={data.deadlines.deadlines}
                title=""
                subtitle=""
              />
            </TournamentSection>
          )}

          {/* PRIZES */}
          <TournamentSection title="Prizes / Medals" className="mt-12 mb-8">
            {data.prizesInfo ? (
              <TournamentPrizes
                prizes={data.prizesInfo.prizes}
                notes={data.prizesInfo.notes}
                prizeTableInfo={data.prizesInfo.prizeTableInfo}
              />
            ) : (
              <TournamentPrizes />
            )}
          </TournamentSection>

          {/* MISC */}
          <TournamentSection title="Miscellaneous">
            <TournamentMiscellaneous />
          </TournamentSection>

          {/* RULES */}
          <TournamentSection title="Tournament Rules & Policies" className="mt-12">
            <TournamentRules showFooter={false} rules={data.rulesInfo} />
          </TournamentSection>
        </main>
      </div>
    </div>
  );
}
