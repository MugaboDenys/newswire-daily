import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, fetchPublishers } from "../../features/News";

const Authors = () => {
  const { publishers } = useSelector((state) => state.news);
  const [show, setShow] = useState(true);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublishers());
  }, []);

  useEffect(() => {
    const container = document.querySelector(".authors");
    setContainerWidth(container.offsetWidth);
    const handleScroll = () => {
      setScrollPos(container.scrollLeft);
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPos === 0) {
      setShowLeftBtn(false);
    } else {
      setShowLeftBtn(true);
    }
    if (scrollPos + containerWidth >= containerWidth * publishers.length) {
      setShowRightBtn(false);
    } else {
      setShowRightBtn(true);
    }
  }, [scrollPos, containerWidth, publishers.length]);

  const handleLeftClick = () => {
    const container = document.querySelector(".authors");
    container.scrollBy({
      left: -containerWidth,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    const container = document.querySelector(".authors");
    container.scrollBy({
      left: containerWidth,
      behavior: "smooth",
    });
  };

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
      <button style={{ visibility: showLeftBtn ? "visible" : "hidden" }}
        onClick={handleLeftClick} className="absolute -top-16 bg-black/20 rounded-full p-2">{show && <FaChevronLeft  className="text-lg"/>}</button>
      <button style={{ visibility: showRightBtn ? "visible" : "hidden" }}
        onClick={handleRightClick} className="absolute -top-16 right-0 bg-black/20 rounded-full p-2">{show && <FaChevronRight className="text-lg"/>}</button>
      
      </div>
    </div>
  );
};

export default Authors;
