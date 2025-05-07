import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import SplashScreen from "./components/SplashScreen";

// Pages
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
import IASEligibilityCriteria from "./pages/IASEligibilityCriteria";
import PreviousYearsPapers from "./pages/PreviousYearsPapers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import IASExamStages from "./pages/IASExamStages";
import IASPrelims from "./pages/IASPrelims";
import IASMains from "./pages/IASMains";
import IASInterview from "./pages/IASInterview";
import UPSCExamPattern from "./pages/UPSCExamPattern";
import IASExamInformation from "./pages/IASExamInformation";
import UPSCCalendar2023 from "./pages/UPSCCalendar2023";
import BestOptionalSubject from "./pages/BestOptionalSubject";
import UPSCNotesPDF from "./pages/UPSCNotesPDF";
import DifferenceBetweenArticles from "./pages/DifferenceBetweenArticles";
import GeneralStudies from "./pages/GeneralStudies";
import GS1SyllabusStrategy from "./pages/GS1SyllabusStrategy";
import GS2SyllabusStrategy from "./pages/GS2SyllabusStrategy";
import GS3SyllabusStrategy from "./pages/GS3SyllabusStrategy";
import GS4SyllabusStrategy from "./pages/GS4SyllabusStrategy";
import ClassSubjects from "./pages/ClassSubjects";
import SubjectContent from "./pages/SubjectContent";
import StandardBookContent from "./pages/StandardBookContent";

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  const isDashboard =
    [
      "/dashboard",
      "/current-affairs",
      "/essay-practice",
      "/quiz",
      "/mock-test",
      "/topic-summaries",
    ].includes(location.pathname) ||
    location.pathname.startsWith("/ncert-library") ||
    location.pathname.startsWith("/standard-books");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

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
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ias-eligibility" element={<IASEligibilityCriteria />} />
            <Route path="/previous-papers" element={<PreviousYearsPapers />} />
            <Route path="/ias-exam-stages" element={<IASExamStages />} />
            <Route path="/ias-prelims" element={<IASPrelims />} />
            <Route path="/ias-mains" element={<IASMains />} />
            <Route path="/ias-interview" element={<IASInterview />} />
            <Route path="/upsc-exam-pattern" element={<UPSCExamPattern />} />
            <Route path="/ias-exam-information" element={<IASExamInformation />} />
            <Route path="/upsc-calendar-2023" element={<UPSCCalendar2023 />} />
            <Route path="/best-optional-subject" element={<BestOptionalSubject />} />
            <Route path="/upsc-notes-pdf" element={<UPSCNotesPDF />} />
            <Route path="/difference-between-articles" element={<DifferenceBetweenArticles />} />
            <Route path="/general-studies" element={<GeneralStudies />} />
            <Route path="/gs1-syllabus-strategy" element={<GS1SyllabusStrategy />} />
            <Route path="/gs2-syllabus-strategy" element={<GS2SyllabusStrategy />} />
            <Route path="/gs3-syllabus-strategy" element={<GS3SyllabusStrategy />} />
            <Route path="/gs4-syllabus-strategy" element={<GS4SyllabusStrategy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Protected Routes */}
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

            {/* NCERT Routes */}
            <Route
              path="/ncert-library"
              element={
                <PrivateRoute>
                  <NCERTLibrary />
                </PrivateRoute>
              }
            />
            <Route
              path="/ncert-library/class-:classNum"
              element={
                <PrivateRoute>
                  <ClassSubjects />
                </PrivateRoute>
              }
            />
            <Route
              path="/ncert-library/class-:classNum/:subject"
              element={
                <PrivateRoute>
                  <SubjectContent />
                </PrivateRoute>
              }
            />

            {/* Standard Books */}
            <Route
              path="/standard-books/:topic"
              element={
                <PrivateRoute>
                  <StandardBookContent />
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
