import React from 'react'
import './Jukebox.css'
import Song from './Song'

const Jukebox = ({songs, deleteSong }) => {
    const songCards = songs.map(song => {
        return (
            <Song 
                song={song.song}
                artist={song.artist}
                id={song.id}
                key={song.id}
                deleteSong={deleteSong}
            />
        )
    })
    return (
        <div className='jukebox'>
            {songCards}
        </div>
    )
}

export default Jukebox