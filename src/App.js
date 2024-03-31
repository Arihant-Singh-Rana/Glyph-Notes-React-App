import React from "react";
import MainNav from "./components/MainNav.jsx"; // Importing the main navigation component
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"; // Importing the home component
import ShowSavedNotes from "./components/ShowSavedNotes.jsx"; // Importing the component to display saved notes
import SideView from "./components/SideView.jsx"; // Importing the side view component
import MainEditor from "./components/MainEditor.jsx"; // Importing the main editor component

export default function App() {
  return (
    <div>
      <MainNav /> {/* Rendering the main navigation component */}
      <div className="below_nav">
        <SideView /> {/* Rendering the side view component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          <Route path="/ShowSaved" element={<ShowSavedNotes />} />{" "}
          {/* Route for displaying saved notes */}
          <Route path="/editor" element={<MainEditor />} />{" "}
          {/* Route for the main editor */}
        </Routes>
      </div>
    </div>
  );
}
