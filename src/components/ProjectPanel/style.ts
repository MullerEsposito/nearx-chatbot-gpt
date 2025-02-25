import styled from 'styled-components';

export const PanelContainer = styled.div`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const InteractionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  color: #ccc;
`;

export const Message = styled.p`
  text-align: justify;
  width: 90%;
  padding: 1rem;
  border-radius: 5px;
  `;

export const PrompterMessage = styled(Message)`
  background-color: hsla(242, 88.4%, 66.3%, 0.5);
  align-self: flex-start;
  border-bottom-left-radius: 50px;
`;

export const GeminiMessage = styled(Message)`
  background-color: hsla(242, 23.40%, 53.90%, 0.50);
  align-self: flex-end;
  border-top-right-radius: 50px;

  pre {
    background-color: #1e1e1e;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }

  code {
    background-color: #1e1e1e;
    padding: 3px 5px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #333;
    color: white;
  }
`;