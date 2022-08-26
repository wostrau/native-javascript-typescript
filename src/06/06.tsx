import React from 'react';

export const User = () => {
    const deleteUser = () => {
        alert('User was deleted')
    };

    const saveUser = () => {
        alert('User was saved')
    };

    return <div>
        ALex
        <button onClick={deleteUser}>save</button>
        <button onClick={saveUser}>delete</button>
    </div>
};