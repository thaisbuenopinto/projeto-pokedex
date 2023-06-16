import React from "react";
import { Router } from "./routes/router";
import { GlobalState } from "./contexts/GlobalState";


function App() {
  return (
    <div>
    <GlobalState>
    <Router />
    </GlobalState>
    
    </div>
  );
}


export default App;
