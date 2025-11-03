import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import { ModalProvider } from "./components/ModalProvider";
import Layout from "./components/Layout";
import SharedPage from "./pages/SharedPage";

function App() {
  const exampleNotes = [
  { owner: "Alice", title: "Note 1", date: "01 Oct", description: "Alice's first note" },
  { owner: "Bob", title: "Note 2", date: "02 Oct", description: "Bob's note" },
  { owner: "Bob2", title: "Note 2", date: "02 Oct", description: "Bob's note" },
  { owner: "Bob3", title: "Note 2", date: "02 Oct", description: "Bob's note" },
  { owner: "Alice", title: "Note 3", date: "03 Oct", description: "Alice's second note" },
];
  return (
    <Router>
      <div className="min-h-screen bg-n250">
          <ModalProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/main" element={<Layout />}>
            <Route path="home" element={<TestPage />} />
            <Route path="shared" element={<SharedPage notes={exampleNotes} />} />
          </Route>
        </Routes>
          </ModalProvider>
      </div>
    </Router>
  );
}

export default App;

