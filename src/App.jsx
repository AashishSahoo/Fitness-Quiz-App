import { useState } from "react";

// import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import AppRoutes from "./routes/AppRoutes";
export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}
