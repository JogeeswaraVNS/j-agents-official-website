import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [sessionId] = useState(() => crypto.randomUUID());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen((prev) => {
      const willBeOpen = !prev;
      if (willBeOpen && messages.length === 0 && !isLoading) {
        handleSendMessage("Hi! What services do you offer?");
      }
      return willBeOpen;
    });
  };

  const handleSendMessage = async (customMessage = null) => {
    const isCustomEvent = typeof customMessage === 'string';
    const textToSend = isCustomEvent ? customMessage : inputValue;

    if (!textToSend.trim()) return;

    const userMessage = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMessage]);

    if (!isCustomEvent) {
      setInputValue('');
    }

    setIsLoading(true);

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'your_webhook_url_here';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: textToSend,
          session_id: sessionId,
          token: "3293235c90415f9f33c635b729118789a59381a21abe4777f73ab76542e9ef36"
        }),
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      const extractString = (obj) => {
        if (typeof obj === 'string') return obj;
        if (typeof obj !== 'object' || obj === null) return null;

        const keys = ['output', 'text', 'response', 'answer', 'message', 'content', 'reply'];
        for (const key of keys) {
          if (obj[key] && typeof obj[key] === 'string') return obj[key];
          if (obj[key] && typeof obj[key] === 'object') {
            if (obj[key].text && typeof obj[key].text === 'string') return obj[key].text;
            if (obj[key].content && typeof obj[key].content === 'string') return obj[key].content;
          }
        }
        return null;
      };

      let aiResponseText = 'No response provided.';
      let parsed = null;

      if (Array.isArray(data) && data.length > 0) {
        parsed = extractString(data[0]);
        if (!parsed) parsed = JSON.stringify(data[0], null, 2);
      } else {
        parsed = extractString(data);
        if (!parsed && data && typeof data === 'object') {
          parsed = JSON.stringify(data, null, 2);
        } else if (!parsed && data !== undefined) {
          parsed = String(data);
        }
      }

      if (parsed) aiResponseText = parsed;
      const aiMessage = { role: 'ai', content: aiResponseText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { role: 'ai', content: 'Sorry, I encountered an error connecting to the AI. Please try again later.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-widget-wrapper ${isOpen ? 'open' : ''}`} style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      fontFamily: 'var(--font-sans, inherit)'
    }}>
      {isOpen && (
        <div className="chat-widget-window" style={{
          width: '380px',
          height: '600px',
          maxHeight: 'calc(100vh - 120px)',
          backgroundColor: 'hsl(var(--background))',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-2xl, 0 12px 48px rgba(0,0,0,0.5))',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px',
          overflow: 'hidden',
          border: '1px solid hsl(var(--border))',
          animation: 'chatFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px 24px',
            backgroundColor: 'hsl(var(--card))',
            color: 'hsl(var(--card-foreground))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid hsl(var(--border))'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                boxShadow: '0 2px 8px hsl(var(--primary) / 0.4)'
              }}>
                🤖
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px', letterSpacing: '0.3px' }}>AI Assistant</div>
                <div style={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
                  Online
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'hsl(var(--foreground))',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'hsl(var(--muted))'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '24px 20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: 'hsl(var(--background))'
          }}>
            {messages.length === 0 && (
              <div style={{
                textAlign: 'center',
                color: 'hsl(var(--muted-foreground))',
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'hsl(var(--muted))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>
                  👋
                </div>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', color: 'hsl(var(--foreground))', fontSize: '18px', fontWeight: '600' }}>Hello!</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>How can I help you today? Send a message to start chatting.</p>
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '12px 18px',
                backgroundColor: msg.role === 'user' ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                color: msg.role === 'user' ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                borderRadius: '20px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',
                borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '20px',
                boxShadow: msg.role === 'ai' ? '0 2px 8px hsl(var(--foreground) / 0.04)' : '0 4px 12px hsl(var(--foreground) / 0.15)',
                border: msg.role === 'ai' ? '1px solid hsl(var(--border))' : 'none',
                lineHeight: '1.6',
                fontSize: '15px',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
                animation: msg.role === 'ai' ? 'slideInLeft 0.3s ease' : 'slideInRight 0.3s ease'
              }}>
                {msg.content}
              </div>
            ))}
            
            {isLoading && (
              <div style={{
                alignSelf: 'flex-start',
                backgroundColor: 'hsl(var(--muted))',
                padding: '16px 20px',
                borderRadius: '20px',
                borderBottomLeftRadius: '4px',
                border: '1px solid hsl(var(--border))',
                boxShadow: '0 2px 8px hsl(var(--foreground) / 0.04)',
                display: 'flex',
                gap: '6px',
                animation: 'slideInLeft 0.3s ease'
              }}>
                <div style={dotStyle(0)}></div>
                <div style={dotStyle(0.2)}></div>
                <div style={dotStyle(0.4)}></div>
              </div>
            )}
            <div ref={messagesEndRef} style={{ height: '1px' }} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px 20px',
            backgroundColor: 'hsl(var(--background))',
            borderTop: '1px solid hsl(var(--border))'
          }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              backgroundColor: isLoading ? 'hsl(var(--muted))' : 'hsl(var(--input))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '20px',
              transition: 'all 0.2s',
              padding: '6px'
            }}>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message AI..."
                disabled={isLoading}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 14px',
                  paddingRight: '48px',
                  background: 'transparent',
                  border: 'none',
                  resize: 'none',
                  minHeight: '24px',
                  maxHeight: '120px',
                  fontFamily: 'inherit',
                  fontSize: '15px',
                  lineHeight: '1.5',
                  outline: 'none',
                  color: isLoading ? 'hsl(var(--muted-foreground))' : 'hsl(var(--foreground))',
                }}
                rows={1}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                disabled={isLoading || !inputValue.trim()}
                style={{
                  position: 'absolute',
                  right: '8px',
                  bottom: '6px',
                  background: isLoading || !inputValue.trim() ? 'hsl(var(--muted))' : 'hsl(var(--primary))',
                  border: 'none',
                  cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',
                  color: isLoading || !inputValue.trim() ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  transition: 'background 0.2s, transform 0.1s',
                  transform: (!isLoading && inputValue.trim()) ? 'scale(1)' : 'scale(0.95)'
                }}
                onMouseOver={(e) => {
                  if (!isLoading && inputValue.trim()) {
                    e.currentTarget.style.opacity = '0.9';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isLoading && inputValue.trim()) {
                    e.currentTarget.style.opacity = '1';
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '-2px', marginTop: '2px' }}>
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div style={{ fontSize: '11px', color: 'hsl(var(--muted-foreground))', textAlign: 'center', marginTop: '10px' }}>
              Press Return to send, Shift + Return for new line <br/>
              By chatting, you agree to our <a href="/privacy" style={{ color: 'hsl(var(--primary))', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Privacy Policy</a>.
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            border: 'none',
            boxShadow: '0 8px 24px hsl(var(--primary) / 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s',
            animation: 'chatBubblePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 28px hsl(var(--primary) / 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px hsl(var(--primary) / 0.4)';
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>
      )}

      <style>
        {`
          @keyframes typingBounce {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
            40% { transform: translateY(-5px); opacity: 1; }
          }
          @keyframes chatFadeIn {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes chatBubblePop {
            0% { transform: scale(0); }
            80% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          /* Custom scrollbar for messages area */
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background-color: hsl(var(--border));
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background-color: hsl(var(--muted-foreground));
          }

          /* Responsive Styles for Mobile & Tablets */
          @media (max-width: 768px) {
            .chat-widget-wrapper.open {
              bottom: 0 !important;
              right: 0 !important;
              width: 100% !important;
              height: 100% !important;
            }
            .chat-widget-window {
              width: 100% !important;
              height: 100% !important;
              max-height: 100vh !important;
              border-radius: 0 !important;
              margin-bottom: 0 !important;
              border: none !important;
            }
          }
          @media (max-width: 480px) {
            .chat-widget-wrapper:not(.open) {
              bottom: 16px !important;
              right: 16px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// Helper for typing dots inline style
const dotStyle = (delay) => ({
  width: '8px',
  height: '8px',
  backgroundColor: 'hsl(var(--muted-foreground))',
  borderRadius: '50%',
  animation: 'typingBounce 1.4s infinite ease-in-out both',
  animationDelay: delay + 's'
});

export default ChatWidget;
