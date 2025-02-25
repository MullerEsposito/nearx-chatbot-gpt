import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
  margin-right: 10px;
  &:focus {
    outline: none;
    background-color: #555;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #1e1e1e;
  font-weight: bold;

  &:hover {
    background-color: #52c7ea;
  }
`;