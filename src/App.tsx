//#Global Imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//#End Global Imports

//#Local Imports
import ProtectedPageLayout from "./components/layout/ProtectedPageLayout";
import Dashboard from "./pages/homePage";
import SyncMode from "./pages/syncMode";
import Logs from "./pages/logs";
import Settings from "./pages/settings";
//#End Local Imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedPageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sync-mode" element={<SyncMode />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        {/* <div className="flex items-center justify-center w-full h-screen font-bold text-white bg-red-800 text-9xl">
          UI IS COMING SOON.
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
