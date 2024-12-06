import React from 'react';

const menuItems = [
  { category: 'Starters', items: ['Spring Rolls', 'Garlic Bread'] },
  { category: 'Mains', items: ['Grilled Chicken', 'Pasta Alfredo'] },
  { category: 'Desserts', items: ['Cheesecake', 'Ice Cream'] },
];

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Our Menu</h2>
        {menuItems.map((menu, index) => (
          <div key={index}>
            <h3>{menu.category}</h3>
            <ul>
              {menu.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
