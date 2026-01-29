import { TopSection } from './TopSection';

export default {
  title: 'Section/TopSection',
  component: TopSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## TopSection

HeroSection과 BrandValueSection을 결합한 상단 섹션.

### 구조
1. **HeroSection**: 브랜드 타이틀 + 2:1 비율 배경 비디오
2. **구분선**: 1px 라인
3. **BrandValueSection**: 3열 브랜드 핵심 가치

### 특징
- LineGrid (Stack 모드) 기반 수직 레이아웃
- 섹션 간 자동 구분선 생성
- 하단에 borderEnd 라인 표시
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '히어로 타이틀',
      table: {
        type: { summary: 'string' },
      },
    },
    subtitle: {
      control: 'text',
      description: '히어로 서브타이틀',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

/** 기본 TopSection */
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
