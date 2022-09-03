import React, { Component } from 'react'
import Jukebox from './Jukebox'
import './App.css'
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      songs: [
        {id: 1, song: 'Wish You Were Here', artist: 'Pink Floyd'},
        {id: 2, song: 'Uncle John\'s Band', artist: 'Grateful Dead'},
        {id: 3, song: 'Lover Lay Down', artist: 'Dave Matthews Band'}
      ]
    }
  }
  addSong = (newSong) => {
    this.setState({songs: [...this.state.songs, newSong]})
  }
  deleteSong = (id) => {
    const filteredSongs = this.state.songs.filter(song => song.id !== id)
    this.setState({ songs: filteredSongs})
  }

  render() {
    return (
      <main className='App'>
        <h1>🎶 Juke Box Hero 🎙</h1>
        {!this.state.songs.length && 
        <div>
          <h2>🎶🎵 No songs listed yet, but if you hum a few bars I'll try to sing along 🎵🎶</h2>
          <h3>Or just add a few songs</h3>
        </div>}
        <Form addSong={this.addSong}/>
        <Jukebox songs={this.state.songs} deleteSong={this.deleteSong}/>
      </main>
    )
  }
}

export default App