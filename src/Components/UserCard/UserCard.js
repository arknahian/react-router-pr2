import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = (props) => {
    const {name, email, id} = props.userInfo;
    return (
        <div className="userCard">
            <Link to={"/user/"+id}><h3 className="name">{name}</h3></Link>
            <h4>email: {email}</h4>
        </div>
    );
};

export default UserCard;