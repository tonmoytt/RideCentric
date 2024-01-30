import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-[#1F2544]">
        <div className="mx-10 text-white ">
            <div className="navbar  ">
                <div className="flex-1">
                    <a className="btn btn-ghost font-semibold font-sans text-3xl text-green-400">Ridecentric</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal  items-center">
                        <li><Link to="signup"><a className=" text-lg hover:underline ">Signup</a></Link></li>
                        <li  className=" text-lg"> <Link to="login"><a>Login</a></Link></li>
                        <li>
                            
                        <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <Link to="/drop">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"

                                            strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                    </Link>
                                </div>
                                <ul className="  text-black">

                                </ul>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;