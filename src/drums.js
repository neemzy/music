'use strict';

let React = require('react'),
    Sampler = require('react-music').Sampler,
    Sequencer = require('react-music').Sequencer;

module.exports = () => (
    <Sequencer resolution={16} bars={1}>
        <Sampler
            sample="/samples/hihat.wav"
            steps={[0, 4, 8, 12]}
        />
        <Sampler
            sample="/samples/kick.wav"
            steps={[0, 8, 10, 14]}
        />
        <Sampler
            sample="/samples/snare.wav"
            steps={[4, 7, 12]}
        />
    </Sequencer>
);
