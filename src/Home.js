
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [views, setViews] = useState(0);

    return (
        <div className="home-page">
            <h1 class="centify">Hello world!</h1>
            <br></br>
                <h2 class="centify">My name is Zayd Alnuweiri, I'm a third-year BACS student.</h2>
                <p class="centify"><strong><small>Banner: B00934739</small></strong></p>
                <br></br>
                    <h4 class="centify">This is my placeholder page for the Lab 5 Assignment.</h4>
                <br></br>
                        <h4 class="centify">Please navigate to the "Lab 5" page using the navbar at the top of the page.</h4>
        </div>
    );
};

export default Home;
