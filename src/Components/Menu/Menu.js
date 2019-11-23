import React from "react";
import './Menu.css';


const Menu = props => {
	return (
		<div className="menu_list">
			<div onClick={props.onClick}>
				<img className="img" src={props.image} alt="image"/>
				<p>{props.name}</p>
				<p>Price: {props.price} kgs</p>
			</div>
		</div>
	)
};

export default Menu;