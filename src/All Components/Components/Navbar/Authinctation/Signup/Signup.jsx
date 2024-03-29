import { Link, useNavigate } from "react-router-dom";
import img from "./../../../../../assets/Images/car signup.jpg"
import { useContext, useState } from "react";
import { AuthConnect } from "../Authinctation";
import swal from "sweetalert";

const Signup = () => {
    const [password, setpassword] = useState('')
    const { CreateUser,GoogleSignin } = useContext(AuthConnect)

    const Navigate=useNavigate()
    const Navigate1=useNavigate()

    const HandleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const name2 = form.name2.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, name2, email, password }
        console.log(user);

        setpassword('')
        if (password.length < 6) {
            setpassword('Password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding special character')
            return;
        }

        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("Success!", "Please Login", "success");
                event.target.reset()
                Navigate("/login")
            })
            .catch(error => {
                console.error(error)
            })



    }


    const GoogleLogin=() => {
        console.log('clicked');
        GoogleSignin()
            .then(result => {
                console.log(result.user);
                swal("Success!", "Google Registertion Successfully", "success");
                Navigate1('/')
            })
            .catch(error => {
                console.error(error);
            })
        }

     
    return (
        <div>

            <div className="  bg-base-200">
                <div className=" flex justify-between  flex-col lg:flex-row">

                    <img className="h-[500px] w-[700px] rounded-sm" src={img} />

                    <div className="pr-2 md:pr-10 ">
                        <div className="mt-10 mb-8">
                            <h1 className="text-2xl text-green-600 font-bold mb-1 uppercase">
                                <span className="text-red-300">for</span>
                                <span className="text-blue-400 pl-2">your</span> Ridecentric</h1>
                            <h1 className="text-xl text-black font-semibold">Signup today</h1>
                        </div>

                        <form onSubmit={HandleSignup}>
                            <div className="flex gap-7">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">First name<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="text" name="name" placeholder="" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Last name<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="text" name="name2" placeholder="" className="input input-bordered" required />
                                </div>

                            </div>

                            <div className="flex gap-7">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Email<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="email"
                                        name="email" placeholder="exemple@gmail.com" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Password<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="" className="input input-bordered" required />
                                </div>

                            </div>

                            <div className="mt-3 flex justify-between items-center">

                                <div className="flex items-center">
                                    <p></p>
                                </div>

                                <div className="flex mr-4   text-sm">
                                    <p className="text-gray-800 font-thin">Sign up with ?</p>
                                    <button onClick={GoogleLogin} className=" text-blue-400"> <Link to="/signup"> Google</Link></button>
                                </div>
                            </div>





                            <div className="mt-6 flex justify-between">
                                <input className="btn btn-error rounded-2xl btn-outline" type="submit" value="Register" />
                                <button className="btn btn-success rounded-full px-8 btn-outline"><Link to="/login">Login</Link> </button>
                            </div>
                        </form>

                        <div className='bg-red-200 w-[480px] rounded-xl'>
                            {
                                password && <p className='mt-4   rounded-2xl py-2 font-semibold text-center text-2xl '> {password}</p>
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Signup;