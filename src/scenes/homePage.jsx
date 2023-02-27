import React from 'react';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';


export default function Homepage() {
    return(
        <React.Fragment>
            <Navbar/>
            <TodoList/>
        </React.Fragment>
    );

}
