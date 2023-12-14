import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landing_page from './Components/Landing_page/Landing_page';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />
      <Landing_page />
    
    </div>
  );
}

export default App;
