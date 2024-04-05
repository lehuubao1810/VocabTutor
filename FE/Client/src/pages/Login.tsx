import React from "react";
import { Link, useLocation } from "react-router-dom";
import RobotIcon from "../assets/icon/Robot.png";
import ggIcon from "../assets/icon/ggIcon.png";
import bgIcon from "../assets/icon/book_hardset.png";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
	const location = useLocation();

	return (
		<div className="my-10 pb-10">
			<ul className="flex gap-10 font-sans">
				<li>
					<Link
						to="/signup"
						className={`text-2xl font-semibold underline-offset-8 ${
							location.pathname === "/signup" ? "underline" : ""
						}`}
					>
						Sign Up
					</Link>
				</li>
				<li>
					<Link
						to="/login"
						className={`font text-2xl font-semibold underline-offset-8 ${
							location.pathname === "/login" ? "underline" : ""
						}`}
					>
						Log In
					</Link>
				</li>
			</ul>
		</div>
	);
};

type LoginProps = {};

export const Login: React.FC<LoginProps> = (props) => {
	console.log(props);
	return (
		<>
			<header></header>
			<main className="lg px-4">
				<div className="flex items-center justify-center h-screen ">
					{/* Left page */}
					<div className="w-1/2 h-screen relative bg-gradient-to-r from-cyan-300 to-blue-300 max-lg:hidden max-md:hidden">
						<div className="">
							{/* <img
                className="absolute top-10 left-10 w-1/5 h-1/5 object-cover"
                src={RobotIcon}
                alt=""
              /> */}
							<img className="" src={bgIcon} alt="" />
						</div>
						<div className="absolute flex flex-col bottom-0 left-0 p-10 gap-2">
							<h1 className=" text-4xl font-bold text-white">VocabTutor</h1>
							<p className="text-xl font-semibold font-serif text-gray-500">
								Today a reader, tomorrow a leader ...
							</p>
						</div>
					</div>
					{/* Right page */}
					<div className="w-1/2 px-20 max-lg:w-full max-md:w-full max-md:px-4">
						<Navigation />
						<button className="flex items-center justify-center gap-2 w-full border-2 border-gray-500 bg-transparent text-gray-500 hover:text-gray-800 hover:border-gray-800 py-2 px-4 rounded-lg">
							<img className="w-7 h-7" src={ggIcon} alt="" />
							Login with Google
						</button>

						<div className="my-10 flex items-center justify-center">
							<span className="block w-full h-0.5 bg-slate-500"></span>
							<p className="w-full whitespace-nowrap px-4 text-center text-slate-500 font-medium">
								Or Login with email & password
							</p>
							<span className="block w-full h-0.5 bg-slate-500"></span>
						</div>
						<p className="text-4xl text-center text-gray-500 font-bold mx-5">
							Welcome back !
						</p>
						<form
							className="mb-20 pt-4 flex flex-col justify-center gap-4"
							action="POS"
						>
							<div className="flex flex-col gap-2">
								<label
									className="w-fit px-2 ml-3 -mb-5 z-0 bg-white text-xl font-medium text-gray-500"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="border-2 border-gray-500 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label
									className="w-fit px-2 ml-3 -mb-5 z-0 bg-white text-xl font-medium text-gray-500"
									htmlFor="password"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									required
									className="border-2 border-gray-500  rounded-lg w-full py-2 px-4
						focus:outline-none focus:ring-2 focus:ring-blue-600
						focus:border-transparent"
								/>
							</div>
							<button
								className="w-full border-2 rounded-lg bg-blue-400 text-white font-medium py-2 px-4 mt-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75"
								type="submit"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</main>
			<footer></footer>
		</>
	);
};

export default Login;
