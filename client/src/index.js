import React from "react";
import { createRoot } from "react-dom/client";
import Table from "./components/Table";

function App(){
  return (
      <>
          <div className="container">
              <Table />
          </div>
      </>
  )
}

const root = createRoot(document.getElementById("index"))
root.render(
  <>
    <App />
  </>
)