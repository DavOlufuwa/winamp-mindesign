import './App.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import History from './components/History/History';
import Intros from './components/Intros/Intros';
import News from './components/News/News';



function App() {

  return (   
    <div>
      <Header/>
      <Intros/>
      <History/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
