import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;