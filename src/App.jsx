import "./App.css";
import object from "./assets/images/OBJECTS.png";
import chat from "./assets/images/chat.png";
import icon from "./assets/images/.png";
import img from "./assets/images/Img.png";
import oobject from "./assets/images/object.png";
import icons from "./assets/images/icon.png";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={object} alt="" />
          <h1>RouteX</h1>
        </div>

        <div className="nav">
          <ul>
            <li>
              <a className="hom" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="help">
          <img src={chat} alt="" />
          <div className="need">
            <h4>Need help?</h4>
            <a href="tel:+13075550133">(307) 555-0133</a>
          </div>
        </div>
      </div>
      <div className="main">
        <h2>
          Journey with Confidence <span>Migrate</span> with Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rcus nunc. Duis egestas ac ante sed tincidunt.
        </p>
        <button>
          Learn More <img src={icon} alt="" />
        </button>
      </div>
      <div className="container_main">
        <div className="images">
          <img src={img} alt="" />
        </div>
        <div className="main_nav">
          <div className="main_h4">
            <h4>About Us</h4>
            <img src={oobject} alt="" />
          </div>
          <h3>Unknown Wanderlust Your Journey into</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className="user_main">
          <div className="link">
            <div className="main_icon">
              <img src={icons} alt="" />
              <h4>Safety Guides</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
          </div>
          <div className="link">
            <div className="main_icon">
              <img src={icons} alt="" />
              <h4>Passport Assistance</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
          </div>
          </div>
        </div>
        <button>
            Learn More <img src={icon} alt="" />
          </button>
      </div>
    </div>
  );
}

export default App;
