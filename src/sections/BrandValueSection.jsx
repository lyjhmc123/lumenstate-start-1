import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LineGrid from '../components/layout/LineGrid';
import { BrandValueCard } from '../components/card/BrandValueCard';
import { content } from '../data/content';

/**
 * BrandValueSection 컴포넌트
 *
 * 브랜드 핵심 가치를 표시하는 섹션.
 * LineGrid를 이용한 3열 그리드 레이아웃.
 *
 * 동작 방식:
 * 1. LineGrid로 3열 그리드 구성 (PC)
 * 2. 각 열에 BrandValueCard 배치
 * 3. 반응형: md 이상 3열, sm 1열
 *
 * Props:
 * @param {array} features - 브랜드 가치 데이터 배열 [Optional, 기본값: content.brandValue.features]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BrandValueSection />
 */
const BrandValueSection = forwardRef(function BrandValueSection({
  features = content.brandValue.features,
  sx,
  ...props
}, ref) {
  return (
    <Box ref={ref} sx={sx} {...props}>
      <LineGrid container gap={0}>
        {features.map((feature) => (
          <Grid
            key={feature.id}
            size={{ xs: 12, md: 4 }}
          >
            <BrandValueCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              detailedDescription={feature.detailedDescription}
            />
          </Grid>
        ))}
      </LineGrid>
    </Box>
  );
});

export { BrandValueSection };
