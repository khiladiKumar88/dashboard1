import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import CustomerManagement from './components/CustomerManagement';
import Services from './components/Services';
import AssessmentReports from './components/AssessmentReports';
import MaintenanceAgreements from './components/MaintenanceAgreements';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPage, setSelectedPage] = useState('dashboard');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  const toggleSignup = () => setShowSignup((prev) => !prev);

  const renderPage = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'userManagement':
        return <UserManagement />;
      case 'customerManagement':
        return <CustomerManagement />;
      case 'services':
        return <Services />;
      case 'assessmentReports':
        return <AssessmentReports />;
      case 'maintenanceAgreements':
        return <MaintenanceAgreements />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return showSignup ? (
      <Signup onSignup={handleLogin} toggleLogin={toggleSignup} />
    ) : (
      <Login onLogin={handleLogin} toggleSignup={toggleSignup} />
    );
  }

  return (
    <div className="app-container">
      <Sidebar onSelect={setSelectedPage} />
      <main className="main-content">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;











// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import UserManagement from './components/UserManagement';
// import CustomerManagement from './components/CustomerManagement';
// import Services from './components/Services';
// import AssessmentReports from './components/AssessmentReports';
// import MaintenanceAgreements from './components/MaintenanceAgreements';
// import Profile from './components/Profile';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [selectedPage, setSelectedPage] = useState('dashboard');
//   const [showSignup, setShowSignup] = useState(false);

//   const handleLogin = () => setIsAuthenticated(true);
//   const handleLogout = () => setIsAuthenticated(false);
//   const toggleSignup = () => setShowSignup((prev) => !prev);

//   const renderPage = () => {
//     switch (selectedPage) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'userManagement':
//         return <UserManagement />;
//       case 'customerManagement':
//         return <CustomerManagement />;
//       case 'services':
//         return <Services />;
//       case 'assessmentReports':
//         return <AssessmentReports />;
//       case 'maintenanceAgreements':
//         return <MaintenanceAgreements />;
//       case 'profile':
//         return <Profile />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   if (!isAuthenticated) {
//     return showSignup ? (
//       <Signup onSignup={handleLogin} />
//     ) : (
//       <Login onLogin={handleLogin} />
//     );
//   }

//   return (
//     <div className="app-container">
//       <Sidebar onSelect={setSelectedPage} />
//       <main className="main-content">
//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//         {renderPage()}
//       </main>
//     </div>
//   );
// }

// export default App;





















// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import UserManagement from './components/UserManagement';
// import CustomerManagement from './components/CustomerManagement';
// import Services from './components/Services';
// import AssessmentReports from './components/AssessmentReports';
// import MaintenanceAgreements from './components/MaintenanceAgreements';
// import Profile from './components/Profile';
// import './App.css';

// function App() {
//   const [selectedPage, setSelectedPage] = useState('dashboard');

//   const renderPage = () => {
//     switch (selectedPage) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'userManagement':
//         return <UserManagement />;
//       case 'customerManagement':
//         return <CustomerManagement />;
//       case 'services':
//         return <Services />;
//       case 'assessmentReports':
//         return <AssessmentReports />;
//       case 'maintenanceAgreements':
//         return <MaintenanceAgreements />;
//       case 'profile':
//         return <Profile />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar onSelect={setSelectedPage} />
//       <main className="main-content">
//         {renderPage()}
//       </main>
//     </div>
//   );
// }

// export default App;
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
