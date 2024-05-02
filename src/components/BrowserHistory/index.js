import {Component} from 'react'
import './index.css'
import BrowserHistoryItem from '../BrowserHistoryItem'

class BrowserHistory extends Component {
  render() {
    const {searchResults, deleteHistory} = this.props
    return (
      <ul className="list-container">
        {searchResults.map(eachHistory => (
          <BrowserHistoryItem
            historyDetails={eachHistory}
            key={eachHistory.id}
            deleteHistory={deleteHistory}
          />
        ))}
      </ul>
    )
  }
}
export default BrowserHistory
