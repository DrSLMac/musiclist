import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            song: '',
            artist: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    submitSong = event => {
        event.preventDefault()
        const newSong = {
            id: Date.now(),
            ...this.state
        }
        this.props.addSong(newSong)
        this.clearInput()
    }
    clearInput = () => {
        this.setState({song: '', artist: ''})
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Song'
                    name='song'
                    value={this.state.song}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type='text'
                    placeholder='Artist'
                    name='artist'
                    value={this.state.artist}
                    onChange={event => this.handleChange(event)}
                    />
                <button className="submit-button" onClick={event => this.submitSong(event)}>SUBMIT</button>     
            </form>
        )
    }
}

export default Form