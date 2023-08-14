import React from "react";
import ReactDOMClient from "react-dom/client";
import { MainPage } from "./screens/MainPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MainPage />);
