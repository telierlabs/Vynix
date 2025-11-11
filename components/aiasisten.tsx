import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
}

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputText('');

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: newMessage.id + 1,
        text: `You said: ${newMessage.text}`,
        sender: 'assistant',
      };
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    }, 1000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>AI Assistant Chat</h2>
      <div
        style={{
          height: 400,
          overflowY: 'auto',
          border: '1px solid #ddd',
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
        }}
      >
        {messages.map(message => (
          <div
            key={message.id}
            style={{
              textAlign: message.sender === 'user' ? 'right' : 'left',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: 15,
                backgroundColor: message.sender === 'user' ? '#007bff' : '#e4e6eb',
                color: message.sender === 'user' ? '#fff' : '#000',
                maxWidth: '80%',
                wordWrap: 'break-word',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{
          width: 'calc(100% - 70px)',
          padding: 10,
          borderRadius: 20,
          border: '1px solid #ccc',
          marginRight: 10,
          outline: 'none',
        }}
      />
      <button
        onClick={handleSendMessage}
        style={{
          padding: '10px 20px',
          borderRadius: 20,
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
};

export default AiAssistant;
