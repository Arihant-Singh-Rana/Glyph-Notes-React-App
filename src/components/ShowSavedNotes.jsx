import React, { useEffect, useState } from "react";
import ReactToPrint from "react-to-print"; // Importing ReactToPrint for printing functionality
import { useNavigate, useSearchParams } from "react-router-dom"; // Importing routing utilities
import { useRef } from "react"; // Importing useRef hook

export default function ShowSavedNotes() {
  const contentRef = useRef(null); // Creating a ref for the content to be printed
  let nav = useNavigate(); // Using navigate hook for navigation
  const [q, setQ] = useSearchParams(); // Using search parameters for navigation
  let preaddedContent =
    localStorage.getItem(q.get("id")) !== null
      ? JSON.parse(localStorage.getItem(q.get("id"))).content
      : "";
  const [content, setContent] = useState(`${preaddedContent}`);

  // useEffect to update content when the search parameter changes
  useEffect(() => {
    preaddedContent =
      localStorage.getItem(q.get("id")) !== null
        ? JSON.parse(localStorage.getItem(q.get("id"))).content
        : "";
    setContent(`${preaddedContent}`);
  }, [q.get("id")]);

  // Getting file title from local storage
  let fileTitle =
    localStorage.getItem(q.get("id")) !== null
      ? JSON.parse(localStorage.getItem(q.get("id"))).Title
      : nav("/"); // Navigating to home if no file title is found

  return (
    <div>
      {/* Rendering the content to be printed */}
      <div
        ref={contentRef}
        className="showContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {/* ReactToPrint component for printing */}
      <ReactToPrint
        trigger={() => <button className="Download_btn">Download</button>}
        content={() => contentRef.current}
        fileName={fileTitle}
      />
    </div>
  );
}

{
  /* The code renders content from local storage and provides a button for printing/downloading it. */
}
