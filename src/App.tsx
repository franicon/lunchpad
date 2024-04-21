import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/layout";

function App() {
  return <Routes>
    <Route index path="/" element={<RootLayout />} />
  </Routes>
}

export default App;
