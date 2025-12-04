import '../Header.css';
import NavComponent from './NavComponent'

function Header() {
  return (
    <header>
      <div className="header-div">
        <div className="Logo-Wrapper">
          <a href="/" aria-label="Home">
            <img
              id="Truck-Logo"
              src="/ClearTacoLogo.jpg"
              alt="Papi's Tacos Parrillero logo"
              onError={(e) => { e.target.onerror = null; e.target.src = '/ClearTacoLogo.jpg'; }}
            />
          </a>
        </div>

        <nav>
          <NavComponent />
        </nav>

        <div>
          <a href="https://www.facebook.com/p/Papis-Taco-Parrillero-100092604847004/">
            <button className="header-cta" aria-label="Facebook"><img width="30" height="30"src="/Font-F.png" alt="facebook-f"/></button>
          </a>
        </div>
      </div>

      {/* Optional small hero / announcement below header */}
      <div style={{padding: '0 16px'}}>
        <div className="header-hero">PAPI'S TACOS PARRILLERO IS NOW OPEN!</div>
      </div>
    </header>
  );
}

export default Header