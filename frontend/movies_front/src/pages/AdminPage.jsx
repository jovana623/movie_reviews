import ActorForm from "../features/actors/ActorForm";
import DirectorForm from "../features/directors/DirectorForm";
import CreateMovieForm from "../features/movies/CreateMovieForm";
import "../styles/pages/AdminPage.scss";

function AdminPage() {
  return (
    <div className="admin__page">
      <CreateMovieForm />
      <ActorForm />
      <DirectorForm />
    </div>
  );
}

export default AdminPage;
