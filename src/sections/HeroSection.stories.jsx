import { HeroSection } from './HeroSection';

export default {
  title: 'Section/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## HeroSection

브랜드 히어로 섹션. LineGrid를 이용한 2:1 비율의 2열 레이아웃.

### 구조
- **왼쪽 열 (2/3)**: 배경 비디오 + 타이틀 + 서브타이틀
- **오른쪽 열 (1/3)**: 배경 비디오만 표시

### 특징
- LineGrid 기반 2:1 비율 레이아웃
- 각 열의 높이는 비디오 원본 비율에 맞춰 자동 조절
- 반응형 (모바일에서 세로 배치)
- 그라데이션 오버레이로 텍스트 가독성 확보
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
        defaultValue: { summary: 'Lumenstate' },
      },
    },
    subtitle: {
      control: 'text',
      description: '히어로 서브타이틀',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Light defines the space.' },
      },
    },
  },
};

/** 기본 HeroSection */
export const Default = {
  args: {},
};

/** 커스텀 타이틀 */
export const CustomTitle = {
  args: {
    title: 'Custom Brand',
    subtitle: 'Your tagline here.',
  },
};
