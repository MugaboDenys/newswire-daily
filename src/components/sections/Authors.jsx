import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, fetchPublishers } from "../../features/News";

const Authors = () => {
  const { publishers } = useSelector((state) => state.news);
  const [show, setShow] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublishers());
  }, []);
  console.log(publishers);
  return (
    <div className="py-10 ">
      <div className="relative my-5 py-5- border-b-2 ">
        <h2 className="text-xl uppercase tracking-[.2rem] font-semibold ">
          New Publishers
        </h2>
        <div className="w-32 h-1 mt-5 bg-green-500"> </div>
      </div>
      <div className="flex authors relative py-5 gap-5 overflow-x-scroll">
      {publishers.map((item, index) => (
        <a href="/" key={index} className="px-4 py-2 duration-300 hover:scale-105 border-2 rounded-xl">
          <h3 className="w-32 text-center text-sm tracking-[.2rem]">{item.source.name}</h3>
        </a>
      ))}
      
      </div>
      <div className="relative">
      <button className="absolute -top-16 bg-black/20 rounded-full p-2">{show && <FaChevronLeft className="text-lg"/>}</button>
      <button className="absolute -top-16 right-0 bg-black/20 rounded-full p-2">{show && <FaChevronRight className="text-lg"/>}</button>
      
      </div>
    </div>
  );
};

export default Authors;
