import { useCurrentUser } from "../features/authentification/useCurrentUser";
import Hero from "../features/homepage/Hero";
import TrailerSection from "../features/homepage/TrailersSection";
import "../styles/pages/Homepage.scss";

function Homepage() {
  const { data: user, isLoading, error } = useCurrentUser();
  if (isLoading) return <div>Loading...</div>;
  console.log("Current user", user);
  console.log(error);
  return (
    <div>
      <Hero />
      <TrailerSection />
    </div>
  );
}

export default Homepage;
