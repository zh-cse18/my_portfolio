import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MyRouter from './components/pages/MyRouter';
import Navigation from './components/pages/Navigation';




function App() {
  return (
    <div className="App">
      <Router>       
        <Navigation></Navigation>
        <MyRouter></MyRouter>
      </Router>
      
    </div>
  );
}

export default App;
