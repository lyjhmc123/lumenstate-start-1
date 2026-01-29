import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../card/ProductCard';
import { products as defaultProducts } from '../../data/products';

/**
 * ProductGrid 컴포넌트
 *
 * 제품 목록을 반응형 그리드로 표시하는 컴포넌트.
 * MUI Grid와 ProductCard를 활용하여 제품들을 배치한다.
 *
 * 동작 방식:
 * 1. products 배열을 받아 ProductCard로 렌더링
 * 2. 반응형 그리드: xs(1열) → sm(2열) → md(3열) → lg(4열)
 * 3. 각 카드 클릭 시 onProductClick 콜백 호출
 *
 * Props:
 * @param {array} products - 제품 데이터 배열 [Optional, 기본값: products.js 전체]
 * @param {number} columnSpacing - 좌우 간격 (theme.spacing 단위) [Optional, 기본값: 2]
 * @param {number} rowSpacing - 상하 간격 (theme.spacing 단위) [Optional, 기본값: 5]
 * @param {function} onProductClick - 제품 클릭 시 콜백 (product) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGrid
 *   products={filteredProducts}
 *   columnSpacing={2}
 *   rowSpacing={5}
 *   onProductClick={(product) => console.log(product)}
 * />
 */
const ProductGrid = forwardRef(function ProductGrid({
  products = defaultProducts,
  columnSpacing = 2,
  rowSpacing = 5,
  onProductClick,
  sx,
  ...props
}, ref) {
  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container columnSpacing={columnSpacing} rowSpacing={rowSpacing}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard
              title={product.title}
              imageSrc={product.images?.[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export { ProductGrid };
