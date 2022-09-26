import logo from './logo.svg';
import './App.css';
import AirQuiz from './components/AirQuiz.js';

function App() {
  return (
    <div className="App">
      <div className='heading'>
        Check Your Knowledge of Aviation </div>
        <h2> Participate in Quiz and amplify your engines.</h2>
      
      <AirQuiz />
    </div>
  );
}

export default App;
