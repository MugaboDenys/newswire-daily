import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/News";

const Headlines = () => {
    const dispatch = useDispatch();
  const {articles} = useSelector(state=>state.news)
  useEffect(() => {
    dispatch(fetchArticles())
  }, []);

  return (
    <div className="">
      <div className="relative my-5 py-5- border-b-2 ">
        <h2 className="text-xl uppercase tracking-[.2rem] font-semibold ">
          Top articles of the day..
        </h2>
        <div className="w-32 h-1 mt-5 bg-green-500"> </div>
      </div>
      {articles ? (
        <div className="grid grid-cols-3 gap-5">
          {articles.map((item, index) =>
            item.urlToImage ? (
              <a
                key={index}
                href={item.url}
                className={`h-96 ${
                  index === 0 || index === 6 ? "col-span-2" : "col-span-1"
                } group overflow-clip relative group`}
              >
                <div
                  className={`bg-black/10 h-full w-full absolute z-10 shadow-inner`}
                ></div>
                <img
                  src={item.urlToImage}
                  alt=""
                  className="h-full group-hover:scale-105 duration-500 object-cover "
                />
                <h2 className="text-lg group-hover:text-indigo-400 duration-600 text-neutral-100 font-bold absolute z-10 bottom-10 px-3">
                  {item.title}
                </h2>

                {index == 0 ? (
                  <div className="">
                    <h4 className="text-sm text-emerald-400 font-thin absolute bottom-3 z-10 tracking-[.2rem] pl-2">
                      <span className="text-white">by</span> {item.author}
                    </h4>
                    <h4 className="text-sm text-emerald-400 font-thin absolute bottom-3 left-40 z-10 tracking-[.2rem] pl-2">
                      {item.publishedAt.replace(/(Z|T)/g, " ")}
                    </h4>
                  </div>
                ) : (
                  <h4 className="text-sm text-emerald-400 font-thin absolute bottom-3 z-10 tracking-[.2rem] pl-2">
                    <span className="text-white">publishedAt</span>
                    {item.publishedAt.replace(/(Z|T)/g, " ")}
                  </h4>
                )}
              </a>
            ) : null
          )}
        </div>
      ) : (
        <div className="h-[32rem] flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Headlines;
