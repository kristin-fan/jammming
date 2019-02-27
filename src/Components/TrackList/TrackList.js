import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class Tracklist extends React.Component {
	render() {
		return (        
			<div className="TrackList">
					{
						this.props.tracks.map(track => {
							return <Track tracks={track} 
											key={track.id}
											onAdd={this.props.onAdd}
											onRemove={this.props.onRemove}
											isRemoval={this.props.isRemoval} />
						})
					}
			</div>)
		}
}

export default Tracklist;