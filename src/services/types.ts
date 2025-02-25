// src/types.ts

export interface GeminiContentPart {
  text: string;
}

export interface GeminiContent {
  parts: GeminiContentPart[];
}

export interface GeminiCandidate {
  content: GeminiContent;
}

export interface GeminiResponse {
  candidates: GeminiCandidate[];
}
