import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import LineGrid from '../components/layout/LineGrid';
import { HeroSection } from './HeroSection';
import { BrandValueSection } from './BrandValueSection';

/**
 * TopSection 컴포넌트
 *
 * HeroSection과 BrandValueSection을 LineGrid로 결합한 상단 섹션.
 * 두 섹션 사이에 구분선이 표시된다.
 *
 * 동작 방식:
 * 1. LineGrid (Stack 모드)로 두 섹션을 수직 배치
 * 2. 섹션 사이에 1px 구분선 자동 생성
 * 3. HeroSection: 브랜드 타이틀 + 배경 비디오
 * 4. BrandValueSection: 3가지 브랜드 핵심 가치
 *
 * Props:
 * @param {string} title - 히어로 타이틀 [Optional]
 * @param {string} subtitle - 히어로 서브타이틀 [Optional]
 * @param {string} videoLeft - 왼쪽 배경 비디오 URL [Optional]
 * @param {string} videoRight - 오른쪽 배경 비디오 URL [Optional]
 * @param {array} features - 브랜드 가치 데이터 배열 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TopSection />
 */
const TopSection = forwardRef(function TopSection({
  title,
  subtitle,
  videoLeft,
  videoRight,
  features,
  sx,
  ...props
}, ref) {
  return (
    <Box ref={ref} sx={sx} {...props}>
      <LineGrid borderEnd>
        <HeroSection
          title={title}
          subtitle={subtitle}
          videoLeft={videoLeft}
          videoRight={videoRight}
        />
        <BrandValueSection features={features} />
      </LineGrid>
    </Box>
  );
});

export { TopSection };
