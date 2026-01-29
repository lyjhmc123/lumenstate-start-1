import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { PageContainer } from '../components/container/PageContainer';
import { SectionContainer } from '../components/container/SectionContainer';
import { TopSection } from '../sections/TopSection';
import { ProductShowcase } from '../sections/ProductShowcase';

/**
 * LandingPage 컴포넌트
 *
 * TopSection과 ProductShowcase를 결합한 랜딩 페이지.
 * TopSection은 fluid layout, ProductShowcase는 고정 너비 레이아웃.
 *
 * 동작 방식:
 * 1. PageContainer로 전체 페이지 감싸기
 * 2. TopSection: 화면 전체 너비 (fluid)
 * 3. ProductShowcase: SectionContainer로 감싸서 최대 너비 제한
 *
 * Props:
 * @param {string} title - 히어로 타이틀 [Optional]
 * @param {string} subtitle - 히어로 서브타이틀 [Optional]
 * @param {array} features - 브랜드 가치 데이터 [Optional]
 * @param {array} products - 제품 데이터 [Optional]
 * @param {function} onProductClick - 제품 클릭 콜백 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <LandingPage />
 */
const LandingPage = forwardRef(function LandingPage({
  title,
  subtitle,
  features,
  products,
  onProductClick,
  sx,
  ...props
}, ref) {
  return (
    <PageContainer ref={ref} sx={sx} {...props}>
      {/* TopSection - Fluid Layout (전체 너비) */}
      <Box sx={{ width: '100%' }}>
        <TopSection
          title={title}
          subtitle={subtitle}
          features={features}
        />
      </Box>

      {/* ProductShowcase - Fixed Layout (최대 너비 제한) */}
      <SectionContainer>
        <ProductShowcase
          products={products}
          onProductClick={onProductClick}
        />
      </SectionContainer>
    </PageContainer>
  );
});

export { LandingPage };
