import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Dropdown = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const [isHovered7, setIsHovered7] = useState(false);
    return (
        <div className="bg-[#0F1035] text-white py-4">
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        01</span>

                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            Home
                        </a>
                        {isHovered && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 2 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        02</span>
                    <li className="flex gap-3 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}>
                            Ride Reimagined
                        </a>
                        {isHovered1 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 3 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        03</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}>
                            Feelt Exibit
                        </a>
                        {isHovered2 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 4 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        04</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered3(true)}
                            onMouseLeave={() => setIsHovered3(false)}>
                            Pace of mind
                        </a>
                        {isHovered3 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 5 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        05</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered4(true)}
                            onMouseLeave={() => setIsHovered4(false)}>
                            Teach savvy
                        </a>
                        {isHovered4 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 6 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        06</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered5(true)}
                            onMouseLeave={() => setIsHovered5(false)}>
                            About us
                        </a>
                        {isHovered5 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 7 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        07</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered6(true)}
                            onMouseLeave={() => setIsHovered6(false)}>
                            Testemonial
                        </a>
                        {isHovered6 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>
            {/* 8 */}
            <ul className="ml-32 text-sm pb-6 ">
                <div className="flex">
                    <span className="text-start text-gray-400 mt-2">
                        08</span>
                    <li className="flex gap-8 items-center ">
                        <a className="text-2xl font-thin ml-3 uppercase hover:text-4xl "
                            onMouseEnter={() => setIsHovered7(true)}
                            onMouseLeave={() => setIsHovered7(false)}>
                            Contact us
                        </a>
                        {isHovered7 && <FaArrowRightLong className="text-3xl text-green-400"></FaArrowRightLong>}
                    </li>
                </div>
            </ul>

            <div>

            </div>
        </div>
    );
};

export default Dropdown;