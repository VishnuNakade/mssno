import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home'); // State to keep track of the selected menu item

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemClick = (itemName) => {
    setSelectedItem(itemName);
    // You can perform any other actions here based on the selected item
    console.log(`Selected item: ${itemName}`);
  };

  return (
    <div className="App">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleMenuItemClick('Home')}>Home</li>
          <li onClick={() => handleMenuItemClick('About')}>About</li>
          <li onClick={() => handleMenuItemClick('Contact')}>Contact</li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        {/* Button to toggle sidebar */}
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        {/* Content area */}
        <h1>{selectedItem}</h1>
      </div>
    </div>
  );
}

export default App;
