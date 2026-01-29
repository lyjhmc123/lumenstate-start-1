import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PRODUCT_TYPES } from '../../data/products';

/**
 * 카테고리 라벨 맵
 */
const CATEGORY_LABELS = {
  all: 'All',
  [PRODUCT_TYPES.CEILING]: 'Ceiling',
  [PRODUCT_TYPES.STAND]: 'Stand',
  [PRODUCT_TYPES.WALL]: 'Wall',
  [PRODUCT_TYPES.DESK]: 'Desk',
};

/**
 * ProductFilter 컴포넌트
 *
 * 제품 카테고리를 필터링하는 버티컬 탭 컴포넌트.
 * MUI Tabs를 vertical orientation으로 사용한다.
 *
 * 동작 방식:
 * 1. 'All' + PRODUCT_TYPES의 카테고리를 탭으로 표시
 * 2. 탭 클릭 시 onChange 콜백으로 선택된 카테고리 전달
 * 3. value가 'all'이면 전체, 그 외에는 해당 타입만 필터링
 *
 * Props:
 * @param {string} value - 현재 선택된 카테고리 ('all' | 'ceiling' | 'stand' | 'wall' | 'desk') [Optional, 기본값: 'all']
 * @param {function} onChange - 카테고리 변경 시 콜백 (event, newValue) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductFilter
 *   value={selectedCategory}
 *   onChange={(e, newValue) => setSelectedCategory(newValue)}
 * />
 */
const ProductFilter = forwardRef(function ProductFilter({
  value = 'all',
  onChange,
  sx,
  ...props
}, ref) {
  const categories = ['all', ...Object.values(PRODUCT_TYPES)];

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiTabs-indicator': {
            left: 0,
            right: 'auto',
            width: 2,
          },
          '& .MuiTab-root': {
            alignItems: 'flex-start',
            textAlign: 'left',
            textTransform: 'capitalize',
            minHeight: 48,
            px: 2,
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            value={category}
            label={CATEGORY_LABELS[category]}
          />
        ))}
      </Tabs>
    </Box>
  );
});

export { ProductFilter };
