import React, { useState, useEffect } from "react";
import "../styles/pages/essay-practice.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { evaluateEssay } from "../utils/geminiApi";

const EssayPractice = () => {
  const [category, setCategory] = useState("politics");
  const [difficulty, setDifficulty] = useState("easy");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [essay, setEssay] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [usedQuestions, setUsedQuestions] = useState(new Set());

  const categories = [
    "History",
    "Politics",
    "Environment",
    "Technology",
    "Ethics",
    "Economy",
    "Society",
  ];

  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const generateQuestionsWithGemini = async (category, difficulty) => {
    setLoading(true);
    setError("");
    const newQuestions = [];

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
                    text: `Generate 5 unique UPSC-style essay questions for the category "${category}" with a "${difficulty}" difficulty level. The questions should be suitable for UPSC exam preparation and distinct from these previously generated questions: ${Array.from(usedQuestions).join(", ")}.

Format the response as a JSON array of strings like this:
[
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
  "Question 5"
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
      const generatedQuestions = JSON.parse(cleanedText);

      newQuestions.push(...generatedQuestions);
      generatedQuestions.forEach((q) => usedQuestions.add(q));
      setUsedQuestions(new Set(usedQuestions)); // Update the set of used questions

      setQuestions(newQuestions);
      if (newQuestions.length > 0 && !selectedQuestion) {
        setSelectedQuestion(newQuestions[0]);
      }
    } catch (err) {
      console.error("Error generating questions with Gemini:", err);
      setError("Failed to generate questions. Please try again.");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category && difficulty) {
      generateQuestionsWithGemini(category, difficulty);
    }
  }, [category, difficulty]);

  const handleSubmit = async () => {
    if (!selectedQuestion || !essay.trim()) {
      setError("Please select a question and write an essay.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const result = await evaluateEssay(selectedQuestion, essay);
      setEvaluation(result);
    } catch (err) {
      setError("Failed to evaluate essay. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Essay</span> <span>Practice</span>
        </h2>
        <p className="cyber-text">
          Sharpen your essay writing skills with curated UPSC topics. Practice,
          submit, and get feedback: <span className="neon-accent">✍️</span>
        </p>

        <Card title="Select Topic" cyberpunk glowColor="yellow">
          <div className="selector-container">
            <label className="cyber-text">Category:</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value.toLowerCase());
                setSelectedQuestion("");
              }}
              className="cyber-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="selector-container">
            <label className="cyber-text">Difficulty:</label>
            <select
              value={difficulty}
              onChange={(e) => {
                setDifficulty(e.target.value);
                setSelectedQuestion("");
              }}
              className="cyber-select"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="selector-container">
            <label className="cyber-text">Question:</label>
            <select
              value={selectedQuestion}
              onChange={(e) => setSelectedQuestion(e.target.value)}
              className="cyber-select"
              disabled={loading || questions.length === 0}
            >
              <option value="">Select a question</option>
              {questions.map((q, index) => (
                <option key={index} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          {loading && <p className="cyber-text">Loading questions...</p>}
          {error && <p className="cyber-text error">{error}</p>}
        </Card>

        <Card title="Write Essay" cyberpunk glowColor="purple">
          <textarea
            className="cyber-textarea"
            placeholder="Write your essay here..."
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Evaluating..." : "Submit Essay"}
          </Button>
        </Card>

        <Card title="Evaluation" cyberpunk glowColor="green">
          {error && <p className="cyber-text error">{error}</p>}
          {evaluation ? (
            <div className="evaluation-container">
              <h3 className="cyber-text">Evaluation Results</h3>
              <div className="cyber-text">
                <p><strong>Relevance:</strong> {evaluation.evaluation.relevance}</p>
                <p><strong>Coherence:</strong> {evaluation.evaluation.coherence}</p>
                <p><strong>Grammar:</strong> {evaluation.evaluation.grammar}</p>
                <p><strong>Arguments:</strong> {evaluation.evaluation.arguments}</p>
                <p><strong>Score:</strong> {evaluation.evaluation.score}/100</p>
              </div>
              <h3 className="cyber-text">Recommendations</h3>
              <ul className="cyber-list">
                {evaluation.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="cyber-text">Submit an essay to see evaluation.</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default EssayPractice;