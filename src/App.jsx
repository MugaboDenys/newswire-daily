import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [newFetch, seNewFetch] = useState(false);
  const [data, setData] = useState(null);
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2023-04-17&" +
    "sortBy=popularity&" +
    "apiKey=dfef52a2b4a1481aa417292c08f4f189";
  useEffect(() => {
    async function newData() {
      try {
        let res = await fetch(url);
        const data = await res.json();
        setData(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    newData();
  }, [newFetch]);

  console.log(data);
  return (
    <div className="App max-w-6xl mx-auto">
      {data ? (
        <div className="grid grid-cols-3 gap-5">
          {data.map((item, index) =>
            index < 10 && item.urlToImage ? (
              <div
                key={index}
                className={`h-96 ${
                  index === 0 && "col-span-2"
                } group overflow-clip relative`}
              >
                <div
                  className={`bg-black/10 h-full w-full absolute z-10 shadow-inner`}
                ></div>
                <img
                  src={item.urlToImage}
                  alt=""
                  className="h-full group-hover:scale-105 duration-500 object-cover "
                />
                <h2 className="text-lg text-neutral-100 font-bold absolute z-10 bottom-10 px-3">
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
              </div>
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
}

export default App;
