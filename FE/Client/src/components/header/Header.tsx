// Header.tsx
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Account from "./Account";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	// Nav part
	const HeaderLink = [
		{ to: "/", label: "Home" },
		{ to: "/learn", label: "Learn" },
		{ to: "/characters-ai", label: "Characters AI" },
		{ to: "/about", label: "About" },
	];
	const mobileNav = () => {
		setIsOpen((prevState) => !prevState);
	};
	// Search part
	const HandleSearch = (searchTerm: string) => {
		console.log("Check search: ", searchTerm);
	};
	// Account part
	const Notification: number = 2;
	return (
		<header className="ml-auto mr-auto max-w-screen-xl px-5 py-2">
			<div className="flex justify-between items-center">
				{/* Nav mobile & tablet */}
				<div className="relative lg:hidden md:block">
					<button className="" onClick={mobileNav}>
						<FontAwesomeIcon icon={faBars} />
					</button>
					{isOpen && (
						<div className="lg:hidden w-1/3 h-screen rounded fixed left-0 bg-white z-50 flex flex-col items-center">
							<div className="mt-10 mx-auto max-md:hidden">
								<Search onSearch={HandleSearch} />
							</div>
							<Nav links={HeaderLink} />
						</div>
					)}
				</div>
				{/* Logo */}
				<Link
					to="/"
					className="text-2xl font-bold text-blue-700 max-lg:ml-36 max-md:ml-10"
				>
					VocabTutor
				</Link>
				{/* Nav desktop */}
				<div className="max-lg:hidden">
					<Nav links={HeaderLink} />
				</div>
				{/* Search */}
				<div className="flex max-lg:hidden">
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
