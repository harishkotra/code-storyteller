# Code Storyteller

This web application uses the Google Gemini API to explain code snippets in the form of simple, easy-to-understand stories.

<img width="3146" height="2408" alt="screencapture-localhost-3002-2025-11-02-15_55_23" src="https://github.com/user-attachments/assets/3ac119b3-34fd-4b28-a1e2-efc3a7451e7c" />
<img width="3146" height="2422" alt="screencapture-localhost-3002-2025-11-02-15_59_24" src="https://github.com/user-attachments/assets/528d82c7-d467-4959-9d2a-edc0e90dc496" />
<img width="3146" height="2805" alt="screencapture-localhost-3002-2025-11-02-16_04_22" src="https://github.com/user-attachments/assets/ad5474d7-a793-4ede-aa16-cc5f56b291d3" />


https://github.com/user-attachments/assets/a53423aa-ac1c-458c-90e8-7bcd96d47493


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
