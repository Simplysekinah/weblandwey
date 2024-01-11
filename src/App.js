import './App.css';
import { Routes, Route} from 'react-router-dom'
import Main from './Components/Main';
import Second from './Components/Second';
import Third from './Components/Third';
import Props from './Components/Props';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/one' element={<Second/>}/>
        <Route path='/two' element={<Third/>}/>
        <Route path='/props' element={<Props/>}/>
      </Routes>
    </div>
  );
}

export default App;
