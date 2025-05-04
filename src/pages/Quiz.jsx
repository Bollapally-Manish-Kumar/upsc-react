import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/pages/quiz.css";

const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState(new Set());

  const subjects = ["History", "Geography", "Polity"];
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const generateQuestion = async () => {
    if (!selectedSubject) return;

    setLoading(true);
    setQuestion(null);
    setSelectedAnswer("");
    setResult(null);

    try {
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
                    text: `Generate a unique UPSC-style multiple-choice question with 4 options and identify the correct answer. The question should be relevant to the subject "${selectedSubject}" and suitable for UPSC exam preparation. Ensure the question is distinct from previously generated questions: ${Array.from(usedQuestions).join(", ")}.

Format the response as a JSON object like this:
{
  "question": "Question text here",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correct_answer": "Correct option here"
}`,
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
      const mcq = JSON.parse(cleanedText);

      setQuestion(mcq);
      setUsedQuestions((prev) => new Set(prev).add(mcq.question));
      setQuestionCount((prev) => prev + 1);
    } catch (error) {
      console.error("Error generating quiz question:", error);
      setQuestion({ error: "Failed to generate quiz question. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, [selectedSubject]);

  const handleSubmit = (correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setResult("Correct! 🎉");
      setScore((prev) => prev + 1);
    } else {
      setResult(`Incorrect. The correct answer is: ${correctAnswer}`);
    }
  };

  const handleNextQuestion = () => {
    generateQuestion();
  };

  const handleResetQuiz = () => {
    setSelectedSubject("");
    setQuestion(null);
    setSelectedAnswer("");
    setResult(null);
    setScore(0);
    setQuestionCount(0);
    setUsedQuestions(new Set());
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="page-title">Quiz</h2>
        <p className="cyber-text">
          Test your knowledge with interactive UPSC-style questions. 
          Select a subject to start: <span className="neon-accent">❓</span>
        </p>

        {/* Score Display */}
        <div className="score-display">
          <p className="cyber-text">
            Score: {score} / {questionCount}
          </p>
          {questionCount > 0 && (
            <button className="cyber-button reset-button" onClick={handleResetQuiz}>
              Reset Quiz
            </button>
          )}
        </div>

        {/* Subject Selection Dropdown */}
        <div className="subject-selector">
          <label className="cyber-text">Select Subject: </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="cyber-select"
            disabled={loading}
          >
            <option value="">-- Choose a Subject --</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Display Question */}
        <div className="quiz-grid">
          {loading ? (
            <div className="loading-spinner">
              <p className="cyber-text">Generating question...</p>
              <div className="spinner"></div>
            </div>
          ) : question ? (
            question.error ? (
              <p className="cyber-text">{question.error}</p>
            ) : (
              <Card title={`Question (${selectedSubject})`} cyberpunk glowColor="purple">
                <p className="cyber-text">{question.question}</p>
                <ul className="cyber-list">
                  {question.options.map((option, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name="quiz-answer"
                          value={option}
                          checked={selectedAnswer === option}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                          disabled={result}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="button-group">
                  <button
                    className="cyber-button"
                    onClick={() => handleSubmit(question.correct_answer)}
                    disabled={!selectedAnswer || result}
                  >
                    Submit Answer
                  </button>
                  {result && (
                    <button className="cyber-button" onClick={handleNextQuestion}>
                      Next Question
                    </button>
                  )}
                </div>
                {result && <p className="cyber-text result">{result}</p>}
              </Card>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Quiz;