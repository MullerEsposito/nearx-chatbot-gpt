import { Interaction } from "../../@types";
import { TypingText } from "../TypingText";
import { GeminiMessage, InteractionBox, PanelContainer, PrompterMessage } from "./style";

interface ProjectPanelProps {
  interactions: Interaction[];
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({ interactions }) => {
  return (
    <PanelContainer>
      {interactions.map((interaction, index) => (
        <InteractionBox key={index}>
          <PrompterMessage>
            <strong>Você:</strong> {interaction.prompt}
          </PrompterMessage>
          <GeminiMessage>
            <strong>Gemini: </strong> 
            <TypingText text={interaction.response} speed={10} />
          </GeminiMessage>
        </InteractionBox>
      ))}
      
    </PanelContainer>
  );
};