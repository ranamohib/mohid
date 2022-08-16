import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import 'animate.css';


function App() {
  return (
    <div className="App">
      <div className="w-3/4 mx-auto text-white">
        <Header/>
        <Nav/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
