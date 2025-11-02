# Code Storyteller

This web application uses the Google Gemini API to explain code snippets in the form of simple, easy-to-understand stories.

## Prerequisites

- Docker and Docker Compose installed.
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

## How to Run

1.  **Clone the repository or save all the files** provided into the project structure outlined above.

2.  **Create an environment file:**
    In the root of your `code-storyteller` directory, create a new file named `.env`.

3.  **Add your API key to the `.env` file:**
    Open the `.env` file and add your Gemini API key like this:
    ```
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

4.  **Install Node.js dependencies:**
    Run this command in your terminal to install the necessary packages. This is important for your code editor's IntelliSense to work correctly.
    ```bash
    npm install
    ```

5.  **Build and run the Docker container:**
    From the root of your project directory, run the following command:
    ```bash
    docker compose up --build
    ```
    This will build the Docker image and start the application.

6.  **Open the application:**
    Open your web browser and navigate to `http://localhost:3000`.

You should now see the Code Storyteller UI and be able to generate stories from your code!