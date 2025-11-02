// js/components/ai-assistant.js
export function openAIAssistant() {
    document.getElementById('ai-modal').style.display = 'block';
}

export function closeAIAssistant() {
    document.getElementById('ai-modal').style.display = 'none';
}

export function sendAIQuestion() {
    // ... logic simulasi chat AI ...
    alert("Simulasi kirim pertanyaan AI");
}

export function handleAIKeyPress(event) {
    if (event.key === 'Enter') {
        sendAIQuestion();
    }
}
