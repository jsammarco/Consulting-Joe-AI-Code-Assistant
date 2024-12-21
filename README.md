# Consulting Joe AI Code Assistant

Consulting Joe AI Code Assistant is a web-based application that leverages the Ollama backend library to assist developers with code generation, enhancement, and debugging tasks. It provides an intuitive interface for entering code and prompts and delivers AI-driven responses for smarter coding.

## Features

- **Real-time AI Chat**: Communicate with AI models to refine and debug your code.
- **Streaming Responses**: Get real-time feedback displayed directly in the browser.
- **Embedded Ollama Backend**: Leverages the Ollama library for AI operations.
- **Dynamic Frontend**: Built with HTML, JavaScript, and Express for seamless user interactions.
- **RESTful API**: Clean and extendable API endpoints for additional integrations.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- Ollama backend running locally

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/consultingjoe-ai-code-assistant.git
   cd consultingjoe-ai-code-assistant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
consultingjoe-ai-code-assistant
├── index.js         # Main server file
├── package.json     # Project dependencies and scripts
├── public/          # Static files (HTML, CSS, JS)
│   ├── index.html   # Main frontend HTML file
│   ├── styles.css   # Optional styles
│   └── app.js       # Frontend JavaScript
├── src/             # JavaScript libraries
│   └── marked.js    # Example library
└── README.md        # Project documentation
```

## API Endpoints

### `GET /health`
Returns the health status of the server.

#### Response:
```json
{
  "status": "OK"
}
```

### `POST /chat`
Handles chat interactions with the AI.

#### Request Body:
```json
{
  "model": "granite3.1-dense",
  "messages": [
    { "role": "user", "content": "Your code here" }
  ],
  "stream": true
}
```

#### Response:
- Streams real-time data if `stream` is `true`.
- Returns a JSON object otherwise.

### `POST /generate`
Generates a response based on a model and prompt.

#### Request Body:
```json
{
  "model": "granite3.1-dense",
  "prompt": "Write a function to reverse a string."
}
```

#### Response:
```json
{
  "message": "Here is the function to reverse a string..."
}
```

## Frontend Usage

1. Enter your code in the "Code" text area.
2. Enter your query or prompt in the "Prompt" text area.
3. Click "Submit" to send the request.
4. Responses will be displayed in real-time in the designated response container.

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [path](https://nodejs.org/api/path.html)
- [cors](https://www.npmjs.com/package/cors)
- [ollama](https://www.npmjs.com/package/ollama)
- [mime-types](https://www.npmjs.com/package/mime-types)

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Built with ❤️ by Consulting Joe.
- Powered by the Ollama backend library for AI capabilities.

## Contact

For questions, feedback, or support, please contact:

- **Website**: [ConsultingJoe.com](https://consultingjoe.com)
- **Email**: support@consultingjoe.com
