import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Menu, Search } from 'lucide-react';
import { AppShell } from '../../../components/navigation/AppShell';
import { Page1, Page2, Page3 } from '../../../pages';

export default {
  title: 'Custom Component/Navigation/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## AppShell

범용 애플리케이션 쉘 컴포넌트.

### 특징
- GNB(헤더) + 메인 콘텐츠 + Footer 구성
- 브랜드명, 헤더 우측 콘텐츠 커스터마이즈 가능
- react-router-dom 연동 지원
        `,
      },
    },
  },
  argTypes: {
    brandName: {
      control: 'text',
      description: '브랜드명',
    },
    headerHeight: {
      control: { type: 'number', min: 48, max: 96 },
      description: '헤더 높이 (px)',
    },
    hasHeaderBorder: {
      control: 'boolean',
      description: '헤더 하단 보더',
    },
    isHeaderSticky: {
      control: 'boolean',
      description: '헤더 고정 여부',
    },
    isHeaderTransparent: {
      control: 'boolean',
      description: '헤더 투명 배경',
    },
  },
};

/** 기본 AppShell - Controls에서 Props 조작 가능 */
export const Default = {
  args: {
    brandName: 'Brand',
    headerHeight: 64,
    hasHeaderBorder: true,
    isHeaderSticky: true,
    isHeaderTransparent: false,
  },
  render: (args) => (
    <Box sx={{ height: 400, border: '1px solid', borderColor: 'divider' }}>
      <AppShell {...args}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
          }}
        >
          <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Main Content
            </Typography>
            <Typography color="text.secondary">
              AppShell은 GNB + 메인 콘텐츠 + Footer로 구성됩니다.
            </Typography>
          </Box>
        </Box>
      </AppShell>
    </Box>
  ),
};

/** 헤더 우측 콘텐츠 포함 */
export const WithHeaderContent = {
  args: {
    brandName: 'MyBrand',
    headerHeight: 64,
    hasHeaderBorder: true,
  },
  render: (args) => (
    <Box sx={{ height: 400, border: '1px solid', borderColor: 'divider' }}>
      <AppShell
        {...args}
        headerRightContent={
          <>
            <IconButton size="small">
              <Search size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton size="small">
              <Menu size={20} strokeWidth={1.5} />
            </IconButton>
          </>
        }
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            헤더에 아이콘이 포함된 레이아웃
          </Typography>
        </Box>
      </AppShell>
    </Box>
  ),
};

/** 라우터 연동 예시 - 메뉴 클릭 시 페이지 전환 */
export const WithRouter = {
  render: () => (
    <MemoryRouter initialEntries={['/']}>
      <Box sx={{ height: 500, border: '1px solid', borderColor: 'divider' }}>
        <AppShell brandName="Brand">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="*" element={<Page1 />} />
          </Routes>
        </AppShell>
      </Box>
    </MemoryRouter>
  ),
};

/** 레이아웃 변형 비교 */
export const LayoutVariants = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', mb: 1, display: 'block' }}>
          기본 레이아웃
        </Typography>
        <Box sx={{ height: 300, border: '1px solid', borderColor: 'divider' }}>
          <AppShell brandName="Brand">
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.50' }}>
              <Typography variant="h5" fontWeight={600}>Content Area</Typography>
            </Box>
          </AppShell>
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', mb: 1, display: 'block' }}>
          투명 헤더 (Hero 섹션)
        </Typography>
        <Box sx={{ height: 300 }}>
          <AppShell brandName="Brand" isHeaderTransparent hasHeaderBorder={false}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              }}
            >
              <Typography variant="h3" fontWeight={700} color="white">
                Hero Section
              </Typography>
            </Box>
          </AppShell>
        </Box>
      </Box>
    </Stack>
  ),
};
