import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pill, Package, Users, Layout } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8" />
            <span className="text-xl font-bold">ModernRx</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
            >
              <Layout className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/inventory"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/inventory')}`}
            >
              <Package className="h-4 w-4" />
              <span>Inventory</span>
            </Link>
            
            <Link
              to="/prescriptions"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/prescriptions')}`}
            >
              <Pill className="h-4 w-4" />
              <span>Prescriptions</span>
            </Link>
            
            <Link
              to="/customers"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/customers')}`}
            >
              <Users className="h-4 w-4" />
              <span>Customers</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar