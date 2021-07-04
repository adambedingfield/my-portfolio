import React from 'react';
// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

// App function to display html contents
// Header and footer appear on all pages
function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
