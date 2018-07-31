import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const party = [{
    _id : '1',
    name : 'John Doe',
    score: '47'
}, {
    _id : '2',
    name : 'Jane Doe',
    score : '99'
}, {
    _id : '3',
    name : 'Jane Calamity',
    score : '66'
}];

const renderParty = function(){
    let numbers = [{val: 1}, {val: 2}, {val: 2}];

    let newNumbers = numbers.map(function (number) {
        return number.val - 1;
    });


};

/*
const renderParty = function(){
    return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>];
};
*/

Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'John Doe';
    let jsx = (
        <div>
            {/*Rendering h1 title*/}
            <h1>{title}</h1>
            <p>Welcome to my house {name}!</p>
            {renderParty()}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
});
