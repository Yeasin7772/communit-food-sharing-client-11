
import Header from "../components/Header";
import AboutBe from "../components/ui/AboutBe";
import News from "../components/ui/News";
import Volunteer from "../components/ui/Volunteer";
import Features from "./Features";


const Home = () => {



  return (
    <div>
      <Header />
      <div>

        <Features></Features>

      </div>
      <AboutBe />
      <News />
      <Volunteer></Volunteer>

    </div>
  );
};

export default Home;