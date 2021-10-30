import React from 'react';
import { useEffect, useState } from 'react';
import UserCard from '../UserCard';

const Main = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])
  
    return (
        <div>
            {
                users.map(user => <UserCard userInfo={user} key={user.id}></UserCard>)
            }
        </div>
    );
};

export default Main;