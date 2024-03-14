import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthConnect } from "./Authinctation/Authinctation";

import img from "./../../../assets/Images/outbal.webp"
import img1 from "./../../../assets/Images/navbar main picture.svg"
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logout } = useContext(AuthConnect)

    const Navigate = useNavigate()
    const Hendlelogout = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // logout set
                logout()
                Swal.fire({
                    title: "Deleted!",
                    text: "Sign Out Successful.",
                    icon: "success"
                });
                // navigate home
                Navigate('/')
            }
        });



    }
    return (
        <div className="bg-gray-900  ">
            <div className="mx-8 text-white ">
                <div className="navbar  ">
                    <div className="flex-1">
                        
                        <img src={img1} alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal  items-center">
                            <div>
                                {
                                    user ? <>
                                        <div className="flex items-center">
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
                                            {/* part 2 */}
                                            <div>
                                                <button onClick={Hendlelogout}>
                                                    <img className="h-10 w-10   rounded-full" src={img} alt="" />
                                                </button>

                                            </div>
                                        </div>
                                    </>


                                        :


                                        <>
                                            <div className="flex items-center">


                                                <div className="flex">


                                                    <li><NavLink to="signup"><a className=" text-lg hover:underline hover:text-blue-500 ">Signup</a></NavLink></li>
                                                    <li className=" text-lg hover:text-red-400 "> <NavLink to="login"><a>Login</a></NavLink>
                                                    </li>
                                                </div>

                                                {/* part 2 */}

                                                <li>

                                                    <div className="dropdown hover:text-red-400">
                                                        <div tabIndex={0} role="button" className="btn btn-ghost
                                                        hover:text-green-600 btn-circle">
                                                            <Link to="/drop">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"

                                                                    strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                                            </Link>
                                                        </div>
                                                        <ul className="  text-black">

                                                        </ul>

                                                    </div>
                                                </li>
                                            </div>
                                        </>

                                }
                            </div>



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;