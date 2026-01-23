import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

/**
 * GNB 컴포넌트
 *
 * 범용 GNB (Global Navigation Bar).
 * 좌측에 로고, 우측에 커스텀 액션 영역.
 *
 * Props:
 * @param {string} brandName - 브랜드명 [Optional, 기본값: 'Brand']
 * @param {node} rightContent - 우측 콘텐츠 (아이콘, 버튼 등) [Optional]
 * @param {number} height - 헤더 높이 (px) [Optional, 기본값: 64]
 * @param {boolean} hasBorder - 헤더 하단 보더 [Optional, 기본값: true]
 * @param {boolean} isSticky - 헤더 고정 [Optional, 기본값: true]
 * @param {boolean} isTransparent - 헤더 투명 배경 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <GNB brandName="MyBrand" rightContent={<IconButton>...</IconButton>} />
 */
const GNB = forwardRef(function GNB({
  brandName = 'Brand',
  rightContent,
  height = 64,
  hasBorder = true,
  isSticky = true,
  isTransparent = false,
  sx,
  ...props
}, ref) {
  const theme = useTheme();

  /**
   * 헤더 스타일
   */
  const headerStyles = {
    position: isSticky ? 'sticky' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.appBar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height,
    px: { xs: 2, sm: 3, md: 4 },
    backgroundColor: isTransparent ? 'transparent' : 'background.paper',
    borderBottom: hasBorder ? '1px solid' : 'none',
    borderColor: 'divider',
    backdropFilter: isTransparent ? 'blur(12px)' : 'none',
    ...sx,
  };

  return (
    <Box ref={ref} component="header" sx={headerStyles} {...props}>
      {/* Left: Logo */}
      <Typography variant="h6" fontWeight={700}>
        {brandName}
      </Typography>

      {/* Right: Custom Content */}
      {rightContent && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {rightContent}
        </Box>
      )}
    </Box>
  );
});

export { GNB };
