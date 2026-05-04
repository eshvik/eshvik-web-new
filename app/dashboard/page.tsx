"use client";

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");

  const createSite = () => {
    if (!name) return alert("Enter site name");

    const url = `https://${name}.eshvik.in`;
    alert("Site Created: " + url);

    // later we will save to database
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🚀 ESHVIK Dashboard</h1>

      <input
        placeholder="Enter site name (example: mysite)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />

      <button onClick={createSite}>Create Site</button>

      <p style={{ marginTop: 20 }}>
        Your site will be: <b>{name}.eshvik.in</b>
      </p>
    </div>
  );
}