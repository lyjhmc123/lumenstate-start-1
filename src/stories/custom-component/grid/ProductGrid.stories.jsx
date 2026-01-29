import Box from '@mui/material/Box';
import { ProductGrid } from '../../../components/grid/ProductGrid';
import { products, PRODUCT_TYPES } from '../../../data/products';

export default {
  title: 'Custom Component/Grid/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductGrid

제품 목록을 반응형 그리드로 표시하는 컴포넌트.

### 반응형 Breakpoints
- **xs** (< 600px): 1열
- **sm** (600px - 900px): 2열
- **md** (900px - 1200px): 3열
- **lg** (1200px+): 4열

### 특징
- MUI Grid 기반 반응형 레이아웃
- ProductCard 컴포넌트 활용
- 제품 클릭 이벤트 지원
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
    columnSpacing: {
      control: { type: 'range', min: 0, max: 8 },
      description: '좌우 간격 (theme.spacing 단위)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
      },
    },
    rowSpacing: {
      control: { type: 'range', min: 0, max: 10 },
      description: '상하 간격 (theme.spacing 단위)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 시 콜백',
      table: {
        type: { summary: '(product) => void' },
      },
    },
  },
};

/** 기본 ProductGrid - 모든 제품 표시 */
export const Default = {
  args: {
    columnSpacing: 2,
    rowSpacing: 5,
  },
};

/** 간격 조절 */
export const Spacing = {
  render: () => (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Box sx={{ mb: 1, fontWeight: 600 }}>좁은 간격 (column: 1, row: 3)</Box>
        <ProductGrid products={products.slice(0, 4)} columnSpacing={1} rowSpacing={3} />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>넓은 간격 (column: 3, row: 8)</Box>
        <ProductGrid products={products.slice(0, 4)} columnSpacing={3} rowSpacing={8} />
      </Box>
    </Box>
  ),
};

/** 필터링된 제품 - 타입별 */
export const FilteredByType = {
  render: () => {
    const ceilingProducts = products.filter((p) => p.type === PRODUCT_TYPES.CEILING);
    const wallProducts = products.filter((p) => p.type === PRODUCT_TYPES.WALL);

    return (
      <Box>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Ceiling Type ({ceilingProducts.length}개)</Box>
          <ProductGrid products={ceilingProducts} />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Wall Type ({wallProducts.length}개)</Box>
          <ProductGrid products={wallProducts} />
        </Box>
      </Box>
    );
  },
};

/** 클릭 이벤트 */
export const WithClickHandler = {
  args: {
    products: products.slice(0, 4),
    onProductClick: (product) => alert(`Clicked: ${product.title}`),
  },
};
