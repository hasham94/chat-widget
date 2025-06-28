const API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct";

export async function getLLMResponse(message: string, apiKey: string) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputs: message,
            parameters: { max_new_tokens: 50 },
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0]?.generated_text || "No response";
}
