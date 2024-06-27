import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/styles/base/base.scss";
import Genre from "./pages/Genre";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/genres" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
