import React, { useState } from 'react';
import { Box, Typography, IconButton, Modal } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export interface HistoryImage {
    src: string;
    alt: string;
    title?: string;
}

interface HistoryImgGalleryProps {
    images: HistoryImage[];
}

const HistoryImgGallery: React.FC<HistoryImgGalleryProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });

    // 이미지 네비게이션 함수들
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentImageIndex(index);
    };

    // 확대 보기 관련 함수들
    const openModal = () => {
        setIsModalOpen(true);
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    };

    const zoomIn = () => {
        setZoomLevel(prev => Math.min(prev * 1.5, 5));
    };

    const zoomOut = () => {
        setZoomLevel(prev => Math.max(prev / 1.5, 0.5));
    };

    const resetZoom = () => {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    };

    // 드래그 관련 함수들
    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setLastPanPoint({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            const deltaX = e.clientX - lastPanPoint.x;
            const deltaY = e.clientY - lastPanPoint.y;
            setPanPosition(prev => ({
                x: prev.x + deltaX,
                y: prev.y + deltaY
            }));
            setLastPanPoint({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // 키보드 이벤트 핸들러
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isModalOpen) return;
        
        switch (e.key) {
            case 'Escape':
                closeModal();
                break;
            case '+':
            case '=':
                zoomIn();
                break;
            case '-':
                zoomOut();
                break;
            case '0':
                resetZoom();
                break;
            case 'ArrowLeft':
                if (images.length > 1) goToPrevious();
                break;
            case 'ArrowRight':
                if (images.length > 1) goToNext();
                break;
        }
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mb: 4 }}>
            
            {/* 이미지 갤러리 컨테이너 */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                mx: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
                {/* 메인 이미지 */}
                <Box sx={{
                    position: 'relative',
                    minHeight: { xs: 200, sm: 300 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }}>
                    <img
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '400px',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                        onClick={openModal}
                        onError={(e) => {
                            console.error('Image failed to load:', images[currentImageIndex].src);
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    
                    {/* 확대 보기 버튼 */}
                    <IconButton
                        onClick={openModal}
                        sx={{
                            position: 'absolute',
                            top: { xs: 8, sm: 12 },
                            right: { xs: 8, sm: 12 },
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)'
                            },
                            width: { xs: 36, sm: 44 },
                            height: { xs: 36, sm: 44 }
                        }}
                    >
                        <FullscreenIcon fontSize="small" />
                    </IconButton>
                    
                    {/* 이미지 제목 */}
                    {images[currentImageIndex].title && (
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                            color: 'white',
                            p: 2,
                            textAlign: 'center'
                        }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {images[currentImageIndex].title}
                            </Typography>
                        </Box>
                    )}
                </Box>
                
                {/* 이전/다음 버튼 */}
                {images.length > 1 && (
                    <>
                        <IconButton
                            onClick={goToPrevious}
                            sx={{
                                position: 'absolute',
                                left: { xs: 4, sm: 8 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                                },
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 }
                            }}
                        >
                            <ArrowBackIosIcon fontSize="small" />
                        </IconButton>
                        
                        <IconButton
                            onClick={goToNext}
                            sx={{
                                position: 'absolute',
                                right: { xs: 4, sm: 8 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                                },
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 }
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </>
                )}
            </Box>
            
            {/* 도트 인디케이터 */}
            {images.length > 1 && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 2
                }}>
                    {images.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                width: { xs: 8, sm: 12 },
                                height: { xs: 8, sm: 12 },
                                borderRadius: '50%',
                                backgroundColor: index === currentImageIndex 
                                    ? '#22c55e' 
                                    : 'rgba(255, 255, 255, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: index === currentImageIndex 
                                        ? '#16a34a' 
                                        : 'rgba(255, 255, 255, 0.5)',
                                    transform: 'scale(1.2)'
                                }
                            }}
                        />
                    ))}
                </Box>
            )}
            
            {/* 이미지 카운터 */}
            {images.length > 1 && (
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.7)',
                        mt: 1,
                        fontSize: '0.85rem'
                    }}
                >
                    {currentImageIndex + 1} / {images.length}
                </Typography>
            )}

            {/* 확대 보기 Modal */}
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)'
                }}
                onKeyDown={handleKeyDown}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        outline: 'none'
                    }}
                    tabIndex={-1}
                >
                    {/* 확대된 이미지 */}
                    <Box
                        sx={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            overflow: 'hidden',
                            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <img
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            style={{
                                maxWidth: zoomLevel === 1 ? '90vw' : 'none',
                                maxHeight: zoomLevel === 1 ? '90vh' : 'none',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                transform: `scale(${zoomLevel}) translate(${panPosition.x}px, ${panPosition.y}px)`,
                                transition: isDragging ? 'none' : 'transform 0.3s ease',
                                userSelect: 'none'
                            }}
                            draggable={false}
                        />
                    </Box>

                    {/* 상단 컨트롤 바 */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            background: 'linear-gradient(rgba(0, 0, 0, 0.5), transparent)',
                            zIndex: 10
                        }}
                    >
                        {/* 왼쪽: 이미지 정보 */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                                {images[currentImageIndex].title || `이미지 ${currentImageIndex + 1}`}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {currentImageIndex + 1} / {images.length}
                            </Typography>
                        </Box>

                        {/* 오른쪽: 컨트롤 버튼들 */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton onClick={zoomOut} disabled={zoomLevel <= 0.5} sx={{ color: 'white' }}>
                                <ZoomOutIcon />
                            </IconButton>
                            <IconButton onClick={resetZoom} sx={{ color: 'white' }}>
                                <RestartAltIcon />
                            </IconButton>
                            <IconButton onClick={zoomIn} disabled={zoomLevel >= 5} sx={{ color: 'white' }}>
                                <ZoomInIcon />
                            </IconButton>
                            <IconButton onClick={closeModal} sx={{ color: 'white' }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* 이미지 네비게이션 버튼 (Modal 내부) */}
                    {images.length > 1 && (
                        <>
                            <IconButton
                                onClick={goToPrevious}
                                sx={{
                                    position: 'absolute',
                                    left: 20,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                                    },
                                    width: 56,
                                    height: 56
                                }}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                            
                            <IconButton
                                onClick={goToNext}
                                sx={{
                                    position: 'absolute',
                                    right: 20,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                                    },
                                    width: 56,
                                    height: 56
                                }}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </>
                    )}

                    {/* 하단 정보 바 */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
                            zIndex: 10
                        }}
                    >
                        {/* <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            확대: {Math.round(zoomLevel * 100)}% | 키보드: ← → (이동), + - (확대/축소), 0 (초기화), ESC (닫기)
                        </Typography> */}
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default HistoryImgGallery;
