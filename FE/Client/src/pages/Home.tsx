import React from "react";
import Nav from "../components/header/Nav";
import { Loading } from "../components/Loading";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

import { setLoading } from "../redux/loadingSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

type Props = {
	//
};

export const Home: React.FC<Props> = (props) => {
	console.log(props);

	const loading = useSelector((state: RootState) => state.loading);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<main className="bg-slate-600 w-full h-screen flex justify-center items-center">
				<button
					className="p-2 bg-blue-500 text-white rounded-lg"
					type="button"
					onClick={(e) => {
						e.preventDefault();
						dispatch(setLoading(true));
					}}
				>
					Loading
				</button>
				<button
					className="p-4 bg-blue-500 text-white rounded-lg ml-3"
					type="button"
					onClick={(e) => {
						e.preventDefault();
						navigate("/Login");
					}}
				>
					LogIn
				</button>
				{loading && <Loading />}
			</main>
			<Footer />
		</>
	);
};
