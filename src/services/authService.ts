import { serverUrl } from "@/lib/config";

export const loginService = async (email: string, password: string) => {
  try {
    const response = await fetch(`${serverUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || "Login failed";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Throw the caught error without appending any additional message
    throw error;
  }
};

export const signUpService = async (email: string, password: string) => {
  try {
    const response = await fetch(`${serverUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || "Sign up failed";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Throw the caught error without appending any additional message
    throw error;
  }
};
