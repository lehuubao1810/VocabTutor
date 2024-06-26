// Nav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

/* This is Nav reuse for all pages.
 How about use it ? 
     + Create list of Nav for which page want to use.
     + Call it in each page.
     For example:
     ...
     const headerLinks = [
    { to: "/", label: "Home" },
    { to: "/content", label: "Content" },
    { to: "/about", label: "About" },
    // add more if want 
    ];
    ...
    return (
    <header>
      <Nav links={headerLinks} />
    </header>
  );
};
*/

type NavProps = {
	links: { to: string; label: string }[];
};

const Nav: React.FC<NavProps> = ({ links }) => {
	const location = useLocation();
	return (
		<ul className="mt-3 flex gap-10 font-sans max-lg:flex-col max-lg:p-5   max-xl:gap-5">
			{links.map((link, index) => (
				<li key={index}>
					<Link
						to={link.to}
						className={`block px-2 pb-2 border-b-2 text-lg font-semibold transition duration-300 ease-in-out hover:border-blue-300 max-lg:text-center max-md:mt-5 ${
							location.pathname === link.to ? " border-blue-600" : ""
						}`}
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Nav;
