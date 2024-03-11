import { useState } from "react";
import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import LandingPage from "./components/LandingPage";

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

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return { projects: [...prevState.projects, newProject],selectedProject:undefined };
    });
  }
  let content;
  if (projectState.selectedProject === null) {
    content = <AddProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onStartProject={handleProjectState} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartProject={handleProjectState} />
      {content}
    </main>
  );
}

export default App;
