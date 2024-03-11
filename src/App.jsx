import { useState } from "react";
import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import LandingPage from "./components/LandingPage";

function App() {
  const [currentPage,setCurrentPage] = useState({"newProject":true});

  return (
      <main className="h-screen my-8 flex flex-row">
        <SideBar/>
        <AddProject/>
        {/* <LandingPage/> */}
      </main>
  );
}

export default App;
