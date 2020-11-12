import { Router } from 'preact-router';
import { Navbar, Footer } from 'components';
import Home from 'routes/home';
import Home2 from 'routes/home2';
import 'styles/font-awesome/fontawesome';
import 'styles/font-awesome/brands';
import 'styles/grid';
import 'styles/global';
import 'styles/globalClasses';

const App = () => {
  return (
    <div id='preact_root'>
      <Navbar />
      <Router>
        <Home path='/' />
        <Home2 path='/test' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
