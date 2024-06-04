import { Organization } from "@/types/types";
import { serverUrl } from "@/lib/config";

interface ApiErrorDetails {
  message: string;
  status: number;
}

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const createOrganization = async (name: string): Promise<Organization> => {
  try {
    const response = await fetch(`${serverUrl}/organizations`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new ApiError("Failed to create organization", response.status);
    }
  } catch (error) {
    throw new Error("An error occurred while creating organization");
  }
};

const getOrganizations = async (): Promise<Organization[]> => {
  try {
    const response = await fetch(`${serverUrl}/organizations`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      return response.json();
    } else {
      const errorDetails: ApiErrorDetails = await response.json();
      throw new ApiError(errorDetails.message, response.status);
    }
  } catch (error) {
    throw error; // Rethrow the caught error without modification
  }
};

export { createOrganization, getOrganizations, ApiError };
