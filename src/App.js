import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/common/NavBar';
import AnimatedFooter from './components/common/Footer';
import InfrastructureHero from './pages/Home';
import ImageSlider from './components/HomeGallery/gallery';

function App() {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col font-inter">
      <NavBar />
      <div className="flex-grow">
        <InfrastructureHero/>
      </div>
      <ImageSlider/>
      <AnimatedFooter />
    </div>
  );
}

export default App;
