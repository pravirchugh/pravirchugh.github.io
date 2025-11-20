import './App.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import ExperienceList from './components/ExperienceList';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Publications from './components/Publications';
import SapPage from './components/SapPage';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ChevronDown } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          About Me
        </Link>
        <div
          className={`nav-item dropdown ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/experience" className={`nav-link ${isActive('/experience') ? 'active' : ''}`}>
            Experience
          </Link>
          <button
            type="button"
            className="dropdown-toggle"
            aria-label="Toggle Experience menu"
            onClick={handleDropdownToggle}
          >
            <ChevronDown size={16} />
          </button>
          <div className="dropdown-menu">
            <Link to="/sap" className="dropdown-link">
              My Work @ SAP
            </Link>
          </div>
        </div>
        <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
          Projects
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
              <Route path="/projects" element={<Projects />} />
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
