const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'chat-widget/ChatWidget.jsx');
let code = fs.readFileSync(filePath, 'utf8');

const replacements = [
  [`fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'`, `fontFamily: 'var(--font-sans, inherit)'`],
  [`backgroundColor: '#ffffff',\\n          borderRadius: '24px',\\n          boxShadow: '0 12px 48px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',`, `backgroundColor: 'hsl(var(--background))',\n          borderRadius: '24px',\n          boxShadow: 'var(--shadow-2xl, 0 12px 48px rgba(0,0,0,0.5))',`],
  [`border: '1px solid rgba(0,0,0,0.08)'`, `border: '1px solid hsl(var(--border))'`],
  [`backgroundColor: '#0f172a', /* Dark slate header */\\n            color: '#f8fafc',\\n            display: 'flex',\\n            alignItems: 'center',\\n            justifyContent: 'space-between',\\n            borderBottom: '1px solid rgba(255,255,255,0.1)'`, `backgroundColor: 'hsl(var(--card))',\n            color: 'hsl(var(--card-foreground))',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'space-between',\n            borderBottom: '1px solid hsl(var(--border))'`],
  [`backgroundColor: '#3b82f6', /* Blue avatar bg */\\n                borderRadius: '50%',\\n                display: 'flex',\\n                alignItems: 'center',\\n                justifyContent: 'center',\\n                fontSize: '18px',\\n                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)'`, `backgroundColor: 'hsl(var(--primary))',\n                color: 'hsl(var(--primary-foreground))',\n                borderRadius: '50%',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                fontSize: '18px',\n                boxShadow: '0 2px 8px hsl(var(--primary) / 0.4)'`],
  [`<div style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>`, `<div style={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>`],
  [`background: 'rgba(255,255,255,0.1)',\\n                border: 'none',\\n                color: '#ffffff',`, `background: 'transparent',\n                border: 'none',\n                color: 'hsl(var(--foreground))',`],
  [`onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}`, `onMouseOver={(e) => e.currentTarget.style.background = 'hsl(var(--muted))'}`],
  [`onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}`, `onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}`],
  [`gap: '16px',\\n            backgroundColor: '#fafafa'`, `gap: '16px',\n            backgroundColor: 'hsl(var(--background))'`],
  [`textAlign: 'center',\\n                color: '#64748b',`, `textAlign: 'center',\n                color: 'hsl(var(--muted-foreground))',`],
  [`backgroundColor: '#e2e8f0',\\n                  borderRadius: '50%',`, `backgroundColor: 'hsl(var(--muted))',\n                  borderRadius: '50%',`],
  [`<h3 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '18px', fontWeight: '600' }}>`, `<h3 style={{ margin: '0 0 4px 0', color: 'hsl(var(--foreground))', fontSize: '18px', fontWeight: '600' }}>`],
  [`backgroundColor: msg.role === 'user' ? '#0f172a' : '#ffffff',\\n                color: msg.role === 'user' ? '#ffffff' : '#334155',\\n                borderRadius: '20px',\\n                borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',\\n                borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '20px',\\n                boxShadow: msg.role === 'ai' ? '0 2px 8px rgba(0,0,0,0.04)' : '0 4px 12px rgba(15, 23, 42, 0.15)',\\n                border: msg.role === 'ai' ? '1px solid #e2e8f0' : 'none',`, `backgroundColor: msg.role === 'user' ? 'hsl(var(--primary))' : 'hsl(var(--muted))',\n                color: msg.role === 'user' ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',\n                borderRadius: '20px',\n                borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',\n                borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '20px',\n                boxShadow: msg.role === 'ai' ? '0 2px 8px hsl(var(--foreground) / 0.04)' : '0 4px 12px hsl(var(--foreground) / 0.15)',\n                border: msg.role === 'ai' ? '1px solid hsl(var(--border))' : 'none',`],
  [`alignSelf: 'flex-start',\\n                backgroundColor: '#ffffff',\\n                padding: '16px 20px',\\n                borderRadius: '20px',\\n                borderBottomLeftRadius: '4px',\\n                border: '1px solid #e2e8f0',\\n                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',`, `alignSelf: 'flex-start',\n                backgroundColor: 'hsl(var(--muted))',\n                padding: '16px 20px',\n                borderRadius: '20px',\n                borderBottomLeftRadius: '4px',\n                border: '1px solid hsl(var(--border))',\n                boxShadow: '0 2px 8px hsl(var(--foreground) / 0.04)',`],
  [`padding: '16px 20px',\\n            backgroundColor: '#ffffff',\\n            borderTop: '1px solid #f1f5f9'`, `padding: '16px 20px',\n            backgroundColor: 'hsl(var(--background))',\n            borderTop: '1px solid hsl(var(--border))'`],
  [`backgroundColor: isLoading ? '#f8fafc' : '#ffffff',\\n              border: isLoading ? '1px solid #e2e8f0' : '1px solid #cbd5e1',`, `backgroundColor: isLoading ? 'hsl(var(--muted))' : 'hsl(var(--input))',\n              border: '1px solid hsl(var(--border))',`],
  [`color: isLoading ? '#94a3b8' : '#0f172a',`, `color: isLoading ? 'hsl(var(--muted-foreground))' : 'hsl(var(--foreground))',`],
  [`background: isLoading || !inputValue.trim() ? '#e2e8f0' : '#3b82f6',\\n                  border: 'none',\\n                  cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',\\n                  color: '#ffffff',`, `background: isLoading || !inputValue.trim() ? 'hsl(var(--muted))' : 'hsl(var(--primary))',\n                  border: 'none',\n                  cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',\n                  color: isLoading || !inputValue.trim() ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))',`],
  [`e.currentTarget.style.background = '#2563eb'`, `e.currentTarget.style.opacity = '0.9'`],
  [`e.currentTarget.style.background = '#3b82f6'`, `e.currentTarget.style.opacity = '1'`],
  [`<div style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center', marginTop: '10px' }}>`, `<div style={{ fontSize: '11px', color: 'hsl(var(--muted-foreground))', textAlign: 'center', marginTop: '10px' }}>`],
  [`color: '#3b82f6'`, `color: 'hsl(var(--primary))'`],
  [`width: '64px',\\n            height: '64px',\\n            borderRadius: '50%',\\n            backgroundColor: '#0f172a', /* Dark primary to match header */\\n            color: '#ffffff',\\n            border: 'none',\\n            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.4)',`, `width: '64px',\n            height: '64px',\n            borderRadius: '50%',\n            backgroundColor: 'hsl(var(--primary))',\n            color: 'hsl(var(--primary-foreground))',\n            border: 'none',\n            boxShadow: '0 8px 24px hsl(var(--primary) / 0.4)',`],
  [`e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.5)'`, `e.currentTarget.style.boxShadow = '0 12px 28px hsl(var(--primary) / 0.5)'`],
  [`e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.4)'`, `e.currentTarget.style.boxShadow = '0 8px 24px hsl(var(--primary) / 0.4)'`],
  [`background-color: rgba(0,0,0,0.1);`, `background-color: hsl(var(--border));`],
  [`background-color: rgba(0,0,0,0.2);`, `background-color: hsl(var(--muted-foreground));`],
  [`backgroundColor: '#94a3b8'`, `backgroundColor: 'hsl(var(--muted-foreground))'`]
];

for (const [searchRaw, replacement] of replacements) {
  const search = searchRaw.replace(/\\n/g, '\n');
  code = code.replace(search, replacement);
}

fs.writeFileSync(filePath, code);
console.log('Done mapping inline styles to CSS variables.');
