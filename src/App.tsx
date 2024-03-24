import './App.css';

import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (  
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
  );
}

export default App;