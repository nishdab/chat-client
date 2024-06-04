import React, { useState } from "react";
import ChannelForm from "../components/ChannelForm";

const CreateChannelPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreate = async (
    channelName: string,
    organizationName: string
  ) => {
    try {
      const response = await fetch("/api/channel", {
        // Adjust this endpoint as needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: channelName, organizationName }),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to create channel.");
      }

      // Reset or navigate away upon successful creation
      console.log("Channel created successfully");
    } catch (error) {
      setErrorMessage((error as Error).message || "An error occurred.");
    }
  };

  return (
    <div>
      <h1>Create a New Channel</h1>
      <ChannelForm onCreate={handleCreate} errorMessage={errorMessage} />
    </div>
  );
};

export default CreateChannelPage;
