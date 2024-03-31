// Selector definition to process data retrieved from localStorage
import { selector } from "recoil";
import DataFromLocal from "./DataFromLocal";

// Define a selector named processed
let processed = selector({
  key: "Processed Data", // Unique identifier for the selector
  get: ({ get }) => {
    const dataKeys = get(DataFromLocal); // Accessing atom's value using `get`
    // Mapping over data keys to retrieve and parse data from localStorage
    return dataKeys.data.map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
  },
});

// Export the processed selector
export default processed;
