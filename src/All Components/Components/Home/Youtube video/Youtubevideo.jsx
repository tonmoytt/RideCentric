import ReactPlayer from "react-player";



const Youtubevideo = () => {
    return (
        <div>

            <div className='border-l-4 border-green-500  mx-10  mb-8 '>

                <h1 className='text-4xl pl-5'>OUR
                </h1>
                <h1 className='text-5xl font-bold pt-2 pl-5'>
                    CANVAS</h1>
            </div>



            <div className='player-wrapper bg-gray-200 py-6 px-16 rounded-2xl h-[600px] '>
                <ReactPlayer
                    className='react-player'
                    controls
                    url='https://www.youtube.com/watch?v=gZaLrGX0hfA'
                    width='100%'
                    height='100%'
                    border='100%'
                />
            </div>
        </div>
    );
};

export default Youtubevideo;