import { LandingPage } from './LandingPage';

export default {
  title: 'Page/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## LandingPage

TopSection과 ProductShowcase를 결합한 랜딩 페이지.

### 레이아웃 구조
1. **TopSection** (Fluid)
   - HeroSection: 전체 너비, 2:1 비디오 배경
   - BrandValueSection: 전체 너비, 3열 브랜드 가치
2. **ProductShowcase** (Fixed)
   - SectionContainer로 감싸서 최대 너비 제한 (xl: 1536px)
   - PC: 고정 너비 / 모바일: 반응형

### 특징
- PageContainer 기반 중앙 정렬
- TopSection은 fluid로 화면 전체 사용
- ProductShowcase는 SectionContainer로 최대 너비 제한
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '히어로 타이틀',
    },
    subtitle: {
      control: 'text',
      description: '히어로 서브타이틀',
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 콜백',
    },
  },
};

/** 기본 LandingPage */
export const Default = {
  args: {},
};

/** 커스텀 타이틀 */
export const CustomTitle = {
  args: {
    title: 'Custom Brand',
    subtitle: 'Your custom tagline here.',
  },
};
