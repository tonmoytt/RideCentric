import { FiPhoneCall } from "react-icons/fi";

import img from "./../../../../assets/Images/footerimg.svg"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-black py-10 text-white ">
            <div className="mt-10  px-20 pb-2  flex justify-between">



                <div className="flex gap-2 items-center text-2xl">
                    <FiPhoneCall className="text-green-500 mt-2"></FiPhoneCall>
                    <p className="font-semibold">+1-214-574-5900</p>
                </div>
                <div className="flex items-center gap-3 mr-3">
                    <img className="mt-2" src={img} alt="" />
                    <div className="flex gap-3">
                        <span className="text-3xl"> <span className="text-4xl ml-2">is</span> The</span>
                        <span className="font-semibold text-3xl mt-1  "> Right  Choice</span>
                    </div>
                </div>
            </div>
            <div className="mt-1bg-green-500 pb-0 w-[172px] border-b-2 border-green-500  ml-[1000px] ">


            </div>
            <div className="pl-20 pr-6 mt-10 ">
                <h1 className="text-4xl font-bold">Links</h1>
                <div className="flex gap-6 mx-2 mt-8 items-center">
                    <Link> <p className="text-sm">Blog</p></Link>
                    <Link> <p className="text-sm">Contact Us</p></Link>
                    <Link> <p className="text-sm">Safety Protocols</p></Link>
                    <Link> <p className="text-sm">Airport Instructions</p></Link>
                    <Link> <p className="text-sm">Terms & Conditions</p></Link>
                    <Link> <p className="text-sm">Cookie Policy</p></Link>
                    <Link> <p className="text-sm">Cookie Policy</p></Link>
                    <Link> <p className="text-sm">Affiliate Signup</p></Link>
                    <Link> <button className="btn px-12 ml-4 uppercase border-4 border-sky-700 rounded-full text-xl font-mono text-white hover:bg-green-500 btn-sccess bg-green-500">Reserve</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer; 