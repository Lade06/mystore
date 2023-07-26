// import logo from './logo.svg';
import "./App.css";
import Store from "./Components/Contents";
import Footer from "./Components/Footer";
import Form from "./Components/contactform";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Store />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
