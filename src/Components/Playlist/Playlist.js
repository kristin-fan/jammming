import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        const newName = e.target.value;
        this.props.onNameChange(newName);
    }
    
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                {/* <!-- Add a TrackList component --> */}
                <TrackList tracks={this.props.playlistTracks}
                        onRemoval={this.props.onRemove}
                        isRemoval={true} />
                {/* {console.log('test', this.props.playlistTracks)} */}
                <a className="Playlist-save"
                    onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        )
    }
}

export default Playlist;