import React, { useState } from "react";
// import Nav from "../components/header/Nav";
import ggIcon from "../assets/icon/ggIcon.png";
import bgIcon from "../assets/icon/Sign_up_gb.png";
import AuthForm from "../components/AuthForm";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

type signUpProps = {
	//
};

export const SignUp: React.FC<signUpProps> = (props) => {
  // Nav part
//   const headerLinks = [
//     { to: "/signup", label: "Sign Up" },
//     { to: "/login", label: "Log In" },
//   ];

  const navigate = useNavigate();

  // Form part
  const loginField = [
    {
      label: "User Name",
      type: "userName",
      id: "userName",
      name: "userName",
      placeholder: "Enter your User Name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter your password",
    },
    {
      label: "Check password",
      type: "password",
      id: "Repass",
      name: "RePass",
      placeholder: "Enter your password again",
    },
  ];

  // State to manage form input data
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    RePass: "",
  });
  // Function to handle input change and update form data state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // handle submit
  const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.RePass) {
      toast.error("Passwords do not match");
    } else {
      console.log("Form submitted with data:", formData);
    }
    // navigate("/Home"); ....
  };

  return (
    <>
      <header></header>
      <main className="lg px-4">
        <ToastContainer />
        <div className="flex h-screen ">
          {/* Left page */}
          <div className="w-1/2 h-screen relative bg-gradient-to-r from-pink-300 to-cyan-300 max-lg:hidden max-md:hidden">
            <div className="absolute top-20 right-10 ">
              <img
                className="w-full h-full object-contain"
                src={bgIcon}
                alt=""
              />
            </div>
            <div className="absolute flex flex-col bottom-0 left-0 p-10 gap-2">
              <h1 className=" text-4xl font-bold text-white">VocabTutor</h1>
              <p className="text-xl font-semibold font-serif text-gray-500">
                Today a reader, tomorrow a leader ...
              </p>
            </div>
          </div>
          {/* Right page */}
          <div className="flex flex-col start-0 w-1/2 px-20 max-lg:w-full max-md:w-full max-md:px-4">
            <div className="">
              {/* <Nav links={headerLinks} /> */}
              <button onClick={() => navigate("/signup")}>Sign up</button>
              <button onClick={() => navigate("/login")}>Log in</button>
            </div>
            <button className="flex items-center justify-center gap-2 w-full border-2 border-gray-500 bg-transparent text-gray-500 hover:text-gray-800 hover:border-gray-800 py-2 px-4 rounded-lg">
              <img className="w-7 h-7" src={ggIcon} alt="" />
              Sign Up with Google
            </button>

            <div className="my-10 flex items-center justify-center">
              <span className="block w-full h-0.5 bg-slate-500"></span>
              <p className="w-full whitespace-nowrap px-4 text-center text-slate-500 font-medium">
                Or Login with email & password
              </p>
              <span className="block w-full h-0.5 bg-slate-500"></span>
            </div>
            <p className="text-4xl text-center text-gray-500 font-bold mx-5">
              Welcome to VocabTutor!
            </p>
            <AuthForm
              fields={loginField}
              onSubmit={handleSignUpSubmit}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default SignUp;
