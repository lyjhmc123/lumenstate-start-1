import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { GNB } from './GNB';
import { Footer } from './Footer';

/**
 * AppShell 컴포넌트
 *
 * 범용 레이아웃 쉘. GNB(헤더), 메인 영역, Footer로 구성.
 *
 * Props:
 * @param {string} brandName - 브랜드명 [Optional, 기본값: 'Brand']
 * @param {node} headerRightContent - 헤더 우측 콘텐츠 (아이콘, 버튼 등) [Optional]
 * @param {node} children - 메인 콘텐츠 영역 [Required]
 * @param {number} headerHeight - 헤더 높이 (px) [Optional, 기본값: 64]
 * @param {boolean} hasHeaderBorder - 헤더 하단 보더 [Optional, 기본값: true]
 * @param {boolean} isHeaderSticky - 헤더 고정 [Optional, 기본값: true]
 * @param {boolean} isHeaderTransparent - 헤더 투명 배경 [Optional, 기본값: false]
 * @param {function} onSubscribe - 뉴스레터 구독 핸들러 (email) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <AppShell brandName="MyBrand">
 *   <MainContent />
 * </AppShell>
 */
const AppShell = forwardRef(function AppShell({
  brandName = 'Brand',
  headerRightContent,
  onSubscribe,
  children,
  headerHeight = 64,
  hasHeaderBorder = true,
  isHeaderSticky = true,
  isHeaderTransparent = false,
  sx,
  ...props
}, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        ...sx,
      }}
      {...props}
    >
      {/* GNB */}
      <GNB
        brandName={brandName}
        rightContent={headerRightContent}
        height={headerHeight}
        hasBorder={hasHeaderBorder}
        isSticky={isHeaderSticky}
        isTransparent={isHeaderTransparent}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          pb: { xs: 10, md: 14 },
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer onSubscribe={onSubscribe} />
    </Box>
  );
});

export { AppShell };
