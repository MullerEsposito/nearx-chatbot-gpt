import { useState } from "react";
import { InputContainer, InputField, SubmitButton } from "./style";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
    </InputContainer>
  );
};