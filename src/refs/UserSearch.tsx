import { useState, useRef, useEffect } from "react";

const Users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Adrian", age: 10 },
];

const UserSearch: React.FC = () => {
  // creates a reference to a input element in
  // order to give autofocus to the element
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus;
  }, []);

  const onClick = () => {
    const foundUser = Users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
