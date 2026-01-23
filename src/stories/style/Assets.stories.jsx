import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';
import { products, PRODUCT_OPTIONS, PRODUCT_TYPES } from '../../data/products';
import { content } from '../../data/content';

export default {
  title: 'Style/Assets',
  parameters: {
    layout: 'padded',
  },
};

/** 제품 상세 카드 - 낮/밤 이미지 + 비디오 */
const ProductDetailCard = ({ product }) => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: 'divider',
      mb: 4,
    }}
  >
    {/* 헤더 */}
    <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {product.title}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
        ID: {product.id} · {product.type} · {product.lux} lx · {product.kelvin} K
      </Typography>
    </Box>

    {/* 에셋 그리드 */}
    <Grid container>
      {/* 낮 이미지 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ p: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
            Day
          </Typography>
          <Box sx={{ aspectRatio: '1', backgroundColor: '#F5F2EE' }}>
            {product.images?.[0] && (
              <Box
                component="img"
                src={product.images[0]}
                alt={`${product.title} - Day`}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </Box>
        </Box>
      </Grid>

      {/* 밤 이미지 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ p: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
            Night
          </Typography>
          <Box sx={{ aspectRatio: '1', backgroundColor: '#12100E' }}>
            {product.images?.[1] && (
              <Box
                component="img"
                src={product.images[1]}
                alt={`${product.title} - Night`}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </Box>
        </Box>
      </Grid>

      {/* 비디오 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ p: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
            Motion
          </Typography>
          <Box sx={{ aspectRatio: '1', backgroundColor: '#12100E' }}>
            {product.video ? (
              <Box
                component="video"
                src={product.video}
                muted
                loop
                playsInline
                autoPlay
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" color="grey.600">
                  No video
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

/** 비디오 프리뷰 컴포넌트 */
const VideoPreview = ({ product }) => (
  <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
    <Box sx={{ position: 'relative', aspectRatio: '16/9', backgroundColor: 'grey.900' }}>
      {product.video ? (
        <Box
          component="video"
          src={product.video}
          muted
          loop
          playsInline
          autoPlay
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" color="grey.500">
            No video
          </Typography>
        </Box>
      )}
    </Box>
    <Box sx={{ p: 1.5, backgroundColor: 'background.paper' }}>
      <Typography variant="caption" sx={{ fontWeight: 600 }}>
        {product.title}
      </Typography>
    </Box>
  </Box>
);

/** Content Data - 브랜드 콘텐츠 문서 */
export const ContentData = {
  render: () => {
    return (
      <>
        <DocumentTitle
          title="Content Data"
          status="Available"
          note="Brand content and copy"
          brandName="Starter Kit"
          systemName="Design System"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Content Data
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            content.js에서 관리하는 브랜드 콘텐츠 데이터입니다.
          </Typography>

          {/* Brand */}
          <SectionTitle title="Brand" description="브랜드 정보" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 150 }}>Name</TableCell>
                  <TableCell>{content.brand.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Tagline</TableCell>
                  <TableCell>{content.brand.tagline}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Navigation */}
          <SectionTitle title="Navigation" description="네비게이션 메뉴 아이템" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Label</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Path</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {content.navigation.menuItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{item.id}</TableCell>
                    <TableCell>{item.label}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{item.path}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Hero */}
          <SectionTitle title="Hero Section" description="히어로 섹션 콘텐츠" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 150 }}>Title</TableCell>
                  <TableCell>{content.hero.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Subtitle</TableCell>
                  <TableCell>{content.hero.subtitle}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Hero Videos */}
          <SectionTitle title="Hero Videos" description="히어로 섹션 비디오 에셋" />
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ aspectRatio: '16/9', backgroundColor: 'grey.900' }}>
                  <Box
                    component="video"
                    src={content.hero.videos.row1Col1}
                    muted
                    loop
                    playsInline
                    autoPlay
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>row1Col1</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontFamily: 'monospace' }}>
                    landscapeMotion
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ aspectRatio: '16/9', backgroundColor: 'grey.900' }}>
                  <Box
                    component="video"
                    src={content.hero.videos.row1Col2}
                    muted
                    loop
                    playsInline
                    autoPlay
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>row1Col2</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontFamily: 'monospace' }}>
                    product9Motion
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Brand Value */}
          <SectionTitle title="Brand Value" description="브랜드 가치 섹션 콘텐츠" />
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {content.brandValue.features.map((feature) => (
              <Grid key={feature.id} size={{ xs: 12, md: 4 }}>
                <Box sx={{ border: '1px solid', borderColor: 'divider', p: 2, height: '100%' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
                      {feature.icon}
                    </Typography>
                    <Chip label={feature.id} size="small" variant="outlined" />
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {feature.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {feature.detailedDescription}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Products Section */}
          <SectionTitle title="Products Section" description="제품 쇼케이스 섹션 텍스트" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 150 }}>Section Title</TableCell>
                  <TableCell>{content.products.sectionTitle}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Section Subtitle</TableCell>
                  <TableCell>{content.products.sectionSubtitle}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer */}
          <SectionTitle title="Footer" description="푸터 콘텐츠" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 150 }}>Copyright</TableCell>
                  <TableCell>{content.footer.copyright}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Usage */}
          <SectionTitle title="Usage" description="content.js 사용법" />
          <Box
            component="pre"
            sx={{
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
            }}
          >
{`import { content } from '../data/content';

// 브랜드 정보
<Typography>{content.brand.name}</Typography>
<Typography>{content.brand.tagline}</Typography>

// 네비게이션
content.navigation.menuItems.map((item) => (
  <Link to={item.path}>{item.label}</Link>
))

// 히어로 비디오
<video src={content.hero.videos.row1Col1} />

// 브랜드 가치
content.brandValue.features.map((f) => (
  <Card>
    <Typography>{f.title}</Typography>
    <Typography>{f.description}</Typography>
  </Card>
))`}
          </Box>
        </PageContainer>
      </>
    );
  },
};

