import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, AdminHome, VisitorHome } from "./pages";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="admin/home" element={<AdminHome />} />
          <Route path="visitor/home" element={<VisitorHome />} />
          <Route path="*" element={<p>No path to be found</p>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
