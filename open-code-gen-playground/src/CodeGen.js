const API_URL = "http://localhost:3000"
const delay = ms => new Promise(res => setTimeout(res, ms));


export async function sendPromptQuery(prompt) {
    const controller = new AbortController()
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), 5000)
    await delay(2000)
    fetch(API_URL, { signal })
    .then((response) => {
        console.log("Request sucessfull")
    }).catch((e) => {
        console.log("Error: ", e)
    })
    clearTimeout(timeoutId)
    return "Test prompt result"
}
