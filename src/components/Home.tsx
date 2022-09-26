import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Profile from "./Profile";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
