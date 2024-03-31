// Recoil atom definition to manage local data and application state
import { atom } from "recoil";

// Define an atom named DataFromLocal
let DataFromLocal = atom({
  key: `DataFromLocal`, // Unique identifier for the atom
  default: {
    // Initial/default state of the atom
    data: Object.keys(localStorage), // Data retrieved from localStorage
    state: "home", // Current state of the application
  },
});

// Export the DataFromLocal atom
export default DataFromLocal;
