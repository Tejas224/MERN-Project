import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

export const backend_url = 'https://shopper-backend-ni1w.onrender.com';
export const currency = '₹';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
