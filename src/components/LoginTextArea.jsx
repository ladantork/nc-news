
import React from 'react';

export default function LoginTextArea({ user }) {
    return (
        <div>
            <div key={user.username}>
                <p>Username: {user.username}</p>
                <p>Name: {user.name}</p>
              
                    <img src={user.avatar_url} alt={user.name} width="100" height="100" />
           
            </div>
        </div>
    );
}


