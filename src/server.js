import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Initialize the Google Generative AI client
if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API endpoint to generate the story
app.post('/generate', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    try {
        // --- THIS IS THE UPDATED LINE ---
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

        const prompt = `
            Analyze the following code snippet and explain what it does in the form of a simple, creative story or analogy.
            Make the explanation easy for a beginner to understand. Avoid technical jargon as much as possible.

            Code:
            \`\`\`
            ${code}
            \`\`\`

            Story:
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const story = response.text();

        res.json({ story });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to generate story' });
    }
});

app.listen(port, () => {
    console.log(`Code Storyteller listening at http://localhost:${port}`);
});