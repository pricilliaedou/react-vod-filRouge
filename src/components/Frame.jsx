import background from "../assets/images/background.png";
import Header from "./Header";
import Footer from "./Footer";

const Frame = ({ children }) => (
  <div className='container' style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <main>{children} </main>
    <Footer />
  </div>
);
export default Frame;
