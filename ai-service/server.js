const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');

const app = express();
const PORT = 5000;

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());

// AI Chat endpoint
app.post('/api/ai/chat', async (req, res) => {
    try {
        const { message, context, history } = req.body;

        // Build conversation history
        const messages = [
            {
                role: 'system',
                content: `You are Notion AI, a helpful and intelligent assistant integrated into Notion. 
                You help users with tasks like writing, brainstorming, summarizing, and answering questions.
                Context mode: ${context || 'Auto'}
                Be concise, helpful, and professional.`
            }
        ];

        // Add conversation history
        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                messages.push({
                    role: msg.role,
                    content: msg.content
                });
            });
        }

        // Add current message
        messages.push({
            role: 'user',
            content: message
        });

        // Call Groq API
        const completion = await groq.chat.completions.create({
            messages: messages,
            model: 'llama-3.3-70b-versatile', // Fast and capable model
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 1,
            stream: false
        });

        const response = completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response.';

        res.json({
            success: true,
            response: response
        });

    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process AI request',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Notion AI Service' });
});

app.listen(PORT, () => {
    console.log(`🤖 Notion AI Service running on http://localhost:${PORT}`);
});
