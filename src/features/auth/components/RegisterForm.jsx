import { useState } from "react";
import { register } from "../api/authApi";

import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [icon_url, setIconUrl] = useState("pfp.jpg");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ nickname, email, password, icon_url });
      console.log("Login successful:", data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Image Section */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnRlfGVufDB8fDB8fHww')",
            }}
          ></div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Create an Account!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@doe@mail.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-white">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******************"
                />
              </div>

              {/* Nickname Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-white">
                  Nickname
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Your nickname"
                />
              </div>

              {/* Icon Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-white">
                  Icon
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white flex items-center justify-between"
                    onClick={() => setIsIconMenuOpen(!isIconMenuOpen)}
                  >
                    <span>Choose an Icon</span>
                    <img
                      src={icon_url}
                      alt="Selected Icon"
                      className="h-8 w-8 rounded-full border ml-2"
                    />
                  </button>
                  {isIconMenuOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 border rounded-lg shadow-lg">
                      <div className="flex justify-around p-4">
                        {[icon1, icon2, icon3].map((icon, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            className={`h-12 w-12 cursor-pointer border-2 rounded-full ${
                              icon_url === icon
                                ? "border-green-600"
                                : "border-gray-300"
                            }`}
                            onClick={() => {
                              setIconUrl(icon);
                              setIsIconMenuOpen(false); // Close menu after selection
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Register Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
