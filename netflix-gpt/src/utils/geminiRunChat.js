import { GoogleGenerativeAI } from "@google/generative-ai";
import { Gemini_API_Key } from "./constants";

const apiKey = Gemini_API_Key; 

const genAI = new GoogleGenerativeAI(apiKey);

async function geminiRunChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.8,
        topP: 0.9,
        maxOutputTokens: 200,
      },
      history: [],
    });

    const result = await chat.sendMessage(prompt);
    const text = result.response.text();
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong!";
  }
}

export default geminiRunChat;
