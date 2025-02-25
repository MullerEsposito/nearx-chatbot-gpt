import { Message, PanelContainer } from "./style";

interface ProjectPanelProps {
  message: string;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({ message }) => {
  return (
    <PanelContainer>
      <Message>
        {message && message.length > 0 ? message : "Start a new chat, or drag an old one in"}
      </Message>
    </PanelContainer>
  );
};