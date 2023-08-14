import React from "react";
import ReactDOMClient from "react-dom/client";
import { QueryBuilder } from "./screens/QueryBuilder";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<QueryBuilder />);
