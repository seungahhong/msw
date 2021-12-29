import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/login")
      .then((res) => res.json())
      // Update the state with the received response
      .then(setUserData)
      .catch((error) => console.log(error));
  }, []);

  return (
    userData && (
      <div>
        <h1>
          <span data-testid="firstName">{userData.firstName}</span>{" "}
          <span data-testid="lastName">{userData.lastName}</span>
        </h1>
        <p data-testid="userId">{userData.id}</p>
      </div>
    )
  );
}

export default App;
