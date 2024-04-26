import React from "react";
// import { Loading } from "../components/Loading";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { useNavigate } from "react-router-dom";
// import { setLoading } from "../redux/loadingSlice";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { CollectionList } from "../components/Collection/CollectionList";
import Banner from "../components/main/Banner";

type Props = {
	//
};

export const Home: React.FC<Props> = (props) => {
	console.log(props);

	// const loading = useSelector((state: RootState) => state.loading);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	return (
		<>
			<Header />
			<main className="ml-auto mr-auto max-w-screen-xl px-5 py-4">
				<Banner />
				<div className="py-6">
					{/* Top collection */}
					<div className="flex justify-between items-center"></div>
					<CollectionList />
				</div>
				{/* {loading && <Loading />} */}
			</main>
			<Footer />
		</>
	);
};
