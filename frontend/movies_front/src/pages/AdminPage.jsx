import ActorForm from "../features/actors/ActorForm";
import CreateMovieForm from "../features/movies/CreateMovieForm";
import "../styles/pages/AdminPage.scss";

function AdminPage() {
  return (
    <div className="admin__page">
      <CreateMovieForm />
      <ActorForm />
    </div>
  );
}

export default AdminPage;
