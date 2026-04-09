from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Groq client
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY")
)

@app.route('/api/ai/chat', methods=['POST'])
def chat():
    """
    AI Chat endpoint
    Receives a message and returns an AI-generated response
    """
    try:
        data = request.json
        message = data.get('message', '')
        context = data.get('context', 'Auto')
        history = data.get('history', [])
        
        if not message:
            return jsonify({
                'success': False,
                'error': 'Message is required'
            }), 400
        
        # Build conversation messages
        messages = [
            {
                "role": "system",
                "content": f"""You are Notion AI, a helpful and intelligent assistant integrated into Notion. 
                You help users with tasks like writing, brainstorming, summarizing, and answering questions.
                Context mode: {context}
                Be concise, helpful, and professional. Format your responses clearly."""
            }
        ]
        
        # Add conversation history
        for msg in history:
            messages.append({
                "role": msg.get('role', 'user'),
                "content": msg.get('content', '')
            })
        
        # Add current message
        messages.append({
            "role": "user",
            "content": message
        })
        
        # Call Groq API
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",  # Fast and capable model
            temperature=0.7,
            max_tokens=1024,
            top_p=1,
            stream=False
        )
        
        response_text = chat_completion.choices[0].message.content
        
        return jsonify({
            'success': True,
            'response': response_text
        })
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'Failed to process AI request',
            'message': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'service': 'Notion AI Service (Python)',
        'model': 'llama-3.3-70b-versatile'
    })

@app.route('/api/ai/summarize', methods=['POST'])
def summarize():
    """
    Summarize text endpoint
    """
    try:
        data = request.json
        text = data.get('text', '')
        
        if not text:
            return jsonify({
                'success': False,
                'error': 'Text is required'
            }), 400
        
        messages = [
            {
                "role": "system",
                "content": "You are a helpful assistant that creates concise summaries. Provide clear, well-structured summaries."
            },
            {
                "role": "user",
                "content": f"Please summarize the following text:\n\n{text}"
            }
        ]
        
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_tokens=512
        )
        
        summary = chat_completion.choices[0].message.content
        
        return jsonify({
            'success': True,
            'summary': summary
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    print("=" * 50)
    print("  Notion AI Service (Python)")
    print("=" * 50)
    print("Server running on http://localhost:5000")
    print("Using Groq API with llama-3.3-70b-versatile")
    print("=" * 50)
    app.run(host='0.0.0.0', port=5000, debug=True)
