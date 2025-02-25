import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #252526;
  padding: 20px;
  overflow-y: auto;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #61dafb;
  }
`;
