import { Route, Routes } from "react-router-dom";
import { Home } from "./_root/pages";
import { Footer, Header } from "./_root/layout/components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
