import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, Search, User } from 'lucide-react';
import { GNB } from '../../../components/navigation/GNB';

export default {
  title: 'Custom Component/Navigation/GNB',
  component: GNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## GNB

범용 Global Navigation Bar 컴포넌트.

### 특징
- 좌측: 브랜드명 (props로 전달)
- 우측: 커스텀 콘텐츠 영역 (아이콘, 버튼 등)
- 투명/고정 헤더 옵션
        `,
      },
    },
  },
  argTypes: {
    brandName: {
      control: 'text',
      description: '브랜드명',
    },
    height: {
      control: { type: 'number', min: 48, max: 96 },
      description: '헤더 높이 (px)',
    },
    hasBorder: {
      control: 'boolean',
      description: '헤더 하단 보더',
    },
    isSticky: {
      control: 'boolean',
      description: '헤더 고정 여부',
    },
    isTransparent: {
      control: 'boolean',
      description: '투명 배경 + 블러 효과',
    },
  },
};

/** 기본 GNB - Controls에서 Props 조작 가능 */
export const Default = {
  args: {
    brandName: 'Brand',
    height: 64,
    hasBorder: true,
    isSticky: true,
    isTransparent: false,
  },
  render: (args) => (
    <Box sx={{ height: 400 }}>
      <GNB {...args} />
      <Box sx={{ p: 4, bgcolor: 'grey.50', height: '100%' }}>
        <Typography color="text.secondary">
          기본 GNB 레이아웃입니다.
        </Typography>
      </Box>
    </Box>
  ),
};

/** 우측 콘텐츠 포함 */
export const WithRightContent = {
  args: {
    brandName: 'MyBrand',
    height: 64,
    hasBorder: true,
  },
  render: (args) => (
    <Box sx={{ height: 400 }}>
      <GNB
        {...args}
        rightContent={
          <>
            <IconButton size="small">
              <Search size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton size="small">
              <User size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton size="small">
              <Menu size={20} strokeWidth={1.5} />
            </IconButton>
          </>
        }
      />
      <Box sx={{ p: 4, bgcolor: 'grey.50', height: '100%' }}>
        <Typography color="text.secondary">
          우측에 아이콘 버튼들이 포함된 GNB입니다.
        </Typography>
      </Box>
    </Box>
  ),
};

/** 헤더 스타일 비교 */
export const HeaderStyles = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', mb: 1, display: 'block' }}>
          hasBorder: true (기본)
        </Typography>
        <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
          <GNB brandName="Brand" hasBorder />
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', mb: 1, display: 'block' }}>
          isTransparent: true (Hero 섹션용)
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <GNB brandName="Brand" isTransparent hasBorder={false} />
          <Box
            sx={{
              height: 200,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" color="white" fontWeight={700}>
              Hero Section
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  ),
};
