import './App.css';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import ExperienceList from './components/ExperienceList';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Publications from './components/Publications';
import SapPage from './components/SapPage';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          About Me
        </Link>
        <Link to="/experience" className={`nav-link ${isActive('/experience') ? 'active' : ''}`}>
          Experience
        </Link>
        <Link to="/sap" className={`nav-link ${isActive('/sap') ? 'active' : ''}`}>
          SAP Ariba
        </Link>
        <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`}>
          Resume
        </Link>
        <Link to="/publications" className={`nav-link ${isActive('/publications') ? 'active' : ''}`}>
          Publications
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>Pravir Chugh - Software Engineer</title>
        <meta name="description" content="Software Engineer specializing in AI & Systems at UCLA" />
      </Helmet>
      
      <div className="app-container">
        <ScrollToTop />
        <Navigation />
        
        <main className="main-content">
          <div className="page-container">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/experience" element={<ExperienceList />} />
              <Route path="/sap" element={<SapPage />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/publications" element={<Publications />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
