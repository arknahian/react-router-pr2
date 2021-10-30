import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, [userId]);

 const {name, email, website} = user;
    return (
        <div>
            <h1>this is user details</h1>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h3>{website}</h3>
        </div>
    );
};

export default UserDetails;