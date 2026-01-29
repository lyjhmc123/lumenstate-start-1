import Stack from '@mui/material/Stack';
import { BrandValueCard } from '../../../components/card/BrandValueCard';
import { content } from '../../../data/content';

export default {
  title: 'Custom Component/Card/BrandValueCard',
  component: BrandValueCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BrandValueCard

브랜드 핵심 가치를 표시하는 카드 컴포넌트.

### 구조
1. **아이콘**: Lucide 아이콘
2. **타이틀**: 가치 이름
3. **설명**: 짧은 영문 설명
4. **상세 설명**: 긴 한글 설명

### 아이콘
lucide-react 라이브러리의 아이콘 이름을 문자열로 전달합니다.
(예: 'CircleDot', 'Repeat', 'Activity')
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Lucide 아이콘 이름',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: '가치 타이틀',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: '짧은 설명',
      table: {
        type: { summary: 'string' },
      },
    },
    detailedDescription: {
      control: 'text',
      description: '상세 설명',
      table: {
        type: { summary: 'string' },
      },
    },
    iconSize: {
      control: { type: 'range', min: 16, max: 64 },
      description: '아이콘 크기 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '32' },
      },
    },
  },
};

/** 기본 BrandValueCard */
export const Default = {
  args: {
    icon: 'CircleDot',
    title: 'Immanence',
    description: 'Light quietly residing within the space.',
    detailedDescription: '조명이 건축과 하나가 되어 은은하고 눈부심 없는 빛을 전합니다.',
  },
  render: (args) => (
    <BrandValueCard {...args} sx={{ width: 320 }} />
  ),
};

/** 모든 브랜드 가치 */
export const AllValues = {
  render: () => (
    <Stack direction="row" spacing={2}>
      {content.brandValue.features.map((feature) => (
        <BrandValueCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          detailedDescription={feature.detailedDescription}
          sx={{ width: 280 }}
        />
      ))}
    </Stack>
  ),
};

/** 상세 설명 없음 */
export const WithoutDetailedDescription = {
  args: {
    icon: 'Repeat',
    title: 'Continuity',
    description: 'Seamless & natural day to night flow.',
  },
  render: (args) => (
    <BrandValueCard {...args} sx={{ width: 320 }} />
  ),
};

/** 다양한 아이콘 */
export const DifferentIcons = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <BrandValueCard
        icon="Sun"
        title="Light"
        description="Natural illumination."
        sx={{ width: 200 }}
      />
      <BrandValueCard
        icon="Moon"
        title="Dark"
        description="Ambient comfort."
        sx={{ width: 200 }}
      />
      <BrandValueCard
        icon="Zap"
        title="Energy"
        description="Efficient power."
        sx={{ width: 200 }}
      />
    </Stack>
  ),
};
