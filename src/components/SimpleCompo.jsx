import React, { useState, useCallback } from 'react';
import Count1 from './Count1';
import Count2 from './Count2';
import useUpdateDocument from '../hooks/useUpdateDocument';
import useMousePosition from '../hooks/useMousePosition';
import useCounter from '../hooks/useCounter';
import FetchUsers from '../hooks/fetchUsers';


export default function SimpleCompo() {

    // useUpdateDocument(count1);
    //    useMousePosition()
    const users = FetchUsers(`https://jsonplaceholder.typicode.com/users`)
    return (
        <>
            <p>
                {users && JSON.stringify(users)}
            </p>
            {/* <Count1 />
            <br />
            <Count2 /> */}
        </>
    );
}
