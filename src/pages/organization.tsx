import React, { useState } from "react";

const CreateOrganization = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = await response.json();
      setMessage(`Organization created successfully with ID: ${result.id}`);
      setName(""); // Reset the form
    } catch (error) {
      setMessage(`Failed to create organization: ${(error as Error).message}`);
    }
  };

  return (
    <div>
      <h1>Create Organization</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Organization Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create Organization</button>
      </form>
    </div>
  );
};

export default CreateOrganization;
