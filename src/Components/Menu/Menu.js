import React from "react";

const Menu = props => {
	return (
		<div className="menu_list">
			<div onClick={props.onClick}>
				<img src={props.image} alt=""/>
				<p>{props.name}</p>
				<p>Price: {props.price} kgs</p>
			</div>
		</div>
	)
};

export default Menu;