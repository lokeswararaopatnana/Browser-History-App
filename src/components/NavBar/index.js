import {Component} from 'react'
import './index.css'
import BrowserHistory from '../BrowserHistory/index'
import EmptyHistory from '../EmptyHistory/index'

class NavBar extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {historyList, deleteHistory} = this.props
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="App-container">
        <div className="nav-bar">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="input-element"
              type="search"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="output">
          {searchResults.length === 0 ? (
            <EmptyHistory />
          ) : (
            <BrowserHistory
              searchResults={searchResults}
              deleteHistory={deleteHistory}
            />
          )}
        </div>
      </div>
    )
  }
}
export default NavBar
