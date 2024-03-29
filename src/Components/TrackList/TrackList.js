import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track'
export class TrackList extends React.Component {
    render() {
      return (
        <div className="TrackList">
            {this.props.tracks.map((item,i) => <Track track={item} key={item.id} onClick={this.props.onClick} isRemoval={this.props.isRemoval}/>)}
        </div>
      );
    } 
}