import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Project Summary',
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => {
    const colorScheme = [
      { name: 'Wall Tint White', hex: '#F5F2EE', usage: '라이트 배경' },
      { name: '3800K White', hex: '#F2E9DA', usage: '라이트 보조 / 다크 텍스트' },
      { name: 'Warm Black', hex: '#12100E', usage: '다크 배경' },
      { name: '3800K Accent', hex: '#FFC66E', usage: '하이라이트 (링크/CTA/포커스)' },
    ];

    const functionalRequirements = [
      { id: 'F-1', description: '히어로 3단계 루프 모션(낮/저녁/밤) - 이미지 간 크로스페이드, 점멸 금지' },
      { id: 'F-2', description: '쇼케이스 타임라인 스크러버 - 슬라이더 조작 시 모션 소스 타임라인 시킹 및 상태 라벨(lux·K) 실시간 갱신' },
      { id: 'F-3', description: 'Lazy-load - 카드 썸네일 지연 로딩, 3컷 사전 프리로드' },
      { id: 'F-4', description: '다크모드 지원 - 배경/텍스트만 4색 스킴 내에서 전환' },
    ];

    return (
      <>
        <DocumentTitle
          title="Lumenstate Project Summary"
          status="Available"
          note="브랜드 프로젝트 기획 문서"
          brandName="Lumenstate"
          systemName="Brand Website"
          version="1.0"
        />
        <PageContainer>
          {/* 배경 & 문제정의 */}
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Lumenstate
          </Typography>
          <Typography
            variant="h6"
            sx={ { fontStyle: 'italic', color: 'text.secondary', mb: 2 } }
          >
            "빛은 공간의 상태다."
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            현대 주거 공간에서 조명은 단순한 스위치가 아니라, 하루의 리듬(시간·환경)에 반응해
            시력을 보호하고 무드를 조율해야 함. Lumenstate는 환경 반응형 조도/색온도 커브를 제안합니다.
          </Typography>

          <Divider sx={ { my: 4 } } />

          {/* 목표 */}
          <SectionTitle title="1. 목표 (Goals)" />
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2">
                브랜드 메시지(철학)와 핵심 기능(환경 반응형 라이팅)을 명료하게 전달
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                제품 썸네일을 정면·평면·여백 중심 아트디렉션으로 일관되게 노출
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                낮/저녁/밤 시나리오를 직관적으로 체험시키고, 조도·색온도 개념을 이해시키는 인터랙션 제공
              </Typography>
            </li>
          </Box>

          {/* 비범위 */}
          <SectionTitle title="2. 비범위 (Non-Goals)" />
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2" color="text.secondary">
                커머스 결제/장바구니, 설치 상담 예약 등 트랜잭션 기능
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                상세 구성요소(앱·디바이스 설정) 편집 UI
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                실시간 센서 연동 (파일럿 단계에서 제외)
              </Typography>
            </li>
          </Box>

          {/* 타깃 사용자 */}
          <SectionTitle title="3. 타깃 사용자" />
          <Stack direction="row" spacing={ 1 } sx={ { mb: 2 } }>
            <Chip label="홈 라이팅 민감 거주자" variant="outlined" size="small" />
            <Chip label="디자인/브랜딩 민감 사용자" variant="outlined" size="small" />
          </Stack>
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2" color="text.secondary">
                서재/식탁/침실의 눈 피로·분위기 개선 니즈
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                미니멀 미감, 정면 아트 디렉션 선호
              </Typography>
            </li>
          </Box>

          {/* 핵심 가치 제안 */}
          <SectionTitle title="4. 핵심 가치 제안" />
          <Box
            sx={ {
              p: 3,
              mb: 4,
              backgroundColor: 'action.hover',
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
            } }
          >
            <Typography variant="body1" sx={ { fontWeight: 600, mb: 1 } }>
              "빛은 공간의 상태다."
            </Typography>
            <Typography variant="body2" color="text.secondary">
              하루의 곡선을 따라 조도·색온도를 부드럽게 조율.
              시력 보호·수면 위생·대화 품질 향상을 위한 장면 프리셋 제공.
            </Typography>
          </Box>

          <Divider sx={ { my: 4 } } />

          {/* IA / 섹션 범위 */}
          <SectionTitle title="5. IA / 섹션 범위" />

          {/* 히어로 */}
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            5.1 히어로
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 3 } }>
            <li>
              <Typography variant="body2">
                <strong>헤드라인:</strong> 빛은 공간의 상태다. (Light is the state of space.)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>서브:</strong> 하루의 곡선을 따라 조도·색온도를 부드럽게 조율합니다.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>비주얼:</strong> 정면·평면 배경 제품 이미지 + 3단계 크로스페이드 루프(낮→저녁→밤)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>CTA:</strong> 제품 보기 / 하루 리듬 시연
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>모션:</strong> easeInOutSine, 600·900·1200ms
              </Typography>
            </li>
          </Box>

          {/* 제품 쇼케이스 */}
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            5.2 제품 쇼케이스
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2">
                <strong>그리드:</strong> Desktop 3x2 / Mobile 2열
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>카드 구성:</strong> 썸네일(정면·평면) / 제품명 / 마감 태그 / 상태 라벨(lux·K)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>컨트롤:</strong> 타임라인 스크러버 (0-1 구간 슬라이더로 모션 영상 타임라인 직접 조절)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>전환:</strong> 스크러버 이동 시 영상 프레임 시킹 및 조도·색온도 실시간 업데이트
              </Typography>
            </li>
          </Box>

          <Divider sx={ { my: 4 } } />

          {/* 컬러 스킴 */}
          <SectionTitle title="6. 컬러 스킴 (4색 한정)" />
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>
            사이트 전반은 아래 4색만 사용. 그래디언트/글로우/블러 금지.
          </Typography>
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>색상</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>컬러</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Hex</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { colorScheme.map((color) => (
                  <TableRow key={ color.name }>
                    <TableCell>{ color.name }</TableCell>
                    <TableCell>
                      <Box
                        sx={ {
                          width: 24,
                          height: 24,
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

          {/* 라이트/다크 모드 */}
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            모드별 적용
          </Typography>
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>모드</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>배경</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>본문</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>액센트</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Light</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#F5F2EE</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#12100E</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#FFC66E</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dark</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#12100E</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#F2E9DA</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>#FFC66E</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={ { my: 4 } } />

          {/* 마이크로카피 */}
          <SectionTitle title="7. 마이크로카피" />
          <Box component="ul" sx={ { pl: 2, mb: 4 } }>
            <li>
              <Typography variant="body2">
                <strong>CTA:</strong> 제품 보기 / 하루 리듬 시연
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>상태 라벨 예시:</strong> 260 lx · 3200 K / 480 lx · 4400 K
              </Typography>
            </li>
          </Box>

          {/* 기능 요구사항 */}
          <SectionTitle title="8. 기능 요구사항" />
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: 80 } }>ID</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { functionalRequirements.map((req) => (
                  <TableRow key={ req.id }>
                    <TableCell sx={ { fontFamily: 'monospace', color: 'secondary.main' } }>
                      { req.id }
                    </TableCell>
                    <TableCell>{ req.description }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>
    );
  },
};
