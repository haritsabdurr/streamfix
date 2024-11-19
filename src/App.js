import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Page/Homepage';
import { Detail } from './Page/Detail';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detail/:id/:original_title' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
