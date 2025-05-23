// src/api/gnewsApi.js
import axios from "axios";

const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
const GNEWS_API_URL = "https://gnews.io/api/v4/search";

const categoryKeywords = {
  history: ["history", "historical", "ancient", "medieval"],
  politics: ["politics", "government", "election", "policy"],
  environment: ["environment", "climate", "sustainability", "pollution"],
  technology: ["technology", "innovation", "artificial intelligence", "tech"],
  ethics: ["ethics", "morality", "ethical", "bioethics"],
  economy: ["economy", "finance", "trade", "market"],
  society: ["society", "culture", "social", "community"],
};

const difficultyPrompts = {
  easy: "Describe",
  medium: "Discuss",
  hard: "Evaluate",
};

export const fetchQuestions = async (category, difficulty) => {
  try {
    const response = await axios.get(GNEWS_API_URL, {
      params: {
        q: categoryKeywords[category].join(" OR "),
        lang: "en",
        max: 5,
        apikey: GNEWS_API_KEY,
      },
    });

    const articles = response.data.articles || [];
    return articles.map((article) => {
      const title = article.title.split(" - ")[0];
      return `${difficultyPrompts[difficulty]} the impact of ${title.toLowerCase()}.`;
    });
  } catch (error) {
    console.error("GNews API error:", error.response?.data || error.message);
    return [];
  }
};
