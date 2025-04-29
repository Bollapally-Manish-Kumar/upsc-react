import axios from "axios";

const GEMINI_API_KEY = "AIzaSyDVevfl4bYEq41es51A0d_rjlvEYIhgPKI";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const evaluateEssay = async (question, essay) => {
  const prompt = `
    You are an expert essay evaluator. Evaluate the following essay based on the given question.
    Provide a detailed evaluation covering:
    - Relevance to the question
    - Coherence and structure
    - Grammar and language use
    - Strength of arguments
    Assign a score out of 100 and provide 3-5 specific recommendations for improvement.

    Question: ${question}
    Essay: ${essay}

    Format the response as JSON:
    {
      "evaluation": {
        "relevance": "string",
        "coherence": "string",
        "grammar": "string",
        "arguments": "string",
        "score": number
      },
      "recommendations": ["string", "string", ...]
    }
  `;

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = response.data.candidates[0].content.parts[0].text;
    // Parse JSON response (Gemini may return it as a code block)
    const cleanedResult = result.replace(/```json\n|\n```/g, "");
    return JSON.parse(cleanedResult);
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to evaluate essay");
  }
};