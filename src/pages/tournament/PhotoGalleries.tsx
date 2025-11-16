import { mainStyle } from '../../styles/mainStyle';
import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import type { GalleryImage } from '../../components/ImageGallery/ImageGallery';
import ImageZoomModal from '../../components/ImageZoom/ImageZoomModal';

// 갤러리 폴더 정보
const galleryFolders = [
  {
    folder: 'PCC_Open_2',
    title: 'PCC OPEN 2',
    base: '/imgs/gallery/PCC_Open_2',
  },
  {
    folder: 'PCC_Open_3',
    title: 'PCC OPEN 3',
    base: '/imgs/gallery/PCC_Open_3',
  },
  {
    folder: 'EMA_Classic_Open_1',
    title: 'EMA Classic Open 1',
    base: '/imgs/gallery/EMA_Classic_Open_1',
  },
];

// 실제 파일명 패턴에 맞게 .webp 확장자와 접두어 적용
function getImageNames(folder: string): string[] {
  // PCC_Open_2_01.webp ~ PCC_Open_2_80.webp 등
  const count = folder === 'PCC_Open_2' ? 80 : folder === 'PCC_Open_3' ? 76 : folder === 'EMA_Classic_Open_1' ? 92 : 0;
  return Array.from({ length: count }, (_, i) => `${folder}_${String(i+1).padStart(2, '0')}.webp`);
}

function getGalleryImages(folderInfo: { folder: string; title: string; base: string }): GalleryImage[] {
  const names = getImageNames(folderInfo.folder);
  return names.map((name, idx) => ({
    src: `${folderInfo.base}/icon/${name}`,
    alt: `${folderInfo.title} #${idx + 1}`,
    title: '',
    fullSrc: `${folderInfo.base}/${name}`,
  }) as GalleryImage & { fullSrc: string });
}

export default function PhotoGalleries() {
  // 반응형 최소 이미지 썸네일 너비 설정
  const [minCardWidth, setMinCardWidth] = React.useState('200px');

  React.useEffect(() => {
    const updateMinWidth = () => {
      setMinCardWidth(window.innerWidth < 768 ? '140px' : '200px');
    };
    updateMinWidth();
    window.addEventListener('resize', updateMinWidth);
    return () => window.removeEventListener('resize', updateMinWidth);
  }, []);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (img: GalleryImage & { fullSrc?: string }) => {
    setModalImg({ src: img.fullSrc || img.src, alt: img.alt });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  // 배경 이미지 경로 (예시: PCCOpen5와 유사하게 지정)
  const backgroundImage = '/imgs/bg/parallax-back-5.webp';

  return (
    <div className="relative min-h-screen text-gray-900">
      {/* 배경 이미지 */}
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100vw',
        }}
      />
      {/* 오버레이 콘텐츠 */}
      <div className="relative bg-gradient-to-b from-white/70 via-gray-50/90 to-gray-50/50">
        <div className={mainStyle.pageContainer}>
          <h1 className={`${mainStyle.h1.tournament} pt-8 text-center`}>Photo Galleries</h1>
          {galleryFolders.map((folder) => (
            <section key={folder.folder} className={`${mainStyle.section} bg-white/20`}> 
              <h2 className={mainStyle.h2}>{folder.title}</h2>
              <ImageGallery
                images={getGalleryImages(folder).map(img => ({ ...img, src: img.src, alt: img.alt, title: img.title }))}
                gap="gap-4"
                cardBgColor="bg-white/80"
                cardGridStyle={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}, 1fr))` }}
                onImageClick={handleImageClick}
              />
            </section>
          ))}
          {/* 원본 이미지 모달 */}
          {modalOpen && modalImg && (
            <ImageZoomModal src={modalImg.src} alt={modalImg.alt} open={modalOpen} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </div>
  );
}
