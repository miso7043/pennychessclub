import React from "react";


// 문자열 내 **볼드** 부분을 <strong>으로 변환하는 함수
export const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part: string, i: number) =>
        /^\*\*[^*]+\*\*$/.test(part)
          ? <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>
          : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
};

// 문자열 내 \n을 줄바꿈(<br />)으로 변환하는 함수
// {renderNewlineText(text)}
export const renderNewlineText = (text: string) => {
  const lines = text.split(/\n/g);
  return (
    <>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};
