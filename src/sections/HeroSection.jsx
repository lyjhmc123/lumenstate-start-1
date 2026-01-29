import { forwardRef, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LineGrid from '../components/layout/LineGrid';
import VideoScrubbing from '../components/media/VideoScrubbing';
import { content } from '../data/content';

/**
 * HeroSection 컴포넌트
 *
 * 브랜드 히어로 섹션. LineGrid를 이용한 2열 레이아웃 (2:1 비율).
 * 각 열에 배경 비디오가 재생되고, 왼쪽 열에 타이틀과 서브타이틀 표시.
 *
 * 동작 방식:
 * 1. LineGrid로 2:1 비율의 2열 그리드 구성
 * 2. 각 열의 높이는 배경 비디오 비율에 맞춰 자동 조절
 * 3. 왼쪽 열: 타이틀 + 서브타이틀
 * 4. 오른쪽 열: 빈 공간 (비디오만 표시)
 *
 * Props:
 * @param {string} title - 히어로 타이틀 [Optional, 기본값: content.hero.title]
 * @param {string} subtitle - 히어로 서브타이틀 [Optional, 기본값: content.hero.subtitle]
 * @param {string} videoLeft - 왼쪽 배경 비디오 URL [Optional, 기본값: content.hero.videos.row1Col1]
 * @param {string} videoRight - 오른쪽 배경 비디오 URL [Optional, 기본값: content.hero.videos.row1Col2]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HeroSection
 *   title="Lumenstate"
 *   subtitle="Light defines the space."
 * />
 */
const HeroSection = forwardRef(function HeroSection({
  title = content.hero.title,
  subtitle = content.hero.subtitle,
  videoLeft = content.hero.videos.row1Col1,
  videoRight = content.hero.videos.row1Col2,
  sx,
  ...props
}, ref) {
  const containerRef = useRef(null);

  /**
   * 콘텐츠 오버레이 스타일
   */
  const contentOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    p: 4,
    color: 'common.white',
    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
    zIndex: 1,
  };

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Box ref={containerRef}>
        <LineGrid container gap={0}>
          {/* 왼쪽 열: 타이틀 + 서브타이틀 (2/3) */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <VideoScrubbing
              src={videoLeft}
              containerRef={containerRef}
              startInView
              ratio="auto"
            />
            <Box sx={contentOverlayStyle}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Grid>

          {/* 오른쪽 열: 빈 공간 (1/3) */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: { xs: 'block', md: 'flex' },
            }}
          >
            <Box
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                '& > div': {
                  height: '100%',
                },
                '& video': {
                  height: '100%',
                  objectFit: 'cover',
                },
              }}
            >
              <VideoScrubbing
                src={videoRight}
                containerRef={containerRef}
                startInView
                ratio="auto"
              />
            </Box>
          </Grid>
        </LineGrid>
      </Box>
    </Box>
  );
});

export { HeroSection };
