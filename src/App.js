import './App.css';
import { Route, Routes } from "react-router-dom";
import FuzzyOverlayExample from './pages/Home';
import ScrollTop from './components/scrollTop/ScrollTop';
import { About } from './pages/About';
import ApplyForm from './components/ApplyNow/ApplyForm';
import ProjectShowcase from './components/Projects/ProjectShowcase';
import { AnimatedPinDemo } from './components/Bibliography/ui/Cardinfo';
import AnimatedHeader from './components/Header/AnimatedHeader';
import { ContactForm } from './components/ContactUs/ContactForm';

function App() {
  return (
    <ScrollTop>
      <Routes>
        <Route path="/" element={<FuzzyOverlayExample />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<ApplyForm/>} />
        <Route path="projects" element={<ProjectShowcase/>} />
        <Route path="biblio" element={<AnimatedPinDemo/>} />
        <Route path="header" element={<AnimatedHeader/>} />
        <Route path="contactus" element={<ContactForm/>} />
      </Routes>
    </ScrollTop>
  );
}

export default App;
