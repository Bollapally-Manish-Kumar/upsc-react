import axios from "axios";

const GNEWS_API_KEY = "d5c195d48567e439ef5e72a6f0b6a3e8";
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
      const title = article.title.split(" - ")[0]; // Remove source
      return `${difficultyPrompts[difficulty]} the impact of ${title.toLowerCase()}.`;
    });
  } catch (error) {
    console.error("GNews API error:", error);
    return [];
  }
};