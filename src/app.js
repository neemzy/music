'use strict';

let React = require('react'),
    render = require('react-dom').render,
    Player = require('./player'),
    PlugInBaby = require('./plugInBaby');

render(
    <Player><PlugInBaby /></Player>,
    document.getElementById('app')
);
