import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [clickedSearch, setClickedSearch] = useState(false)
  return (
    <div className="max-w-6xl mx-auto py-10 ">
      <div className="flex justify-between">
      <a href="/">
        <img src={logo} className="h-10" />
      </a>
      <div className="flex items-center gap-6">
        {clickedSearch ?
         
         <input type="text" className="border-b-2 border-emerald-400 outline-none w-[20rem] placeholder:tracking-[.2rem] placeholder:text-sm px-2 placeholder:text-neutral-400" placeholder="Search..." />     :
        ["News","Events","Business", "Markets"].map((link,index)=>(
            <a key={index} href="/" className="text-sm upp tracking-[.2rem] font-semibold duration-200 hover:text-emerald-400">
                {link}
            </a>
        ))}
    
        <FaSearch onClick={()=>{setClickedSearch(!clickedSearch)}} className="cursor-pointer"/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
