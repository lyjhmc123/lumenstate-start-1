import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/navigation/AppShell';
import { Page1, Page2, Page3 } from './pages';

/**
 * 메인 앱 레이아웃
 *
 * AppShell로 감싸진 기본 라우팅 구조.
 */
function AppLayout() {
  return (
    <AppShell brandName="Brand">
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
    </AppShell>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
