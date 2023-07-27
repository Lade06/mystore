import React from "react";
import Navbar from "./navbar";
import Store from "./Contents";
import Form from "./contactform";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Store />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
