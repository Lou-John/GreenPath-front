import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { register } from "../api/authApi";
import { Link } from "react-router-dom";

import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [iconurl, setIconUrl] = useState("pfp.jpg");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("Registration successful!");
  const navigate = useNavigate(); // Assuming you're using react-router-dom for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return;
    }
    try {
      const data = await register({ nickname, email, password, iconurl });
      setSuccessMessage("Registration successful!"); // Set success message
      // Redirect to /login after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000); // 2-second delay
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nickname
                </label>
                <input
                  placeholder="Joe Pecci"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <button
                  id="dropdownUsersButton"
                  data-dropdown-toggle="dropdownUsers"
                  data-dropdown-placement="bottom"
                  className="text-black bg-gray-50 border border-gray-300 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setIsIconMenuOpen(!isIconMenuOpen)}
                >
                  Choose profile picture{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <img src={iconurl} className="w-10 h-10 rounded-full" />
              </div>
              {isIconMenuOpen && (
                <div
                  id="dropdownUsers"
                  className="absolute bg-white rounded-lg shadow-sm dark:bg-gray-700"
                >
                  <ul
                    className="grid grid-cols-3 h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUsersButton"
                  >
                    {[
                      icon1,
                      icon2,
                      icon3,
                      icon1,
                      icon2,
                      icon3,
                      icon1,
                      icon2,
                      icon3,
                    ].map((icon, index) => (
                      <li key={index}>
                        <a
                          onClick={() => {
                            setIconUrl(icon);
                            setIsIconMenuOpen(false);
                          }}
                          className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <img
                            className="w-6 h-6 me-2 rounded-full"
                            src={icon}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                disabled={
                  !/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
                  password.length < 5 ||
                  nickname.length < 3
                } // Disable button if conditions are not met
                className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:outline-none focus:ring-4 
                  ${
                    /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) &&
                    password.length >= 5 &&
                    nickname.length >= 3
                      ? "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Success Message */}
      {successMessage && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-10 py-6 rounded-lg shadow-lg text-lg font-bold">
          {successMessage}
        </div>
      )}
    </section>
  );
}

export default RegisterForm;
