import React from 'react';
import {
    Route
} from 'react-router-dom';
import Home from '../client/components/Home';
// https://react-ssr-api.herokuapp.com/
export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
        </div>
    );
}