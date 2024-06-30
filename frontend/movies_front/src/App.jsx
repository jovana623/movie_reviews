import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/styles/base/base.scss";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import MainLayout from "./pages/MainLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Homepage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
