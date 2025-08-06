import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

let name = "This is JSX"
function App() {
  return (
    <>
    <Header name="Header prop" />
    <SideBar />
    <Footer  />
    </>
    
  );
}

export default App;
