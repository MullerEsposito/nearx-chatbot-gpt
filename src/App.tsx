import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProjectPanel } from './components/ProjectPanel';
import { AppContainer, MainContent } from './style';
import { PromptInput } from './components/InputPrompt';
import { sendPrompt } from './services/gemini';
import { GeminiResponse } from './services/types';

const App: React.FC = () => {
  const [response, setResponse] = React.useState('');

  const handlePromptSubmit = async (prompt: string) => {
    const data: GeminiResponse | null = await sendPrompt(prompt);
    if (data && data.candidates.length > 0) {
      const fullResponse = data.candidates[0].content.parts[0].text;
      
      setResponse(fullResponse);
    } else {
      setResponse("Nenhuma resposta recebida.");
    }
  };

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <ProjectPanel message={response} />
        <PromptInput onSubmit={handlePromptSubmit} />
      </MainContent>
    </AppContainer>
  );
};

export default App;