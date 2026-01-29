import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CustomCard } from './CustomCard';

/**
 * ProductCard 컴포넌트
 *
 * 제품 정보를 표시하는 카드 컴포넌트.
 * CustomCard를 확장하여 이미지, 타이틀, 메타 정보를 수직으로 배치한다.
 *
 * 동작 방식:
 * 1. 이미지 영역: 제품 이미지 표시 (원본 비율 유지)
 * 2. 카테고리 태그: 제품 타입 표시
 * 3. 타이틀 영역: 제품명 표시
 * 4. 메타 영역: 조도(lux)와 색온도(kelvin) 정보 표시
 *
 * Props:
 * @param {string} title - 제품명 [Required]
 * @param {string} imageSrc - 제품 이미지 URL [Optional]
 * @param {string} type - 제품 카테고리 ('ceiling' | 'stand' | 'wall' | 'desk') [Optional]
 * @param {number} lux - 조도 값 (lx) [Optional]
 * @param {number} kelvin - 색온도 값 (K) [Optional]
 * @param {string} mediaRatio - 이미지 비율 ('1/1' | '4/3' | '16/9' | '21/9' | 'auto') [Optional, 기본값: 'auto']
 * @param {function} onClick - 카드 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductCard
 *   title="Lumen Desk Pro"
 *   imageSrc="/images/product1.jpg"
 *   type="ceiling"
 *   lux={260}
 *   kelvin={3200}
 *   onClick={() => console.log('clicked')}
 * />
 */
const ProductCard = forwardRef(function ProductCard({
  title,
  imageSrc,
  type,
  lux,
  kelvin,
  mediaRatio = 'auto',
  onClick,
  sx,
  ...props
}, ref) {
  /**
   * 메타 정보 포맷팅
   * - lux와 kelvin이 있으면 "260 lx · 3200 K" 형식으로 표시
   */
  const formatMeta = () => {
    const parts = [];
    if (lux !== undefined) parts.push(`${lux} lx`);
    if (kelvin !== undefined) parts.push(`${kelvin} K`);
    return parts.join(' · ');
  };

  const metaText = formatMeta();

  return (
    <CustomCard
      ref={ref}
      layout="vertical"
      variant="ghost"
      mediaSrc={imageSrc}
      mediaAlt={title}
      mediaRatio={mediaRatio}
      contentPadding="none"
      isInteractive={!!onClick}
      onClick={onClick}
      sx={sx}
      {...props}
    >
      <Box sx={{ pt: 1.5 }}>
        {type && (
          <Chip
            label={type}
            size="small"
            sx={{
              mb: 0.75,
              height: 22,
              fontSize: '0.75rem',
              textTransform: 'capitalize',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          />
        )}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        {metaText && (
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mt: 0.5,
            }}
          >
            {metaText}
          </Typography>
        )}
      </Box>
    </CustomCard>
  );
});

export { ProductCard };
