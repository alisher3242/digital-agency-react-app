import './App.css';
import play from "./images/play-video.png"
import blueImage from "./images/image-blue.png"
import icon_one from "./images/icon-1.png"
import icon_two from "./images/icon-2.png"
import icon_three from "./images/icon-3.png"
import men_one from "./images/men-1.png"
import men_two from "./images/men-2.png"
import left_arrow from "./images/left-arrow.png"
import right_arrow from "./images/arrow-right.png"

function MainSection() {
    return (
        <>
        <div className="conteiner hero-conteiner">
            <span className="hero-span">Smart Business</span>
            <h1 className="hero-hedding">Connecting people is our <span className="business">business</span></h1>
            <p className="hero-text">As a rule the organization settles on the inventive and media choices. Regularly it
                supplies supporting statistical.</p>
            <div className="hero-buttons">
                <a className="hero-link" href="#" target="_blank">Get Started</a>
                <button className="play-video" type="button">
                    <img className="play" src={play} alt="play image" width="29" height="29"/> Play Video
                </button>
            </div>
        </div>

        <div className="conteiner about-conteiner" id="about_page">
            <div className="about-right">
                <span className="about-us">About us</span>
                <h2 className="about-hedding">Platform Dedicated To Promoting</h2>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis
                    ultrices consectetur adipiscing elit. fringilla quisque pulvinar..</p>
                <a className="about-link" href="#" target="_blank">What we do? </a>
            </div>
            <div className="about-left">
                <img className="blue-image" src={blueImage} alt="hand on the blue window" width="486"
                    height="486"/>
            </div>
        </div>

        <div className="conteiner customers-conteiner" id="customer_page">
            <div className="customers-top">
                <h2 className="customers-top-hedding">How We Work</h2>
                <ul className="customers-list">
                    <li className="customers-item">
                        <img className="icon-1" src={icon_one} alt="rocket icon" width="150" height="150"/>
                        <h4 className="customers-item-hedding">Start Design </h4>
                        <p className="customers-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                            suscipit adipiscing elit.</p>
                    </li>
                    <li className="customers-item">
                        <img className="icon-2" src={icon_two} alt="setting icon" width="150" height="150"/>
                        <h4 className="customers-item-hedding">Go to Code</h4>
                        <p className="customers-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                            suscipit adipiscing elit.</p>
                    </li>
                    <li className="customers-item">
                        <img className="icon-3" src={icon_three} alt="delivery-clipboard icon" width="150"
                            height="150"/>
                        <h4 className="customers-item-hedding">Final Deliverd</h4>
                        <p className="customers-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                            suscipit adipiscing elit.</p>
                    </li>
                </ul>
            </div>
            <div className="customers-bottom">
                <div className="customer-bottom-left">
                    <h2 className="customers-bottom-hedding">What Our Customers are Saying.</h2>
                    <div className="two-mens">
                        <div className="bottom-left-first">
                            <img className="men-1" src={men_one} alt="men for glasses" width="61" height="61"/>
                            <div className="text-and-name">
                                <p className="men-text">I recently concluded a complete messaging revamp for an exciting com
                                </p>
                                <div className="name-and-jobs">
                                    <div className="name-for-men">
                                        <span className="line-for-men"> </span>
                                        <h6 className="name-men">Leo Aminoff</h6>
                                    </div>
                                    <p className="jobs-for-mens">Product Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-left-second">
                            <img className="men-2" src={men_two} alt="men on the street" width="61" height="61"/>
                            <div className="text-and-name">
                                <p className="men-text">I recently concluded a complete messaging revamp for an excitin
                                    company</p>
                                <div className="name-and-jobs">
                                    <div className="name-for-men">
                                        <span className="line-for-men"> </span>
                                        <h6 className="name-men">Carla Dias</h6>
                                    </div>
                                    <p className="jobs-for-mens">Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer-bottom-right">
                    <a className="arrow-link" href="#" >
                        <div className="left-arrow-div">
                            <img className="left-arrow" src={left_arrow} alt="left arrow" width="9"
                                height="18"/>
                        </div>
                    </a>
                    <a className="arrow-link" href="#" >
                        <div className="right-arrow-div">
                            <img className="right-arrow" src={right_arrow} alt="right arrow" width="9"
                                height="18"/>
                        </div>
                    </a>
                </div>
            </div>
        </div></>
    )
}

export default MainSection