'use strict';

let React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            playing: false
        };
    },

    togglePlaying: function() {
        this.setState({ playing: !this.state.playing });
    },

    render: function() {
        return (
            <div>
                {React.cloneElement(this.props.children, { playing: this.state.playing })}
                <button onClick={this.togglePlaying}>{this.state.playing ? 'Stop' : 'Play'}</button>
            </div>
        );
    }
});
