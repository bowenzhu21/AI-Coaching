import React, { useState } from 'react';
import './CoachChat.css';

const CoachChat = ({ title, coachLabel, systemPrompt }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm your ${coachLabel}. Ask me anything about training, scheduling, recovery, or nutrition and I'll tailor it to your situation.`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemPrompt,
          messages: updatedMessages,
        }),
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      const reply = data.reply || 'Sorry, I could not generate a response.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'There was an issue reaching the AI service. Please try again later.',
        },
      ]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="coach-chat">
      <header className="coach-chat__header">
        <div>
          <h2>{title}</h2>
          <p>Your AI partner for quick, actionable guidance. Share your context and get a tailored plan.</p>
        </div>
      </header>

      <div className="coach-chat__messages">
        {messages.map((msg, index) => (
          <div key={`${msg.role}-${index}`} className={`coach-chat__bubble coach-chat__bubble--${msg.role}`}>
            <span>{msg.content}</span>
          </div>
        ))}
        {isLoading && (
          <div className="coach-chat__bubble coach-chat__bubble--assistant">
            <span>Thinking…</span>
          </div>
        )}
      </div>

      <form className="coach-chat__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask about programming, recovery, or fueling…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          aria-label="Ask the coach"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default CoachChat;
