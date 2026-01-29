import { ProductShowcase } from './ProductShowcase';
import { products } from '../data/products';

export default {
  title: 'Section/ProductShowcase',
  component: ProductShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductShowcase

ProductFilter와 ProductGrid를 결합한 제품 쇼케이스 섹션.

### 구조
- **좌측**: 카테고리 필터 (버티컬 탭)
- **우측**: 제품 그리드 + 제품 개수

### 특징
- 카테고리 필터링 내장
- 반응형 레이아웃 (md 이상에서 좌우 분리)
- 제품 클릭 및 카테고리 변경 콜백 지원
        `,
      },
    },
  },
  argTypes: {
    products: {
      control: false,
      description: '제품 데이터 배열',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: 'products.js 전체' },
      },
    },
    defaultCategory: {
      control: 'select',
      options: ['all', 'ceiling', 'stand', 'wall', 'desk'],
      description: '초기 선택 카테고리',
      table: {
        type: { summary: "'all' | 'ceiling' | 'stand' | 'wall' | 'desk'" },
        defaultValue: { summary: 'all' },
      },
    },
    showCount: {
      control: 'boolean',
      description: '제품 개수 표시 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 시 콜백',
      table: {
        type: { summary: '(product) => void' },
      },
    },
    onCategoryChange: {
      action: 'categoryChanged',
      description: '카테고리 변경 시 콜백',
      table: {
        type: { summary: '(category) => void' },
      },
    },
  },
};

/** 기본 ProductShowcase */
export const Default = {
  args: {
    defaultCategory: 'all',
    showCount: true,
  },
  render: (args) => (
    <ProductShowcase {...args} sx={{ p: 4 }} />
  ),
};

/** 특정 카테고리로 시작 */
export const WithDefaultCategory = {
  args: {
    defaultCategory: 'wall',
    showCount: true,
  },
  render: (args) => (
    <ProductShowcase {...args} sx={{ p: 4 }} />
  ),
};

/** 제품 개수 숨김 */
export const WithoutCount = {
  args: {
    defaultCategory: 'all',
    showCount: false,
  },
  render: (args) => (
    <ProductShowcase {...args} sx={{ p: 4 }} />
  ),
};

/** 일부 제품만 표시 */
export const LimitedProducts = {
  args: {
    products: products.slice(0, 6),
    defaultCategory: 'all',
    showCount: true,
  },
  render: (args) => (
    <ProductShowcase {...args} sx={{ p: 4 }} />
  ),
};
