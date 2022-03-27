import "./HomePage.scss";
import NewRelease from "../../components/NewRelease/NewRelease"

function HomePage() {
  return (
    <section className="home">
      <h1 className="home__title">New Releases</h1>
      <NewRelease/>        
    </section>
  );
}

export default HomePage;
