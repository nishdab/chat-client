import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/common/Loader";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { authActions, signUp } from "@/slices/authSlice";

const SignUp: React.FC = () => {
  const router = useRouter();
  const { dispatch } = useAppStore();

  const status = useAppSelector((state) => state.auth.status);
  const error = useAppSelector((state) => state.auth.error);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(signUp({ email, password }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(authActions.clearAuthStatus());
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="bg-white rounded-lg py-5 font-lato">
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign Up
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>

                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex items-center  px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex items-center  px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <button
                  style={{ background: "#3f0e40" }}
                  className="cursor-pointer w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl focus:ring-4 focus:ring-purple-blue-100 bg:slack-ui-3f0e40"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? <Loader /> : "Sign Up"}
                </button>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="text-sm leading-relaxed text-grey-900">
                  Already have an account?{"   "}
                  <div
                    onClick={() => router.push("/auth/login")}
                    className="inline-block font-bold text-grey-700 cursor-pointer"
                  >
                    Login
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
