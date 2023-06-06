import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';

import { MegaMenu } from 'primereact/megamenu';
import Navigation from "./components/Nav";
import { InputText } from 'primereact/inputtext';

const items = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home'
  },
  {
    label: 'Serivces',
    icon: 'pi pi-fw pi-list'
  },
  {
    label: 'About us',
    icon: 'pi pi pi-fw pi-user'
  },
  {
    label: 'Contact us',
    icon: 'pi pi pi-fw pi-phone'
  }
  
]

const brand = <h2>Brand</h2>
const input = 
<span className="p-input-icon-left">
    <i className="pi pi-search" />
    <InputText placeholder="Search" />
</span>
;

function App() {
  return (
    <div className="App">
      <Navigation />
      <MegaMenu start={brand} model={items} end={input} breakpoint="960px" />
    </div>
  );
}

export default App;
