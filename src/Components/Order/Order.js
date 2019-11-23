import React from "react";


const Order = props => {
	return (
		<div className="order_div">
			<p>{props.text}</p>
			{props.requestedItems.map((ingr, key) => {
				return (
					<div className="orderDiv" key={key}>
						<p>{ingr.name}</p>
						<span>{ingr.count} x</span>
						<span>{ingr.price} kgs</span>
						<button className="btn" onClick={() => props.remove(key)}> X </button>
					</div>
				)
			})}
			<p className="totalPrice">Total price: {props.totalPrice} KGS</p>
		</div>
	)
};

export default Order;