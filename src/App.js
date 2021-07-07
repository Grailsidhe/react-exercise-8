import React from "react";
import "./Styles.css";

export default function SignupForm() {
  const [newEmail, setNewEmail] = React.useState([""]);
  const [newName, setNewName] = React.useState([""]);

  const display = (e) => {
    e.preventDefault();
    console.log(newName, newEmail);
  };

  return (
    <form>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </label>
      <p>
        <button type="submit" onClick={display}>
          Submit
        </button>
      </p>
    </form>
  );
}
