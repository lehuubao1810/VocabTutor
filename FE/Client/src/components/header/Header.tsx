// Header.tsx
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Account from "./Account";
import Search from "./Search";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	// Nav part
	const HeaderLink = [
		{ to: "/", label: "Home" },
		{ to: "/content", label: "Content" },
		{ to: "/about", label: "About" },
	];
	// Search part
	const HandleSearch = (searchTerm: string) => {
		console.log("Check search: ", searchTerm);
	};
	// Account part
	const Notification: number = 2;
	return (
		<header className="mx-10">
			<div className="flex justify-between items-center">
				{/* Logo */}
				<Link to="/" className="text-2xl font-bold text-blue-700">
					VocabTutor
				</Link>
				{/* Nav */}
				<div className="pt-5">
					<Nav links={HeaderLink} />
				</div>
				{/* Search */}
				<div>
					<Search onSearch={HandleSearch} />
				</div>
				{/* Account */}
				<div>
					<Account notificationCount={Notification} />
				</div>
			</div>
		</header>
	);
};

export default Header;
