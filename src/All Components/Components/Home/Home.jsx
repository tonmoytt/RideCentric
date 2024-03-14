import AutoSlider from "./AutoSlider/AutoSlider";
import AutoslideRideCentric from "./AutoslideRideCentric/AutoslideRideCentric";
import Footer from "./Footer/Footer";
import Marque from "./Marque/Marque";
import OURCAPABILITIES from "./OURCAPABILITIES.jsx/OURCAPABILITIES";
 
import UpAndDownSlider from "./UpAndDownSlider/UpAndDownSlider";
import Youtubevideo from "./Youtube video/Youtubevideo";

 

const Home = () => {
    return (
        <div>
            <AutoSlider></AutoSlider>
            <Marque></Marque>
           
            <UpAndDownSlider></UpAndDownSlider>
            <OURCAPABILITIES></OURCAPABILITIES>
            <Youtubevideo></Youtubevideo>
            <AutoslideRideCentric></AutoslideRideCentric>
            <Footer></Footer>
        </div>
    );
};

export default Home;