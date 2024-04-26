import Avatar from "../../assets/ImagesExample/Avatar.jpg";
export interface UserData {
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

export const userData: UserData[] = [
	{
		id: 1,
		username: "vanan99",
		email: "vanan99@gmail.com",
		avatar: Avatar,
		name: "Nguyen Van An",
		role: "",
		isOnline: false,
		lastOnline: "",
		notificationCount: 2,
	},
];
