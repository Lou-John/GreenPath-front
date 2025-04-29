import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "../features/auth";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;