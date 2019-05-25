import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

/**
 * here you have declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */
const Alert = props => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
Alert.propTypes = {
	text: PropType.string
};

ReactDOM.render(<Alert text="This is a primary alert-check it out!" />, document.querySelector("#myDiv"));
