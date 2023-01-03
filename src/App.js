import './App.scss'
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
    </div>
  );
}

export default App;
