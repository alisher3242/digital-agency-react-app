import './App.css';
import logo from "./images/icon-1.png"
import facebook from "./images/Facebook.png"
import instagram from "./images/Instagram.png"
import twitter from "./images/Twiter.png"
import youtube from "./images/youtube.png"



function FooterSection() {
    return (
        <>
        <footer className="footer">
            <div className="conteiner footer-conteiner">
                <div className="footer-top-first">
                    <a className="footer-logo-link" href="#">
                        <img className="footer-logo" src={logo} alt="Site logo" width="69" height="69"/>
                    </a>
                    <ul className="footer-first">
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Smart business</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Community</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-top-second">
                    <h4 className="footer-hedding">Resources</h4>
                    <ul className="footer-second">
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Start Business</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Digital Marketing</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Course Creation</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Business Accelerator</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-top-third">
                    <h4 className="footer-hedding">Mission</h4>
                    <ul className="footer-third">
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">About Digital Analyst</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Team</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Become a Partner</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-top-fourth">
                    <h4 className="footer-hedding">Contact</h4>
                    <ul className="footer-fourth">
                        <li className="footer-item">
                            <a className="footer-links" href="tel:041-774073">041-774073</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="mail:hello@digitalanalyst.org">hello@digitalanalyst.org</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="#" target="_blank">Contact Form</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="conteiner footer-bottom-conteiner">
                    <div className="footer-bottom-left">
                        <p className="footer-text">© 2021 DigitalAnalyst.org. A 50 non-profit organization. EIN: -3410655
                        </p>
                    </div>
                    <div className="footer-bottom-right">
                        <ul className="footer-fifth">
                            <li className="footer-fifth-item">
                                <a className="footer-social-link" href="https://facebook.com" target="_blank">
                                    <img src={facebook} alt="facebook" width="16" height="31"/>
                                </a>
                            </li>
                            <li className="footer-fifth-item">
                                <a className="footer-social-link" href="https://twitter.com" target="_blank">
                                    <img src={twitter} alt="twitter" width="34" height="28"/>
                                </a>
                            </li>
                            <li className="footer-fifth-item">
                                <a className="footer-social-link" href="https://youtube.com" target="_blank">
                                    <img src={youtube} alt="you tube logo" width="38" height="27"/>
                                </a>
                            </li>
                            <li className="footer-fifth-item">
                                <a className="footer-social-link" href="https://instagram.com" target="_blank">
                                    <img src={instagram} alt="Instagram logo" width="31" height="31"/>
                                </a>
                            </li>
                        </ul>
                        <a className="sign-up-link" href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </footer></>
    )
}

export default FooterSection