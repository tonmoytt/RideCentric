import { Player } from "video-react";
import "./style.css"
import song from "./../../../../assets/Images/10000000_765957625153124_2984358030730860744_n.mp4"



const Youtubevideo = () => {
    return (
        <div>

            <div className='border-l-4 border-green-500 mx-10  mb-8 '>

                <h1 className='text-4xl pl-5'>OUR
                </h1>
                <h1 className='text-5xl font-bold pt-2 pl-5'>
                    CANVAS</h1>
            </div>

            <video className="mt-20"
                controls
                src={song}
            />/




        </div>
    );
};

export default Youtubevideo;