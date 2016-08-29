'use strict';

let React = require('react'),
    Song = require('react-music').Song,
    Bass = require('./bass'),
    Drums = require('./drums'),
    Guitar = require('./guitar');

module.exports = ({ playing }) => (
    <Song
        tempo={140}
        playing={playing}
    >
        <Drums />
        <Bass />
        <Guitar />
    </Song>
);
