import logo from './logo.svg';
import './App.css';
import SimpleCompo from './components/SimpleCompo';
import Clock from './components/Clock';

function App() {
  return (
    <>
      <div className='App'>
        <h2>hooks</h2>
        <SimpleCompo/>
        {/* <Clock /> */}
      </div>
    </>
  );
}

export default App;
