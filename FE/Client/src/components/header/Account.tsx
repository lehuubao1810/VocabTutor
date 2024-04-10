import React from "react";
import Avatar from "../../assets/ImagesExample/Avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface AccountProps {
	notificationCount: number;
}

const Account: React.FC<AccountProps> = ({ notificationCount }) => {
	return (
		<div className="flex items-center space-x-4">
			{/* Button with '+' icon */}
			<button className="w-9 h-9 border-2 rounded-full bg-blue-600 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
				<FontAwesomeIcon icon={faPlus} className="text-white" />
			</button>

			{/* Notification button */}
			<button className="relative w-10 h-10 border-2 flex justify-center items-center rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 animate-shake">
				<span className="absolute top-0 right-1 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
					{notificationCount}
				</span>
				<FontAwesomeIcon icon={faBell} />
			</button>

			{/* Avatar */}
			<button className="w-12 h-12 rounded-full overflow-hidden">
				<img className="w-full h-full object-cover" src={Avatar} alt="Avatar" />
			</button>
		</div>
	);
};

export default Account;
