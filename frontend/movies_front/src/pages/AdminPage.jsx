import CreateMovieForm from "../features/movies/CreateMovieForm";
import "../styles/pages/AdminPage.scss";

function AdminPage() {
  return (
    <div className="admin__page">
      <CreateMovieForm />
    </div>
  );
}

export default AdminPage;
