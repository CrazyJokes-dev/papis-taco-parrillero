import React from 'react';
import '../styles/Menu.css';

function Menu() {
	return (
		<div className="menu-container">
			{/* <h1>Our Menu</h1> */}
			<img src="TacoMenuFirst.png" alt="Restaurant Menu" className="menu-image" />
			<img src="TacoMenuSecond.png" alt="Restaurant Menu" className="menu-image" />
		</div>
	);
}

export default Menu;