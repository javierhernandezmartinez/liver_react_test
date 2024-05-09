import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Paginas/Home/Home";
import './Styles/Home.css'
import './Styles/Components.scss'
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primereact/resources/primereact.min.css';
function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
