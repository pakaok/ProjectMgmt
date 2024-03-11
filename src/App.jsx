import { useState } from "react";
import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import LandingPage from "./components/LandingPage";

function App() {
  const [currentPage,setCurrentPage] = useState("landingPage");
  function handlePageState(newPage){
    setCurrentPage(newPage)
  }
  return (
    
      <main className="h-screen my-8 flex gap-8">
        <SideBar/>
        {/* {currentPage=="landingPage" ? <LandingPage/> } */}
        <AddProject/>
      </main>
  );
}

export default App;
