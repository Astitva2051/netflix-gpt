const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_KEY } = require("./constants");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default model;
