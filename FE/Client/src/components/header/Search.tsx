import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface SearchProps {
	onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<form onSubmit={handleSubmit} className="relative">
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchChange}
				className="pl-10 pr-8 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
				placeholder="Search anything in here"
			/>
			<div className="absolute inset-y-0 left-0 flex items-center pl-3">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="h-5 w-5 text-gray-500"
				/>
			</div>
		</form>
	);
};

export default Search;
