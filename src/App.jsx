import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import Authors from "./components/sections/Authors";
import Headlines from "./components/sections/Headlines";
function App() {
  const [data, setData] = useState(null);
  return (
    <div className="">
      <Layout>
      <Headlines/>
      <Authors/>
      </Layout>
    </div>
  );
}

export default App;
