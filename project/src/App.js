import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coutndown from './pages/Countdown';
import Configuration from './pages/Configuration';
import Login from './pages/Login';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='countdown' element={<Coutndown />} />
          <Route path='configuration' element={<Configuration />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
