export const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  .contact-input {
    width: 100%;
    padding: 14px 18px;
    background: var(--input-bg);
    border: 2px solid var(--input-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
    resize: none;
  }
  .contact-input::placeholder { color: var(--input-placeholder); }
  .contact-input:focus {
    border-color: #0891b2;
    background: var(--input-bg-focus);
    box-shadow: 0 0 0 3px rgba(8,145,178,0.15);
  }

  .info-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 18px;
    border-radius: 14px;
    background: var(--card-bg);
    border: 1.5px solid var(--card-border);
    transition: border-color 0.3s, transform 0.3s, background 0.3s, box-shadow 0.3s;
    text-decoration: none;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .info-card:hover {
    transform: translateX(4px);
    background: var(--card-bg-hover);
    box-shadow: var(--card-shadow);
  }

  .send-btn {
    position: relative;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #0891b2, #22d3ee);
    color: white;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.04em;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    box-shadow: 0 4px 24px rgba(34,211,238,0.25);
  }
  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(34,211,238,0.4);
  }
  .send-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .send-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15));
    opacity: 0;
    transition: opacity 0.3s;
  }
  .send-btn:hover::after { opacity: 1; }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) both; }

  @keyframes pulse-ring {
    0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
    70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(52,211,153,0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52,211,153,0); }
  }
  .pulse { animation: pulse-ring 2s infinite; }
`;