import React from "react";

interface FixedBackgroundProps {
  backImgPath: string;
  bgLoaded: boolean;
}

const FixedBackground: React.FC<FixedBackgroundProps> = ({ backImgPath, bgLoaded }) => (
  <div
    className="fixed top-0 left-0 w-screen h-screen -z-10 transition-opacity duration-500"
    style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundImage: `url(${backImgPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      opacity: bgLoaded ? 1 : 0,
    }}
  />
);

export default FixedBackground;
