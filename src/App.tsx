import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import { ModalProvider } from "./components/ModalProvider";
import Layout from "./components/Layout";
import SharedPage from "./pages/SharedPage";
import { NotesProvider } from "./components/NotesContext";

function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-n250">
        <NotesProvider>
          <ModalProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/main" element={<Layout />}>
              <Route path="home" element={<TestPage />} />
              <Route path="shared" element={<SharedPage />} />
            </Route>
          </Routes>
          </ModalProvider>
        </NotesProvider>  
      </div>
    </Router>
  );
}

export default App;

