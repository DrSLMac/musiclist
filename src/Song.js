import React from 'react'
import './Song.css'

const Song = ({ song, artist, id, deleteSong }) => {
    return (
        <div className='song'>
            <h2>Song: {song}</h2>
            <h3>Artist: {artist}</h3>
            <button className='delete-button' onClick={() => deleteSong(id)}>🗑</button>
        </div>
    )
}

export default Song