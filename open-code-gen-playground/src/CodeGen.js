const API_URL = "http://localhost:3000"

export async function sendPromptQuery(prompt) {
    await fetch(API_URL)
    return "Test prompt result"
}