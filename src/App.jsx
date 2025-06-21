import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import SimpleTest from "./pages/SimpleTest";
import ModernHome from "./pages/ModernHome";
import Home from "./pages/Home";
import ConnectUs from "./pages/ConnectUs";
import About from "./pages/About";
import Team from "./pages/Team";
import WocRegister from "./pages/WocRegister";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import MembershipApplication from "./pages/MembershipApplication";
import UnauthorizedAccess from "./components/UnauthorizedAccess";

const App = () => {
  const { theme } = useTheme();

  // Apply theme class to entire app
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<ModernHome />} />
        <Route path="/test" element={<SimpleTest />} />
        <Route path="/original" element={<Home />} />
        <Route path="/connect-us" element={<ConnectUs />} />
        <Route path="/contact" element={<ConnectUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/woc-register" element={<WocRegister />} />
        <Route path="/join" element={<SignIn />} />
        <Route path="/apply" element={<MembershipApplication />} />
        <Route path="/membership" element={<MembershipApplication />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<UnauthorizedAccess />} />
      </Routes>
    </div>
  );
};

export default App;
