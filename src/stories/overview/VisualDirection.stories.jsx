import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Visual Direction',
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => {
    const colorPalette = [
      {
        name: 'Wall Tint White',
        hex: '#F5F2EE',
        usage: '라이트 배경, 카드 배경',
      },
      {
        name: '3800K White',
        hex: '#F2E9DA',
        usage: '다크 모드 텍스트',
      },
      {
        name: 'Warm Black',
        hex: '#12100E',
        usage: '다크 배경, 라이트 모드 텍스트',
      },
      {
        name: '3800K Accent',
        hex: '#FFC66E',
        usage: '액센트 (CTA, 링크, 포커스)',
      },
    ];

    const muiTokenMapping = [
      {
        mode: 'Light',
        primaryMain: '#12100E (Warm Black)',
        secondaryMain: '#FFC66E (Accent)',
      },
      {
        mode: 'Dark',
        primaryMain: '#F5F2EE (Wall Tint White)',
        secondaryMain: '#FFC66E (Accent)',
      },
    ];

    const timeBasedBackground = [
      { time: '12:00pm (정오)', hex: '#F5F2EE', state: '가장 밝음' },
      { time: '4:00pm (오후)', hex: '#F5F2EE', state: '밝음 유지' },
      { time: '8:00pm (저녁)', hex: '#12100E', state: '어두움 전환' },
      { time: '12:00am (자정)', hex: '#12100E', state: '가장 어두움' },
    ];

    const typography = [
      { usage: 'Display', font: 'Cormorant Garamond' },
      { usage: 'Body', font: 'Pretendard Variable' },
    ];

    return (
      <>
        <DocumentTitle
          title="Lumenstate Visual Direction"
          status="Available"
          note="브랜드 키 비주얼 방향 문서"
          brandName="Lumenstate"
          systemName="Brand Guide"
          version="1.0"
        />
        <PageContainer>
          {/* 헤더 */}
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Lumenstate Key Visual Direction
          </Typography>
          <Typography
            variant="h6"
            sx={ { fontStyle: 'italic', color: 'text.secondary', mb: 4 } }
          >
            "빛은 공간의 상태다."
          </Typography>

          <Divider sx={ { my: 4 } } />

          {/* Visual Concept */}
          <SectionTitle title="Visual Concept" />
          <Box
            sx={ {
              p: 3,
              mb: 4,
              backgroundColor: 'action.hover',
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
            } }
          >
            <Typography variant="body1" sx={ { mb: 2 } }>
              조명 제품의 선과 면으로 구성된 기하학적 형태를 UI에 계승합니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              곡선 세리프 서체로 빛의 부드러운 확산을 표현하고,
              라인 그리드와 충분한 여백으로 공간의 품격을 유지합니다.
            </Typography>
          </Box>

          <Divider sx={ { my: 4 } } />

          {/* Color */}
          <SectionTitle title="Color" />
          <Typography variant="body2" color="error.main" sx={ { mb: 2, fontWeight: 600 } }>
            4색만 사용. 그래디언트/글로우/블러 금지.
          </Typography>

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>색상명</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>컬러</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Hex</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { colorPalette.map((color) => (
                  <TableRow key={ color.name }>
                    <TableCell sx={ { fontWeight: 500 } }>{ color.name }</TableCell>
                    <TableCell>
                      <Box
                        sx={ {
                          width: 32,
                          height: 32,
                          backgroundColor: color.hex,
                          border: '1px solid',
                          borderColor: 'divider',
                        } }
                      />
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace' } }>{ color.hex }</TableCell>
                    <TableCell>{ color.usage }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          {/* MUI 토큰 매핑 */}
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2 } }>
            MUI 토큰 매핑
          </Typography>
          <TableContainer sx={ { mb: 2 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>모드</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>primary.main</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>secondary.main</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { muiTokenMapping.map((row) => (
                  <TableRow key={ row.mode }>
                    <TableCell sx={ { fontWeight: 500 } }>{ row.mode }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: '0.8rem' } }>
                      { row.primaryMain }
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: '0.8rem' } }>
                      { row.secondaryMain }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2">
                <strong>primary:</strong> 기본 텍스트, 아이콘, 보더 (모드에 따라 반전)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>secondary:</strong> CTA 버튼, 링크, 액센트 (모드 불문 동일)
              </Typography>
            </li>
          </Box>

          {/* 시간대별 배경색 전환 */}
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2 } }>
            시간대별 배경색 전환
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>
            12:00pm → 12:00am 사이를 4단계로 나눠 배경색이 점진적으로 전환.
            4:00pm → 8:00pm 구간에서 밝은색에서 어두운색으로 자연스럽게 보간.
          </Typography>
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>시간</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>배경색</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { timeBasedBackground.map((row) => (
                  <TableRow key={ row.time }>
                    <TableCell>{ row.time }</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={ 1 } alignItems="center">
                        <Box
                          sx={ {
                            width: 20,
                            height: 20,
                            backgroundColor: row.hex,
                            border: '1px solid',
                            borderColor: 'divider',
                          } }
                        />
                        <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                          { row.hex }
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{ row.state }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={ { my: 4 } } />

          {/* Typography */}
          <SectionTitle title="Typography" />
          <TableContainer sx={ { mb: 3 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>폰트</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { typography.map((row) => (
                  <TableRow key={ row.usage }>
                    <TableCell sx={ { fontWeight: 500 } }>{ row.usage }</TableCell>
                    <TableCell>{ row.font }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            선택 이유
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2">
                <strong>Cormorant Garamond:</strong> 세리프 곡선이 빛의 확산을 연상, 기하학적 우아함
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Pretendard:</strong> 한글/영문 혼용 최적화, 가변 폰트 지원
              </Typography>
            </li>
          </Box>

          <Divider sx={ { my: 4 } } />

          {/* Icon */}
          <SectionTitle title="Icon" />
          <Box sx={ { mb: 2 } }>
            <Typography variant="body2" sx={ { mb: 1 } }>
              <strong>Library:</strong>{' '}
              <Typography component="code" sx={ { fontFamily: 'monospace', backgroundColor: 'action.hover', px: 0.5 } }>
                lucide-react
              </Typography>
            </Typography>
          </Box>

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            선택 이유
          </Typography>
          <Box component="ul" sx={ { pl: 2 } }>
            <li>
              <Typography variant="body2">
                1.5px 스트로크로 브랜드 라인 스타일과 일치
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                경량, 트리쉐이킹 지원
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Feather Icons 계승으로 미니멀 미감 보장
              </Typography>
            </li>
          </Box>
        </PageContainer>
      </>
    );
  },
};
