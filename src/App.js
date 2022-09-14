import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import Footer from './component/Footer';


function App() {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
      </main>
      <Footer />
    </div>
  );
}

export default App;
