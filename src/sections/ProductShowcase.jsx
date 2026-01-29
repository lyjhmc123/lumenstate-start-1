import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProductFilter } from '../components/navigation/ProductFilter';
import { ProductGrid } from '../components/grid/ProductGrid';
import { products as defaultProducts } from '../data/products';

/**
 * ProductShowcase 컴포넌트
 *
 * ProductFilter와 ProductGrid를 결합한 제품 쇼케이스 섹션.
 * 좌측에 카테고리 필터, 우측에 제품 그리드를 배치한다.
 *
 * 동작 방식:
 * 1. 좌측 필터에서 카테고리 선택
 * 2. 선택된 카테고리에 따라 제품 목록 필터링
 * 3. 필터링된 제품을 우측 그리드에 표시
 * 4. 제품 개수 표시
 *
 * Props:
 * @param {array} products - 제품 데이터 배열 [Optional, 기본값: products.js 전체]
 * @param {string} defaultCategory - 초기 선택 카테고리 [Optional, 기본값: 'all']
 * @param {function} onProductClick - 제품 클릭 시 콜백 (product) => void [Optional]
 * @param {function} onCategoryChange - 카테고리 변경 시 콜백 (category) => void [Optional]
 * @param {boolean} showCount - 제품 개수 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductShowcase
 *   products={products}
 *   defaultCategory="ceiling"
 *   onProductClick={(product) => console.log(product)}
 * />
 */
const ProductShowcase = forwardRef(function ProductShowcase({
  products = defaultProducts,
  defaultCategory = 'all',
  onProductClick,
  onCategoryChange,
  showCount = true,
  sx,
  ...props
}, ref) {
  const [category, setCategory] = useState(defaultCategory);

  /**
   * 카테고리 변경 핸들러
   */
  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
    onCategoryChange?.(newValue);
  };

  /**
   * 필터링된 제품 목록
   */
  const filteredProducts = category === 'all'
    ? products
    : products.filter((p) => p.type === category);

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 2 }}>
          <ProductFilter
            value={category}
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          {showCount && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {filteredProducts.length}개 제품
            </Typography>
          )}
          <ProductGrid
            products={filteredProducts}
            onProductClick={onProductClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export { ProductShowcase };
