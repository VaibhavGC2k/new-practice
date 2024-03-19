import logo from './logo.svg';
import './App.css';
import SimpleCompo from './components/SimpleCompo';
import Clock from './components/Clock';
import OtpInput from './components/OtpInput';

function App() {
  return (
    <>
      <div className='App'>
        <h2>OTP</h2>
        <SimpleCompo/>
        {/* <Clock /> */}
        {/* <OtpInput/> */}
      </div>
    </>
  );
}

export default App;
