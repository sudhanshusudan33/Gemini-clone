import { GoogleGenerativeAI } from "@google/generative-ai";

let API_KEY = "AIzaSyBxGWU0FAz9HEit2R_t1gDk8U08_9HF5N0";
const genAI = new GoogleGenerativeAI(API_KEY);
let btn = document.querySelector(".btn");
let msgContainer = document.getElementById("msg-container");

async function runCode() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  let userInput = document.querySelector(".user-input").value;
  console.log(userInput);
  const prompt = userInput;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);

    let botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-msg");
    botMessageDiv.innerText = `Bot:- ${text}`;
    msgContainer.appendChild(botMessageDiv);
  } catch (error) {
    console.error("Error generating content:", error);
    let errorMessageDiv = document.createElement("div");
    errorMessageDiv.classList.add("bot-msg");
    errorMessageDiv.innerText = "Bot:- An error occurred. Please try again.";
    msgContainer.appendChild(errorMessageDiv);
  }
}

btn.addEventListener("click", runCode);