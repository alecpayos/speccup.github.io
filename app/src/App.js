import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Promos from "./pages/Promos";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/speccup.github.io/' element={<Home />} />
        <Route path='/speccup.github.io/register' element={<Registration />} />
        <Route path='/speccup.github.io/login' element={<Login />} />
        <Route path='/speccup.github.io/promo-deals' element={<Promos />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;
