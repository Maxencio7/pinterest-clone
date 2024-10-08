import App from "/home/king888/Pintii-clone/src/App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import "/home/king888/Pintii-clone/src/App.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Type assertion as HTMLElement if needed
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
