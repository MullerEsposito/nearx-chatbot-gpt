import { ProjectItem, ProjectList, SidebarContainer } from "./style";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>Projects</h2>
      <ProjectList>
        <ProjectItem>Chat 1</ProjectItem>
        <ProjectItem>Chat 2</ProjectItem>
        <ProjectItem>Chat 3</ProjectItem>
        <ProjectItem>Chat 4</ProjectItem>
        <ProjectItem>Chat 5</ProjectItem>
      </ProjectList>
    </SidebarContainer>
  );
};