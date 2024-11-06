import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => (
  <aside className="sidebar">
    <nav className="nav-tree">
      <ul>
        <li onClick={() => onSelect('dashboard')}>Dashboard
          {/* <ul>
            <li>Overview</li>
            <li>Statistics</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('userManagement')}>User Management
          {/* <ul>
            <li>View Users</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('customerManagement')}>Customer Management
          {/* <ul>
            <li>View Customers</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('services')}>Services
          {/* <ul>
            <li>View Services</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('assessmentReports')}>Assessment Reports
          {/* <ul>
            <li>View Assessment Reports</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('maintenanceAgreements')}>Maintenance Agreements
          {/* <ul>
            <li>View Maintenance Agreements</li>
          </ul> */}
        </li>
        <li onClick={() => onSelect('profile')}>Profile
          {/* <ul>
            <li>View Profile</li>
          </ul> */}
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
