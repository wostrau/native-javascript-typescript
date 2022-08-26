import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    };

    const saveUser = () => {
        alert('User was saved')
    };

    const onFocuslostHandler = () => {
        alert('Focus lost!')
    };

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    };

    return <div>
        <textarea onBlur={onFocuslostHandler}>ALex</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name={'deleteUser'} onClick={deleteUser}>save</button>
        <button name={'saveUser'} onClick={saveUser}>delete</button>
    </div>
};