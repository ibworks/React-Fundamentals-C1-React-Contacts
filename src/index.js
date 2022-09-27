import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<BrowserRouter><App /></BrowserRouter>);
