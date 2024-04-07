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
		<div className="my-10 pb-5">
			<ul className="flex gap-10 font-sans">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							to={link.to}
							className={`block px-2 pb-2 border-b-2 text-2xl font-semibold transition duration-300 ease-in-out${
								location.pathname === link.to
									? "border-b-2 border-blue-300"
									: ""
							}`}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Nav;
