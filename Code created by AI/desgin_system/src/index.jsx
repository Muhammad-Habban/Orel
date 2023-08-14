import React from "react";
import ReactDOMClient from "react-dom/client";
import { Design } from "./screens/Design";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Design />);
