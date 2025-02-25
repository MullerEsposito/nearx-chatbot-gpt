import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProjectPanel } from './components/ProjectPanel';
import { AppContainer, MainContent } from './style';
import { PromptInput } from './components/InputPrompt';
import { sendPrompt } from './services/gemini';
import { GeminiResponse } from './services/types';
import { Interaction } from './@types';

const App: React.FC = () => {
  const [interactions, setInteractions] = React.useState<Interaction[]>([]);

  const handlePromptSubmit = async (prompt: string) => {
    const data: GeminiResponse | null = await sendPrompt(prompt);
    if (data && data.candidates.length > 0) {
      const fetchedResponse = data.candidates[0].content.parts[0].text;
      
      setInteractions([...interactions, { prompt, response: fetchedResponse }]);
    }
  };

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <ProjectPanel interactions={interactions} />
        <PromptInput onSubmit={handlePromptSubmit} />
      </MainContent>
    </AppContainer>
  );
};

export default App;