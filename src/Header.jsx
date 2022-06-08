import logo from "./images/icon-1.png"
import './App.css';

function App() {
  return (

    <>
    <div className="conteiner">
      <header className="header">
        <a className="header-logo-link" href="#" >
          <img className="header-logo" src={logo} alt="Site Logo" width="69" height="69" />
        </a>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-item-link header-item-link-active" href="index.html">Home</a>

          </li>
          <li className="header-item">
            <a className="header-item-link" href="#about_page">About </a>

          </li>
          <li className="header-item">
            <a className="header-item-link" href="#customer_page">Services </a>

          </li>
          <li className="header-item">
            <a className="header-item-link" href="#wrapper-page">Reviews</a>

          </li>
        </ul>
        <a className="header-button" href="#" target="_blank">Get Started </a>
      </header>
    </div>
    <span className="header-line"></span></>
  )
}

export default App;
