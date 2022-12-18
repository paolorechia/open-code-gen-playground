const API_URL = "http://localhost:8000"


export async function sendPromptQuery(prompt) {
    const promptUrl = API_URL + "/prompt"
    const response = await fetch(promptUrl, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "prompt_text": prompt,
            "max_response_length": 128
        })
    })
    const json_response = await response.json()
    console.log("Response: ", json_response)
    return json_response["model_response"]
}
