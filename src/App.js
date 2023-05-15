import { Routes, Route } from "react-router-dom";
import CodingAssignment from "./pages/coding-assignment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CodingAssignment />} />
    </Routes>
  );
}
export default App;
