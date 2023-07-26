// import logo from './logo.svg';
import "./App.css";
import Store from "./Components/Contents";
import Footer from "./Components/Footer";
import Form from "./Components/contactform";
import ContactForm from "./Components/form";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Store />
      <Form />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
