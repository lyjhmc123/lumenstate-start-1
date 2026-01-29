import { BrandValueSection } from './BrandValueSection';
import { content } from '../data/content';

export default {
  title: 'Section/BrandValueSection',
  component: BrandValueSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## BrandValueSection

브랜드 핵심 가치를 표시하는 섹션. LineGrid를 이용한 3열 레이아웃.

### 구조
- **PC (md+)**: 3열 그리드
- **모바일 (xs)**: 1열 스택

### 기본 가치
1. **Immanence** - 공간에 스며드는 빛
2. **Continuity** - 자연스러운 낮→밤 전환
3. **Flexibility** - 자동화와 수동 제어의 균형
        `,
      },
    },
  },
  argTypes: {
    features: {
      control: false,
      description: '브랜드 가치 데이터 배열',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: 'content.brandValue.features' },
      },
    },
  },
};

/** 기본 BrandValueSection */
export const Default = {
  args: {},
  render: (args) => (
    <BrandValueSection {...args} sx={{ p: 0 }} />
  ),
};

/** 커스텀 가치 */
export const CustomFeatures = {
  args: {
    features: [
      {
        id: 'quality',
        icon: 'Star',
        title: 'Quality',
        description: 'Premium materials and craftsmanship.',
        detailedDescription: '최고급 소재와 장인 정신으로 만들어진 제품입니다.',
      },
      {
        id: 'design',
        icon: 'Palette',
        title: 'Design',
        description: 'Timeless aesthetic meets modern function.',
        detailedDescription: '시대를 초월한 미학과 현대적 기능의 조화입니다.',
      },
      {
        id: 'innovation',
        icon: 'Lightbulb',
        title: 'Innovation',
        description: 'Cutting-edge technology integration.',
        detailedDescription: '최첨단 기술을 통합한 혁신적인 솔루션입니다.',
      },
    ],
  },
  render: (args) => (
    <BrandValueSection {...args} sx={{ p: 0 }} />
  ),
};
