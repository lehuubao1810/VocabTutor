import React from "react";
import Header from "../components/header/Header";

type Props = {
	// type of the props
};

export const Learn: React.FC<Props> = (props) => {
	console.log(props);
	return (
		<>
			<Header />
		</>
	);
};
