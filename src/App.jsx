import { useState } from "react";
import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import LandingPage from "./components/LandingPage";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleProjectState() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProject: null };
    });
  }
  console.log(projectState);

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProject: undefined };
    });
  }

  function handleAddProject(projectData) {
    //projectData = {title:?, desc:?, dueDate?}
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };
    setProjectState((prevState) => {
      return {
        projects: [...prevState.projects, newProject],
        selectedProject: undefined,
      };
    });
  }

  function handleSelectProject(newSelectedProject) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProject: newSelectedProject };
    });
  }

  let content;
  if (projectState.selectedProject === null) {
    content = (
      <AddProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onStartProject={handleProjectState} />;
  } else {
    content = (
      <ProjectDetail
        project={projectState.projects.find((project) => {
          return project.id === projectState.selectedProject;
        })}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartProject={handleProjectState}
        projects={projectState.projects}
        onSelect={handleSelectProject}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
