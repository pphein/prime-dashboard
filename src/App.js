import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';

// import Navigation from "./components/Nav";
// import { InputText } from 'primereact/inputtext';
import Datatable from "./components/Datatable";
import { Menubar } from "primereact/menubar";
import { useState } from "react";

const items = [
  {
    label: 'State',
    value: 'state'
    // icon: 'pi pi-fw pi-home'
  },
  {
    label: 'District',
    value: 'district'
    // icon: 'pi pi-fw pi-list'
  },
  {
    label: 'Township',
    value: 'township'
    // icon: 'pi pi pi-fw pi-user'
  },
  {
    label: 'City',
    value: 'city'
    // icon: 'pi pi pi-fw pi-phone'
  }

]


const brand = <h2>BrandName</h2>

function App() {
  const [name, setName] = useState(null);
  return (
    <div className="App">
      <Menubar start={brand} onClick={(e) => setName(e.target.textContent.toLowerCase())} model={items} />
      {name ? <Datatable name={name} /> : null}
    </div>
  );
}

export default App;
