import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import newsSlice from "./features/News";
import "./index.css";

const store = configureStore({
  reducer :{
    news : newsSlice,
  }
})
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <Header />
      <Navbar />
      <App />
    </Provider>
  
);
