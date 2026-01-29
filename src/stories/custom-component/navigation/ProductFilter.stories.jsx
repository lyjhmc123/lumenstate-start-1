import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProductFilter } from '../../../components/navigation/ProductFilter';
import { ProductGrid } from '../../../components/grid/ProductGrid';
import { products } from '../../../data/products';

export default {
  title: 'Custom Component/Navigation/ProductFilter',
  component: ProductFilter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductFilter

제품 카테고리를 필터링하는 버티컬 탭 컴포넌트.

### 카테고리
- **All**: 전체 제품
- **Ceiling**: 천장 조명
- **Stand**: 스탠드 조명
- **Wall**: 벽 조명
- **Desk**: 데스크 조명

### 특징
- MUI Tabs (vertical orientation)
- 왼쪽 인디케이터
- 카테고리 변경 시 콜백 지원
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['all', 'ceiling', 'stand', 'wall', 'desk'],
      description: '현재 선택된 카테고리',
      table: {
        type: { summary: "'all' | 'ceiling' | 'stand' | 'wall' | 'desk'" },
        defaultValue: { summary: 'all' },
      },
    },
    onChange: {
      action: 'changed',
      description: '카테고리 변경 시 콜백',
      table: {
        type: { summary: '(event, newValue) => void' },
      },
    },
  },
};

/** 기본 ProductFilter */
export const Default = {
  args: {
    value: 'all',
  },
};

/** ProductGrid와 함께 사용 */
export const WithProductGrid = {
  render: function Render() {
    const [category, setCategory] = useState('all');

    const filteredProducts = category === 'all'
      ? products
      : products.filter((p) => p.type === category);

    return (
      <Box sx={{ width: 1200 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 2 }}>
            <ProductFilter
              value={category}
              onChange={(e, newValue) => setCategory(newValue)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {filteredProducts.length}개 제품
            </Typography>
            <ProductGrid products={filteredProducts} />
          </Grid>
        </Grid>
      </Box>
    );
  },
};
