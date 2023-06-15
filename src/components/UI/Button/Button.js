import React from "react"
import styles from "styled-components"

import "./Button.modules.css"

const Button = (props) => {
	return (
		<button type={props.type} className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button
