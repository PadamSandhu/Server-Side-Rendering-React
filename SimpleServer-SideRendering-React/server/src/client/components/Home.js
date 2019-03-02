import React from 'react';

const Home = () => {
    return <div > 
            <h1>I am Home Component!! </h1>
            <button onClick={()=> console.log("Hello There")}>Press Me</button>
        </div>;
};

export default Home