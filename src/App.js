import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Page/Login';
import { Homepage } from './Page/Homepage';
import { Detail } from './Page/Detail';
import { Navigation } from './Components/Navigation';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/page/:page' element={<Homepage />} />
        <Route path='/detail/:id/:original_title' element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
