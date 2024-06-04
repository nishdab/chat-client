import { ChannelFormProps } from "@/types/types";
import React, { useState } from "react";

const ChannelForm: React.FC<ChannelFormProps> = ({
  onCreate,
  errorMessage,
}) => {
  const [channelName, setChannelName] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate(channelName, organizationName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="channelName">Channel Name:</label>
        <input
          id="channelName"
          type="text"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="organizationName">Organization ID:</label>
        <input
          id="organizationName"
          type="text"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button type="submit">Create Channel</button>
    </form>
  );
};

export default ChannelForm;
