import {useState} from 'react';
const Users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Adrian', age: 10}
]

const UserSearch: React.FC = () =>{
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name:string, age: number}|undefined>(undefined);

  const onClick = () => {
    const foundUser = Users.find(user => {
      return user.name === name;
    }); 
    setUser(foundUser);
  }

  return <div>
    <h3>User Search</h3>
    <input value={name} onChange={ e => setName(e.target.value)}/>
    <button onClick={onClick}>Search</button>
    <div>
      {user && user.name}
      {user && user.age}  
    </div>
  </div>
}

export default UserSearch;