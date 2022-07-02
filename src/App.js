import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

class App extends Component {
  state = {list: [], inputText: ''}

  onChangeState = e => {
    this.setState({inputText: e.target.value})
  }

  onAddToList = event => {
    event.preventDefault()
    this.setState(prev => ({
      list: [...prev.list, {id: v4(), text: prev.inputText}],
      inputText: '',
    }))
  }

  render() {
    const {inputText, list} = this.state

    return (
      <div className="bg-1">
        <div className="d1">
          <h1 className="h1">Count the Characters like a Boss...</h1>
          <ul>
            {list.length === 0 ? (
              <img
                className="img1"
                alt="no user inputs"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              />
            ) : (
              list.map(each => (
                <li key={each.id}>
                  <p className="p1">
                    {each.text} : {each.text.length}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="d2">
          <h1 className="h2">Character Counter</h1>
          <form className="d3" onSubmit={this.onAddToList}>
            <input
              type="text"
              className="in1"
              placeholder="Enter the Characters here"
              value={inputText}
              onChange={this.onChangeState}
            />
            <button className="b1" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
