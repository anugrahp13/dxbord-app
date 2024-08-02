import { useState } from "react";
import Header from "./components/Elements/Header";
import Sidebar from "./components/Elements/Sidebar";
import Main from "./pages/Main";
import Content from "./pages/Content";
import Profile from "./components/Elements/Profile/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className={`${darkMode && "dark"}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen}/>

      <Main>
        <Content>Main Content</Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
