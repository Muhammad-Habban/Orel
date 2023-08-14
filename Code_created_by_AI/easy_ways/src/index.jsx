import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementEasyWaysTo } from "./screens/ElementEasyWaysTo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementEasyWaysTo />);
