import { Router } from 'preact-router';
import { Navbar, Footer } from 'components';
import Home from 'routes/home';
import 'styles/font-awesome/fontawesome';
import 'styles/font-awesome/brands';
import 'styles/grid';
import 'styles/global';
import 'styles/globalClasses';

const App = () => {
  return (
    <div id='app'>
      <Navbar />
      <Router>
        <Home path='/' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
