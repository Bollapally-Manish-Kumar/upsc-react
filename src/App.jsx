import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CurrentAffairs from "./pages/CurrentAffairs";
import EssayPractice from "./pages/EssayPractice";
import TopicSummaries from "./pages/TopicSummaries";
import NCERTLibrary from "./pages/NCERTLibrary";
import Quiz from "./pages/Quiz";
import MockTest from "./pages/MockTest";

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const isDashboard = [
    "/dashboard",
    "/current-affairs",
    "/essay-practice",
    "/topic-summaries",
    "/ncert-library",
    "/quiz",
    "/mock-test"
  ].includes(location.pathname);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
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
            <Route
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/mock-test"
              element={
                <PrivateRoute>
                  <MockTest />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;