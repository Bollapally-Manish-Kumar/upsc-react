import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/pages/mock-test.css";

const MockTest = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [testStarted, setTestStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const questionsPerPage = 5;
  const scheduledTime = new Date("2025-05-05T09:39:00+05:30"); // 4:10 PM IST on May 5, 2025
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  // Define possible subjects
  const possibleSubjects = ["History", "Geography", "Polity", "Economy", "Science & Technology"];

  // Function to shuffle array (for random subject selection)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Select random subjects for the mock test
  useEffect(() => {
    const shuffledSubjects = shuffleArray([...possibleSubjects]);
    setSubjects(shuffledSubjects.slice(0, 2)); // Select 2 random subjects
  }, []);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check if the scheduled time has been reached
  useEffect(() => {
    if (currentTime >= scheduledTime && !testStarted) {
      setTestStarted(true);
      fetchQuestions(subjects);
    }
  }, [currentTime, testStarted, subjects]);

  const fetchQuestions = async (subjects) => {
    setLoading(true);
    const fetchedQuestions = [];

    try {
      // Generate 50 questions in batches of 10
      for (let batch = 0; batch < 5; batch++) {
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Generate 10 unique UPSC-style multiple-choice questions with 4 options each and identify the correct answer. The questions should be relevant to the subjects "${subjects.join(" and ")}", suitable for UPSC exam preparation. Ensure the questions are distinct from each other.

Format the response as a JSON array of objects like this:
[
  {
    "question": "Question text here",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correct_answer": "Correct option here"
  },
  ...
]`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const geminiData = await geminiResponse.json();
        const generatedText = geminiData.candidates[0].content.parts[0].text;
        const cleanedText = generatedText.replace(/```json\n|\n```/g, "").trim();
        const mcqs = JSON.parse(cleanedText);

        fetchedQuestions.push(...mcqs);
      }

      setQuestions(fetchedQuestions.slice(0, 50)); // Ensure exactly 50 questions
    } catch (error) {
      console.error("Error generating mock test:", error);
      setQuestions([{ error: "Failed to generate mock test. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log("Submit button clicked! Calculating score...");
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) {
        calculatedScore += 1;
      }
    });
    console.log("Calculated Score:", calculatedScore);
    setScore(calculatedScore);
  };

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const timeDifference = scheduledTime - currentTime;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div className="mock-test-container">
      <div className="mock-test-content">
        <h2 className="page-title">Mock Test</h2>
        <p className="cyber-text">
          Simulate the UPSC exam experience with a full-length mock test. 
          Enroll and prepare: <span className="neon-accent">📋</span>
        </p>
        <div className="mock-test-grid">
          {!testStarted ? (
            <Card title="Upcoming Mock Test" cyberpunk glowColor="yellow">
              <div className="cyber-data">
                <p>📅 <span className="data-highlight">5 May 2025, 4:10 PM IST</span></p>
                <p>📖 <span className="data-highlight">Topics: {subjects.join(" & ")}</span></p>
                <p>⏳ <span className="data-highlight">Duration: 2 Hours</span></p>
                <p>
                  ⏰{" "}
                  <span className="data-highlight">
                    Starts in: {daysLeft}d {hoursLeft}h {minutesLeft}m {secondsLeft}s
                  </span>
                </p>
              </div>
            </Card>
          ) : loading ? (
            <div className="loading-spinner">
              <p className="cyber-text">Generating mock test...</p>
              <div className="spinner"></div>
            </div>
          ) : questions.length > 0 && !questions[0].error ? (
            <Card title={`Mock Test: ${subjects.join(" & ")}`} cyberpunk glowColor="purple">
              {score === null ? (
                <>
                  <p className="cyber-text">
                    Question {startIndex + 1} - {Math.min(startIndex + questionsPerPage, questions.length)} of {questions.length}
                  </p>
                  <ul className="cyber-list">
                    {currentQuestions.map((q, index) => (
                      <li key={startIndex + index}>
                        <p className="cyber-text">{q.question}</p>
                        {q.options.map((option, optIndex) => (
                          <label key={optIndex}>
                            <input
                              type="radio"
                              name={`question-${startIndex + index}`}
                              value={option}
                              checked={answers[startIndex + index] === option}
                              onChange={() => handleAnswerChange(startIndex + index, option)}
                            />
                            {option}
                          </label>
                        ))}
                      </li>
                    ))}
                  </ul>
                  <div className="pagination">
                    <button
                      className="cyber-button"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="cyber-text">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      className="cyber-button"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                  {currentPage === totalPages && (
                    <button
                      className="cyber-button"
                      onClick={handleSubmit}
                      disabled={Object.keys(answers).length === 0} // Allow submission even if not all questions are answered
                    >
                      Submit Test
                    </button>
                  )}
                </>
              ) : (
                <div className="results-container">
                  <p className="cyber-text result">
                    Your Score: {score} / {questions.length}
                  </p>
                  <ul className="results-list">
                    {questions.map((q, index) => (
                      <li key={index} className={answers[index] === q.correct_answer ? "correct" : "incorrect"}>
                        <p className="cyber-text">
                          <strong>Question {index + 1}:</strong> {q.question}
                        </p>
                        <p className="cyber-text">
                          <strong>Your Answer:</strong> {answers[index] || "Not answered"}
                        </p>
                        <p className="cyber-text">
                          <strong>Correct Answer:</strong> {q.correct_answer}
                        </p>
                        <p className="cyber-text">
                          <strong>Result:</strong>{" "}
                          {answers[index] === q.correct_answer ? "Correct ✅" : "Incorrect ❌"}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ) : (
            <p className="cyber-text">{questions[0]?.error || "No questions available."}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;