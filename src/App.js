import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';
import MainContent from './component/MainConent';
import Collection from './component/Collection';
import Essential from './component/Essential';
import About from './component/About';
import Copyright from './component/Copyright';


function App() {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Essential />
        <Collection />
        <About />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
