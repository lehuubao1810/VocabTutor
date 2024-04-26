import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { VocabularyFlipCard } from "../components/vocabulary/VocabularyCard"; // <- Sửa thành VocabularyFlipCard
type Props = {};
export const Collection: React.FC<Props> = () => {
	const loading = useSelector((state: RootState) => state.loading);
	const location = useLocation();
	const data = location.state as {
		collectionID: string;
		name: string;
		desc: string;
		value: number;
		date: string;
		vocabulary: {
			word: string;
			translation: string;
			mean: string;
			pronunciation: string;
			example: string;
		}[];
	};

	return (
		<>
			<Header />
			<main className="bg-gray-100">
				<div className="ml-auto mr-auto max-w-screen-xl px-20 py-4">
					<div className="px-4 py-6">
						<h1 className="text-3xl font-bold">{data.name}</h1>
						<p className="text-xl font-semibold text-gray-600 pt-4 pb-2 px-5">
							{data.desc}
						</p>
						<span className="text-lg font-semibold px-5">
							<FontAwesomeIcon icon={faCalendar} /> {data.date}
						</span>
					</div>
					<div className="flex justify-between items-center gap-8">
						<button className="w-full h-12 rounded-md border-2 text-lg font-semibold bg-white hover:bg-gray-300">
							Learn vocabulary
						</button>
						<button className="w-full h-12 rounded-md border-2 text-lg font-semibold bg-blue-400 text-white hover:bg-blue-300">
							Share this vocabulary{" "}
							<FontAwesomeIcon icon={faShareFromSquare} className="ml-3" />
						</button>
					</div>
					<div className="mt-5">
						{/* Flip card */}
						<VocabularyFlipCard vocabularyData={data.vocabulary} />{" "}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};
