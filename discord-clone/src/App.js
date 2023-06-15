import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
/*import { useSelector} from "react-redux";*/ 
import { selectUser } from "./userSlice";

function App() {
  /* const user = useSelector(selectUser); */

  return (
    <div className="app"> 
      
        <>
      <Sidebar />
      <Chat />
      </>
     
    </div>
  );
}

export default App