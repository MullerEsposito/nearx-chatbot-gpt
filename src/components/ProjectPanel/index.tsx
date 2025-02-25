import { Interaction } from "../../@types";
import { GeminiMessage, InteractionBox, PanelContainer, PrompterMessage } from "./style";

interface ProjectPanelProps {
  interactions: Interaction[];
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({ interactions }) => {
  return (
    <PanelContainer>
      {/* {interactions.map((interaction, index) => (
        <Message key={index}>
          <PrompterMessage>
            <strong>Você:</strong> {interaction.prompt}
          </PrompterMessage>
          <GeminiMessage>
            <strong>Gemini:</strong> {interaction.response}
          </GeminiMessage>
        </Message>
      ))} */}
      <InteractionBox key={`mock`}>
        <PrompterMessage>
          <strong>Você:</strong> Olá? (mock)
        </PrompterMessage>
        <GeminiMessage>
          <strong>Gemini:</strong> Olá! Sobre o que quer falar? (mock)
        </GeminiMessage>
      </InteractionBox>
      <InteractionBox key={`mock`}>
        <PrompterMessage>
          <strong>Você:</strong> Tudo certo! Como está o clima hoje? (mock)
        </PrompterMessage>
        <GeminiMessage>
          <strong>Gemini:</strong> Como não tenho acesso à informação em tempo real, incluindo o clima, não consigo te dizer como está o clima hoje. Para saber disso, você precisará consultar um site de previsão do tempo ou um aplicativo meteorológico, indicando sua localização. (mock)
        </GeminiMessage>
      </InteractionBox>
    </PanelContainer>
  );
};