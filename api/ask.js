// Vercel serverless function to proxy OpenAI API requests securely
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured.' });
  }

  const { systemPrompt, messages } = req.body;

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(({ role, content }) => ({ role, content })),
        ],
      }),
    });

    if (!openaiRes.ok) {
      const error = await openaiRes.text();
      return res.status(500).json({ error });
    }

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || '';
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unknown error' });
  }
}
