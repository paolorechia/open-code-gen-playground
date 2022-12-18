const API_URL = "http://localhost:3000"
const delay = ms => new Promise(res => setTimeout(res, ms));

export async function sendPromptQuery(prompt) {
    await delay(2000)
    await fetch(API_URL)
    return "Test prompt result"
}
