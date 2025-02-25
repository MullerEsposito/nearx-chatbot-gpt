import axios from "axios";
import { GeminiResponse } from "./types";

// Substitua com suas credenciais reais (de preferência, use variáveis de ambiente)
// Importe variavel de ambiente com a chave da API do .env
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export const sendPrompt = async (prompt: string): Promise<GeminiResponse | null> => {
  console.log("Prompt:", prompt);
  try {
    const response = await axios.post<GeminiResponse>(
      BASE_URL,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Resposta:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o prompt:", (error as any).response?.data || (error as Error).message);
    return null;
  }
};