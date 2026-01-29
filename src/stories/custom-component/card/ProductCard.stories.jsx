import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductCard } from '../../../components/card/ProductCard';
import { products } from '../../../data/products';

export default {
  title: 'Custom Component/Card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductCard

제품 정보를 표시하는 카드 컴포넌트.
CustomCard를 확장하여 이미지, 타이틀, 메타 정보를 수직으로 배치합니다.

### 구조
1. **이미지 영역**: 제품 이미지 (원본 비율 유지)
2. **카테고리 태그**: 제품 타입 표시
3. **타이틀 영역**: 제품명
4. **메타 영역**: 조도(lux), 색온도(kelvin) 정보

### 특징
- CustomCard 기반 (ghost variant, padding 제거)
- 원본 이미지 비율 유지 (mediaRatio="auto")
- 메타 정보 자동 포맷팅 (예: "260 lx · 3200 K")
- 클릭 시 인터랙티브 효과 지원
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '제품명',
      table: {
        type: { summary: 'string' },
      },
    },
    imageSrc: {
      control: 'text',
      description: '제품 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['ceiling', 'stand', 'wall', 'desk'],
      description: '제품 카테고리',
      table: {
        type: { summary: "'ceiling' | 'stand' | 'wall' | 'desk'" },
      },
    },
    lux: {
      control: 'number',
      description: '조도 값 (lx)',
      table: {
        type: { summary: 'number' },
      },
    },
    kelvin: {
      control: 'number',
      description: '색온도 값 (K)',
      table: {
        type: { summary: 'number' },
      },
    },
    mediaRatio: {
      control: 'select',
      options: ['1/1', '4/3', '16/9', '21/9', 'auto'],
      description: '이미지 비율',
      table: {
        type: { summary: "'1/1' | '4/3' | '16/9' | '21/9' | 'auto'" },
        defaultValue: { summary: 'auto' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '카드 클릭 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

/** 기본 ProductCard - Controls에서 props를 조작해보세요 */
export const Default = {
  args: {
    title: 'Lumen Desk Pro',
    imageSrc: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'ceiling',
    lux: 260,
    kelvin: 3200,
    mediaRatio: 'auto',
  },
  render: (args) => (
    <ProductCard {...args} sx={ { width: 280 } } />
  ),
};

/** 인터랙티브 - 클릭 가능한 카드 */
export const Interactive = {
  render: () => (
    <ProductCard
      title="Lumen Ceiling"
      imageSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
      type="stand"
      lux={480}
      kelvin={4400}
      onClick={() => alert('Product clicked!')}
      sx={ { width: 280 } }
    />
  ),
};

/** 메타 정보 변형 - lux만, kelvin만, 둘 다 없음 */
export const MetaVariations = {
  render: () => (
    <Stack direction="row" spacing={ 3 }>
      <ProductCard
        title="Lux + Kelvin"
        imageSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600"
        type="ceiling"
        lux={260}
        kelvin={3200}
        sx={ { width: 200 } }
      />
      <ProductCard
        title="Lux Only"
        imageSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
        type="stand"
        lux={350}
        sx={ { width: 200 } }
      />
      <ProductCard
        title="Kelvin Only"
        imageSrc="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600"
        type="wall"
        kelvin={2800}
        sx={ { width: 200 } }
      />
      <ProductCard
        title="No Meta"
        imageSrc="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
        sx={ { width: 200 } }
      />
    </Stack>
  ),
};

/** 이미지 비율 - auto, 1/1, 4/3, 16/9 */
export const MediaRatios = {
  render: () => (
    <Stack direction="row" spacing={ 3 } alignItems="flex-start">
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block' } }>auto (원본 비율)</Typography>
        <ProductCard
          title="Original"
          imageSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600"
          type="ceiling"
          lux={260}
          kelvin={3200}
          mediaRatio="auto"
          sx={ { width: 200 } }
        />
      </Box>
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block' } }>1/1 (정사각형)</Typography>
        <ProductCard
          title="Square"
          imageSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
          type="stand"
          lux={480}
          kelvin={4400}
          mediaRatio="1/1"
          sx={ { width: 200 } }
        />
      </Box>
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block' } }>16/9 (와이드)</Typography>
        <ProductCard
          title="Wide"
          imageSrc="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600"
          type="wall"
          lux={320}
          kelvin={3800}
          mediaRatio="16/9"
          sx={ { width: 200 } }
        />
      </Box>
    </Stack>
  ),
};

/** 그리드 레이아웃 - products 데이터 사용 */
export const GridLayout = {
  render: () => (
    <Box sx={ { width: 900 } }>
      <Grid container spacing={ 3 }>
        {products.slice(0, 6).map((product) => (
          <Grid key={product.id} size={ { xs: 6, md: 4 } }>
            <ProductCard
              title={product.title}
              imageSrc={product.images?.[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
              onClick={() => console.log(`Clicked: ${product.title}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};
