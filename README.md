# Gemini Chatbot

A modern React application built with TypeScript and Vite, designed to serve as a chatbot interface integrated with the **Gemini API**. This project allows users to interact with an AI-powered chatbot, providing dynamic responses through a user-friendly interface. The architecture is modular and scalable, ensuring maintainability and ease of extension.

## 🚀 Features

- **AI Chatbot Integration**: Connects seamlessly with the Gemini API for intelligent responses.
- **React + TypeScript**: Leverage the power of strong typing and a modern UI library.
- **Vite**: Fast and optimized build tool.
- **Modular Components**: Includes Header, Sidebar, Project Panel, and Input Prompt.
- **Custom Styling**: Styled components for consistent and dynamic design.
- **Service Layer**: Manages API communication effectively (`gemini.ts`).

## 📁 Project Structure

```
src/
│  App.tsx           # Main application component
│  main.tsx          # Entry point
│  index.css         # Global styles
│  style.ts          # Global styled-components
│  vite-env.d.ts     # Vite environment definitions
│
├─ assets/           # Static assets (e.g., images)
│
├─ components/       # Reusable UI components
│   ├─ Header/       # Application header
│   ├─ InputPrompt/  # Input field for user prompts
│   ├─ ProjectPanel/ # Displays chatbot conversation history
│   └─ Sidebar/      # Navigation sidebar
│
├─ services/         # Service layer for API integration
│   ├─ gemini.ts     # Handles communication with Gemini API
│   └─ types.ts      # Type definitions for API responses
```

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Styled-components

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <project-directory>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory of the project and add the following line:

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Run the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

5. **Build for production:**

```bash
npm run build
```

## 📌 Usage

After running the development server, access the application at `http://localhost:5173`. 

You can interact with the chatbot by typing prompts into the input field. The responses are generated using the Gemini API.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue.

---

*Enjoy your AI-powered chatbot experience!*