/** Product Data - 제품 데이터 모델 문서 */
export const ProductData = {
  render: () => {
    const productsWithVideo = products.filter((p) => p.video);

    return (
      <>
        <DocumentTitle
          title="Product Data"
          status="Available"
          note="Product data model"
          brandName="Starter Kit"
          systemName="Design System"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Product Data Model
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            products.js에서 관리하는 제품 데이터 모델입니다.
          </Typography>

          {/* Summary */}
          <SectionTitle title="Summary" description="데이터 현황" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 200 }}>Total Products</TableCell>
                  <TableCell>{products.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Products with Video</TableCell>
                  <TableCell>{productsWithVideo.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Product Types</TableCell>
                  <TableCell sx={{ fontFamily: 'monospace' }}>
                    {Object.values(PRODUCT_TYPES).join(', ')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Product Types */}
          <SectionTitle title="Product Types" description="제품 유형 상수" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Constant</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(PRODUCT_TYPES).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell sx={{ fontFamily: 'monospace' }}>PRODUCT_TYPES.{key}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>'{value}'</TableCell>
                    <TableCell>{products.filter((p) => p.type === value).length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Product Options */}
          <SectionTitle title="Product Options" description="제품 옵션 (상세 페이지용)" />
          {Object.entries(PRODUCT_OPTIONS).map(([optionKey, options]) => (
            <Box key={optionKey} sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, fontFamily: 'monospace' }}>
                PRODUCT_OPTIONS.{optionKey}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {options.map((opt) => (
                  <Chip
                    key={opt.value}
                    label={`${opt.label} (${opt.value})`}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Box>
          ))}

          <Divider sx={{ my: 4 }} />

          {/* Product Schema */}
          <SectionTitle title="Product Schema" description="제품 데이터 구조" />
          <Box
            component="pre"
            sx={{
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              mb: 4,
            }}
          >
{`{
  id: number,           // 고유 ID
  title: string,        // 제품명
  description: string,  // 제품 설명
  type: string,         // 'ceiling' | 'stand' | 'wall' | 'desk'
  lux: number,          // 조도 (lux)
  kelvin: number,       // 색온도 (K)
  images: [             // 이미지 배열
    string,             // [0] Day image
    string,             // [1] Night image
  ],
  video: string,        // 모션 비디오 URL (optional)
}`}
          </Box>

          {/* Product List */}
          <SectionTitle title="Product List" description="전체 제품 목록" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Lux</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Kelvin</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Video</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{product.id}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{product.type}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{product.lux}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{product.kelvin}</TableCell>
                    <TableCell>{product.video ? 'Yes' : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Usage */}
          <SectionTitle title="Usage" description="products.js 사용법" />
          <Box
            component="pre"
            sx={{
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
            }}
          >
{`import { products, PRODUCT_TYPES, PRODUCT_OPTIONS } from '../data/products';

// 전체 제품 목록
products.map((p) => (
  <ProductCard key={p.id} {...p} />
))

// 타입별 필터링
const ceilingProducts = products.filter(
  (p) => p.type === PRODUCT_TYPES.CEILING
);

// 제품 옵션 사용
<Select options={PRODUCT_OPTIONS.glassFinish} />
<Select options={PRODUCT_OPTIONS.hardware} />

// 개별 제품 데이터
const product = products.find((p) => p.id === 1);
<img src={product.images[0]} alt={product.title} />
<video src={product.video} autoPlay muted loop />`}
          </Box>
        </PageContainer>
      </>
    );
  },
};

/** Product Assets - 제품 이미지/비디오 에셋 */
export const ProductAssets = {
  render: () => {
    const productsWithVideo = products.filter((p) => p.video);

    return (
      <>
        <DocumentTitle
          title="Product Assets"
          status="Available"
          note="Product images and videos"
          brandName="Starter Kit"
          systemName="Design System"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Product Assets
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            제품 이미지 및 모션 비디오 에셋입니다.
          </Typography>

          {/* 에셋 요약 */}
          <SectionTitle title="Summary" description="에셋 현황" />
          <TableContainer sx={{ mb: 4 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, width: 200 }}>Total Products</TableCell>
                  <TableCell>{products.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Products with Video</TableCell>
                  <TableCell>{productsWithVideo.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Image Format</TableCell>
                  <TableCell sx={{ fontFamily: 'monospace' }}>.png (2 images per product: day/night)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Video Format</TableCell>
                  <TableCell sx={{ fontFamily: 'monospace' }}>.mp4 (motion timeline)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* 제품별 에셋 */}
          <SectionTitle title="Product Assets" description="제품별 낮/밤 이미지 및 모션 비디오" />
          {products.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </PageContainer>
      </>
    );
  },
};

/** Videos - 비디오 에셋 모아보기 */
export const Videos = {
  render: () => {
    const productsWithVideo = products.filter((p) => p.video);

    return (
      <>
        <DocumentTitle
          title="Product Videos"
          status="Available"
          note="Motion timeline assets"
          brandName="Starter Kit"
          systemName="Design System"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Product Videos
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            타임라인 스크러버로 시킹 가능한 모션 비디오입니다.
          </Typography>

          <SectionTitle
            title="Motion Videos"
            description={`${productsWithVideo.length}개 제품에 비디오 에셋 제공`}
          />
          <Grid container spacing={2}>
            {productsWithVideo.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <VideoPreview product={product} />
              </Grid>
            ))}
          </Grid>
        </PageContainer>
      </>
    );
  },
};
