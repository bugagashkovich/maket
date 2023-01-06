import "./App.css";
import Contributer from "./components/contrib";
import Footer from "./components/footer";
import Main from "./components/main";
import MostPop from "./components/mostPop";
import Navbar from "./components/navbar";
import Newcomer from "./components/newcomer";
import Slider from "./components/slider";
import Trusted from "./components/trusted";

function App() {
  return (
    <h1 className="bg-[#1E252B] font-poppins">
      <Navbar />
      <Main />
      <MostPop />
      <Trusted />
      <Newcomer />
      <Slider />
      <Contributer />
      <Footer />
    </h1>
  );
}

export default App;
