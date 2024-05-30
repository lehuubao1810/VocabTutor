// Header.tsx
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

type UserDropDownProps = {
	isOpen: boolean;
	userData: any;
};

const UserDropDown: React.FC<UserDropDownProps> = ({ isOpen, userData }) => {
	const navigate = useNavigate();
	return (
		<div
			className={`${
				isOpen ? "" : "hidden"
			} absolute -right-4 top-16 max-md:top-12 `}
		>
			<div className="absolute right-1 -top-3 w-10 h-10 transform text-gray-300">
				<FontAwesomeIcon icon={faCaretUp} />
			</div>
			<div className="relative z-10 w-72 h-72 rounded-3xl bg-slate-50 flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="flex flex-col items-center">
						<img
							src={userData.avatar}
							alt={userData.name}
							className="w-20 h-20 rounded-full overflow-hidden bg-cover"
						/>
						<h2 className="text-xl font-semibold">{userData.username}</h2>
						<span className="text-sm">{userData.name}</span>
					</div>
					<button
						onClick={() => {
							navigate("/Account");
						}}
						className="py-2 px-4 border rounded-full border-black text-blue-600 hover:bg-blue-100"
					>
						Account management
					</button>
					<button
						onClick={() => {
							navigate("/login");
						}}
						className="py-2 px-6 border rounded border-black bg-white hover:bg-gray-200"
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
};
export default UserDropDown;
