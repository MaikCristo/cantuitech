import './App.css';
import Toolbar from './Components/Toolbar';
import Footer from "./Components/Footer";
import {Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";



function App() {
  return (
    <div className="bodyPage" >
        <Header/>
        <Outlet />

        <Footer/>
    </div>
  );
}

export default App;
