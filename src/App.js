import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registrasi from './components/Registrasi';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route path={["/home", "/"]} exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registrasi" component={Registrasi} />
        </>
      </Router>
    </div>
  );
}

export default App;
