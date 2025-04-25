import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Removed BrowserRouter here
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CurrentAffairs from "./pages/CurrentAffairs";
import EssayPractice from "./pages/EssayPractice";
import TopicSummaries from "./pages/TopicSummaries";
import NCERTLibrary from "./pages/NCERTLibrary";

const AppContent = () => {
  const location = useLocation();
  const isDashboard = [
    "/dashboard",
    "/current-affairs",
    "/essay-practice",
    "/topic-summaries",
    "/ncert-library"
  ].includes(location.pathname);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      <Header isDashboard={isDashboard} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/current-affairs"
          element={
            <PrivateRoute>
              <CurrentAffairs />
            </PrivateRoute>
          }
        />
        <Route
          path="/essay-practice"
          element={
            <PrivateRoute>
              <EssayPractice />
            </PrivateRoute>
          }
        />
        <Route
          path="/topic-summaries"
          element={
            <PrivateRoute>
              <TopicSummaries />
            </PrivateRoute>
          }
        />
        <Route
          path="/ncert-library"
          element={
            <PrivateRoute>
              <NCERTLibrary />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return <AppContent />; // No more <Router> here
};

export default App;
