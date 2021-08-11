import './App.css';
import Class from './components/Class/Class';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Pricing from './components/Pricing/Pricing';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div>
      <Header></Header>
      <Class></Class>
      <Courses></Courses>
      <Pricing></Pricing>
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
