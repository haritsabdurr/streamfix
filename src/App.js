import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Homepage } from './Page/Homepage';
import { Detail } from './Page/Detail';
import { Navigation } from './Components/Navigation';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/page/:page' element={<Homepage />} />
        <Route path='/detail/:id/:original_title' element={<Detail />} />
        <Route path='/' element={<Navigate to='/page/:page' />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
