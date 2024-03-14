import { Routes, Route } from "react-router-dom";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public route */}
        <Route path="/sign-in" />
        {/* private route */}
        <Route path="/sign-in" />
      </Routes>
    </main>
  );
};

export default App;
