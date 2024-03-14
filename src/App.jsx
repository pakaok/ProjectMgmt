import { useState } from "react";
import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import LandingPage from "./components/LandingPage";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(content) {
    const newTaskId = Math.random();
    const newTask = {
      projectId: projectState.selectedProject,
      taskId: newTaskId,
      text: content,
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const newProjectTasks = prevState.tasks.filter(
        (task) => task.taskId !== taskId 
      );
      return { ...prevState, tasks: newProjectTasks };
    });
  }

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
        ...prevState,
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

  function handleDeleteProject() {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter((project) => {
        return project.id != prevState.selectedProject;
      });
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProject: undefined,
      };
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
    const selectedProject = projectState.projects.find((project) => {
      return project.id === projectState.selectedProject;
    })
    const selectedTasks = projectState.tasks.filter(task=>(
      task.projectId == projectState.selectedProject
    ))
    content = (
      <ProjectDetail
        tasks={selectedTasks}
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
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
