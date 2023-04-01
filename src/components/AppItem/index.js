import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="app-container">
        <img src={imageUrl} alt={appName} className="app-emoji" />
        <p className="app-head">{appName}</p>
      </li>
    )
  }
}
export default AppItem
