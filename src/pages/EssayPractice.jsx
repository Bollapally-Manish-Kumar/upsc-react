import React, { useState, useEffect } from "react";
import "../styles/pages/essay-practice.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { evaluateEssay } from "../utils/geminiApi";
import { fetchQuestions } from "../utils/gnewsApi";

const EssayPractice = () => {
  const [category, setCategory] = useState("politics");
  const [difficulty, setDifficulty] = useState("easy");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [essay, setEssay] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Categories for dropdown
  const categories = [
    "History",
    "Politics",
    "Environment",
    "Technology",
    "Ethics",
    "Economy",
    "Society",
  ];

  // Static fallback questions
  const fallbackQuestions = {
    history: {
      easy: ["Describe a significant event in your country's history."],
      medium: ["Analyze the impact of colonialism on modern society."],
      hard: ["Evaluate the role of revolutions in shaping global history."],
    },
    politics: {
      easy: ["Explain the importance of voting in a democracy."],
      medium: ["Discuss the role of political parties in governance."],
      hard: ["Analyze the impact of populism on global politics."],
    },
    environment: {
      easy: ["Why is recycling important for the environment?"],
      medium: ["Discuss the effects of deforestation on climate change."],
      hard: ["Evaluate global efforts to combat climate change."],
    },
    technology: {
      easy: ["Describe the benefits of smartphones in daily life."],
      medium: ["Analyze the impact of AI on job markets."],
      hard: ["Evaluate the ethical implications of autonomous vehicles."],
    },
    ethics: {
      easy: ["Why is honesty important in public service?"],
      medium: ["Discuss the ethics of animal testing in research."],
      hard: ["Analyze the moral dilemmas of genetic engineering."],
    },
    economy: {
      easy: ["Explain the concept of supply and demand."],
      medium: ["Discuss the impact of globalization on local economies."],
      hard: ["Evaluate the effects of universal basic income."],
    },
    society: {
      easy: ["Describe the role of community in personal growth."],
      medium: ["Analyze the impact of social media on mental health."],
      hard: ["Evaluate the effects of urbanization on social cohesion."],
    },
  };

  // Fetch questions when category or difficulty changes
  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        const fetchedQuestions = await fetchQuestions(category, difficulty);
        setQuestions(fetchedQuestions.length > 0 ? fetchedQuestions : fallbackQuestions[category][difficulty]);
      } catch (err) {
        setError("Failed to fetch questions. Using fallback questions.");
        setQuestions(fallbackQuestions[category][difficulty]);
      }
      setLoading(false);
    };
    loadQuestions();
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
        <h2 className="page-title">Essay Practice</h2>
        <p className="cyber-text">
          Sharpen your essay writing skills with curated UPSC topics. Practice,
          submit, and get feedback: <span className="neon-accent">✍️</span>
        </p>

        {/* Select Topic Container */}
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
              disabled={loading}
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
        </Card>

        {/* Write Essay Container */}
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

        {/* Evaluation Container */}
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