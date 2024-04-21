import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/layout";
import { Home } from "./_root/pages";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
