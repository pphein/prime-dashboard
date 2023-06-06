import { Menubar } from 'primereact/menubar'

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

const Navigation = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <Menubar model={items}/>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;