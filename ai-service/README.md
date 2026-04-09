# Notion AI Service (Python)

Backend AI service for Notion clone using Flask and Groq API.

## Setup

1. **Create a virtual environment** (recommended):
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On macOS/Linux
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

3. **Run the service**:
```bash
python app.py
```

The service will start on `http://localhost:5000`

## Quick Start (Windows)

Simply run:
```bash
start-ai-service.bat
```

## API Endpoints

### POST /api/ai/chat
Send a message to the AI and get a response.

**Request:**
```json
{
  "message": "Your question here",
  "context": "Auto|Research|All sources",
  "history": [
    { "role": "user", "content": "Previous message" },
    { "role": "assistant", "content": "Previous response" }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "response": "AI generated response"
}
```

### POST /api/ai/summarize
Summarize a given text.

**Request:**
```json
{
  "text": "Long text to summarize..."
}
```

**Response:**
```json
{
  "success": true,
  "summary": "Concise summary..."
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "service": "Notion AI Service (Python)",
  "model": "llama-3.3-70b-versatile"
}
```

## Features

- ✅ Real-time AI chat responses
- ✅ Conversation history support
- ✅ Context-aware responses (Auto, Research, All sources)
- ✅ Text summarization
- ✅ Fast response times with Groq's infrastructure
- ✅ CORS enabled for frontend integration
- ✅ Error handling and logging

## Technology Stack

- **Framework**: Flask 3.0
- **AI Provider**: Groq
- **Model**: llama-3.3-70b-versatile
- **CORS**: Flask-CORS

## Environment

- Port: 5000
- Debug mode: Enabled (development)
- API Key: Configured in app.py

## Development

To run in development mode with auto-reload:
```bash
python app.py
```

Flask's debug mode is enabled by default, so the server will automatically reload when you make changes to the code.
