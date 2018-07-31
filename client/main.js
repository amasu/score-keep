import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'John Doe';
    let jsx = (
        <div>
            {/*Rendering h1 title*/}
            <h1>{title}</h1>
            <p>Welcome to my house {name}!</p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
});
