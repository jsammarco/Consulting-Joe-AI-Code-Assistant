const express = require('express');
const path = require('path');
const { Ollama } = require('ollama');
const cors = require('cors');
const mime = require('mime-types');

const app = express();
const port = process.env.PORT || 3000;

// Initialize the Ollama client
const ollama = new Ollama({
    url: 'http://localhost:11434'
});

app.use('/thirdparty', express.static(path.join(__dirname, 'thirdparty'), {
    setHeaders: (res, filePath) => {
        const type = mime.lookup(filePath); // Use `lookup` from mime-types
        res.setHeader('Content-Type', type || 'application/javascript');
    }
}));

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Endpoint for chat with streaming support
app.post('/chat', async (req, res) => {
    const { model, messages, stream = false } = req.body;

    if (!model || !messages) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        if (stream) {
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            });

            const chatResponse = await ollama.chat({
                model,
                messages,
                stream: true
            });

            for await (const chunk of chatResponse) {
                res.write(`data: ${JSON.stringify(chunk)}\n\n`);
            }
            res.end(); // Close the streaming response

        } else {
            const response = await ollama.chat({ model, messages });
            res.json({ response: response.message.content });
        }
    } catch (error) {
        console.error('Error during chat:', error);
        res.status(500).json({ error: 'Chat request failed' });
    }
});

// Other endpoints for models, embeddings, etc. (Optional)
app.get('/models', async (req, res) => {
    try {
        const modelList = await ollama.list();
        res.json(modelList);
    } catch (error) {
        console.error('Error fetching models:', error);
        res.status(500).json({ error: 'Failed to fetch models' });
    }
});

// Endpoint for health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
