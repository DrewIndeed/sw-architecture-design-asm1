import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, AdminHome, VisitorHome } from "./pages";

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider theme={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="admin/home" element={<AdminHome />} />
            <Route path="visitor/home" element={<VisitorHome />} />
            <Route
              path="*"
              element={<p className="text-white">No path to be found</p>}
            />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
