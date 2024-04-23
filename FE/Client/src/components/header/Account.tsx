import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UserDropDown from "./UserDropDown";
import { dummyData } from "./data";
interface AccountProps {
	id: number;
	username: string;
	email: string;
	avatar: string;
	name: string;
	role: string;
	isOnline: boolean;
	lastOnline: string;
	notificationCount: number;
}
const Account: React.FC<AccountProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const checkDropDown = () => {
		setIsOpen((prevState) => !prevState);
		console.log("Check drop down");
	};
	const userData = dummyData[0];
	return (
		<div className="flex items-center space-x-4">
			{/* Button with '+' icon */}
			<button className="w-9 h-9 border-2 rounded-full bg-blue-600 hover:bg-blue-400 focus:outline-none focus:bg-blue-400 max-md:hidden">
				<FontAwesomeIcon icon={faPlus} className="text-white" />
			</button>

			{/* Notification button */}
			<button className="relative w-10 h-10 border-2 flex justify-center items-center rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 animate-shake max-md:hidden">
				<span className="absolute top-0 right-1 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
					{userData.notificationCount}
				</span>
				<FontAwesomeIcon icon={faBell} />
			</button>

			{/* Avatar */}
			<div className="relative flex justify-center items-center w-12 h-12 max-md:w-10 max-md:h-10">
				<button
					onClick={checkDropDown}
					className="w-12 h-12 rounded-full overflow-hidden max-md:w-7 max-md:h-7"
				>
					<img
						className="w-full h-full object-cover"
						src={userData.avatar}
						alt="Avatar"
					/>
					<span className="absolute top-1 right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center text-white text-xs hidden max-md:flex ">
						{userData.notificationCount}
					</span>
				</button>
				<UserDropDown userData={userData} isOpen={isOpen} />
			</div>
		</div>
	);
};

export default Account;
