import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/styles/base/base.scss";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import MainLayout from "./pages/MainLayout";
import AdminPage from "./pages/AdminPage";
import { Toaster } from "react-hot-toast";
import ActorPage from "./pages/ActorPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Homepage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontStyle: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "#fff",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
