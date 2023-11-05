import Header from "../components/Header";
import AboutBe from "../components/ui/AboutBe";
import News from "../components/ui/News";
import Volunteer from "../components/ui/Volunteer";


const Home = () => {
  return (
    <div>
      <Header />
      <AboutBe/>
      <Volunteer></Volunteer>
      <News/>
    </div>
  );
};

export default Home;