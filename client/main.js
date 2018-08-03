import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from "../imports/api/players";

/*
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
*/

const renderParty = function(playerList){
//    let numbers = [{val: 7}, {val: 2}, {val: 2}];

    let newplayers = playerList.map(function (player) {
        return <p key={player._id}>{player.name} has a score of {player.score} point(s).</p>;
    });
    return newplayers;
};

/*
const renderParty = function(){
    return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>];
};
*/

const handleSubmit = function(e){
    e.preventDefault();
    let playerName=e.target.playerName.value;
    if(playerName){
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

Meteor.startup(function () {
    Tracker.autorun(function(){
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let name = 'John Doe';
        let jsx = (
            <div>
                {/*Rendering h1 title*/}
                <h1>{title}</h1>
                <p>Welcome to my house {name}!</p>
                {renderParty(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name"/>
                    <button>Add player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById("app"));
    });
/*    Players.insert({
        name: 'Jane',
        score: 30
    });*/
});
