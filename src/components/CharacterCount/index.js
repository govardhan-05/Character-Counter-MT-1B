import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCount extends Component {
  state = {searchInput: '', wordsList: []}

  onInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onStart = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newText = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newText],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state
    return (
      <div className="main-container">
        <div className="container-1">
          <h1 className="heading-1">Count the characters like a Boss...</h1>
          <div className="cont">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="li-element">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="img-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  className="image"
                  alt="no user inputs"
                />
              </div>
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="heading-2">Character Counter</h1>
          <div className="form-container">
            <form onSubmit={this.onStart}>
              <div className="input-container">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter the characters here"
                  onChange={this.onInput}
                  value={searchInput}
                />
                <button className="button" type="submit" onClick={this.onStart}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
