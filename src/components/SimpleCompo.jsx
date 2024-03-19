import React, { useState, useCallback } from 'react';
import Count1 from './Count1';
import Count2 from './Count2';
import useUpdateDocument from '../hooks/useUpdateDocument';
import useMousePosition from '../hooks/useMousePosition';
import useCounter from '../hooks/useCounter';
import useFetchUsers from '../hooks/useFetchUsers';


export default function SimpleCompo() {

    // useUpdateDocument(count1);
    //    useMousePosition()
    const users = useFetchUsers(`https://jsonplaceholder.typicode.com/users`)
    console.log("this is simple compo ", users)
    return (
        <>
            <p>
                {users && JSON.stringify(users[0])}
            </p>
            {/* <Count1 />
            <br />
            <Count2 /> */}
        </>
    );
}
