export const getChatResponse = async (req, res) => {
  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API Key missing in .env" });
    }

// Use gemini-2.5-flash with v1 API
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("Google reported an error:", data.error);
      return res.status(data.error.code || 500).json({ error: data.error.message });
    }

    // Success path
    const aiText = data.candidates[0].content.parts[0].text;
    res.status(200).json({ message: aiText });

  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
};